import cohere from "cohere-ai";

cohere.init(process.env.COHERE_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { personaDescription, messages } = req.body;

  if (!personaDescription || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  // Build prompt with persona + conversation history
  const prompt = `You are roleplaying as someone with this personality: "${personaDescription}". Stay in character.you should act like someone looking to meet new people and looking for love.\n\n${messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n")}\nAssistant:`;

  try {
    const response = await cohere.generate({
      model: "command-light",
      prompt,
      max_tokens: 200,
      temperature: 0.8,
      stop_sequences: ["User:", "Assistant:"],
    });

    const reply = response.body.generations[0]?.text?.trim();
    if (!reply) throw new Error("No reply from Cohere");

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Cohere generation error:", err);
    res.status(500).json({ error: "Cohere generation failed" });
  }
}

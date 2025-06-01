require('dotenv').config({ path: '.env.local' });
const dns = require("dns");
const fetch = require("node-fetch");

console.log("Cohere API Key:", process.env.COHERE_API_KEY ? "FOUND" : "NOT FOUND");


async function test() {
  console.log("Testing DNS lookup for api.cohere.ai...");
  dns.lookup("api.cohere.ai", (err, address) => {
    if (err) {
      console.error("DNS lookup failed:", err);
    } else {
      console.log("api.cohere.ai IP address:", address);
    }
  });

  // Wait a little to avoid overlapping console logs
  await new Promise((r) => setTimeout(r, 1000));

  console.log("Testing API request to Cohere...");
  try {
    const res = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        model: "command-light",
        prompt: "Hello",
        max_tokens: 5,
      }),
    });

    

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("API request failed with status:", res.status, errorBody);
      return;
    }

    const data = await res.json();
    console.log("API response:", data);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

test();

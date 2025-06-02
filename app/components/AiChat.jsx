"use client";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCircle, Bot, Loader2Icon, Send } from "lucide-react";

export default function AiChat({ description, activeUser }) {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const user = useSelector((state) => state.user)

  console.log(user);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const updatedConversation = [
      ...conversation,
      {
        role: "user",
        content: input.trim(),
        timestamp: new Date().toISOString(),
      },
    ];

    setConversation(updatedConversation);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personaDescription: description,
          messages: updatedConversation,
        }),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error?.error || "Failed to get response");
      }

      const data = await res.json();

      setConversation([
        ...updatedConversation,
        {
          role: "assistant",
          content: data.reply,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      alert(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto h-[600px] flex flex-col border rounded-xl shadow bg-white">
      {/* Chat Scrollable Space */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 flex flex-col justify-end">
        {conversation.length === 0 && !loading && (
          <div className="text-center text-gray-400 text-sm italic">
            Start the conversation...
          </div>
        )}

        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" && (
              <img
                src={activeUser.roundedImage}
                alt={activeUser.name}
                className="w-4 h-4  object-cover rounded-full"
              />
            )}

            <div
              className={`max-w-xs px-4 py-3 text-sm md:text-base rounded-2xl shadow-sm whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              {msg.content}
              <div className="text-[10px] mt-1 text-gray-400 text-right">
                {msg.timestamp
                  ? new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </div>
            </div>

            {msg.role === "user" && (
              <img
              src={user?.roundedImage || null}
              alt={user?.name || 'Annonymous'}
                className="w-4 h-4  object-cover rounded-full"
              />
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-sm text-gray-400 italic">
            <Loader2Icon className="w-4 h-4 animate-spin" />
            typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="border-t px-4 py-3 flex gap-3">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          disabled={loading}
          className="flex-1 resize-none border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          disabled={loading || input.trim().length === 0}
          className={`rounded-full p-2 transition-colors ${
            loading || input.trim().length === 0
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

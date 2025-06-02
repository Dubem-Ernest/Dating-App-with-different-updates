// app/chat/page.jsx
"use client";

import { Suspense } from "react";
import Chatpage from "./Chatpage";

export default function ChatPage() {
  return (
    <Suspense fallback={<p className="p-4">Loading chat...</p>}>
      <Chatpage />
    </Suspense>
  );
}

// components/chat/ChatBox.tsx
"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

interface Message {
  id: number;
  sender: "user" | "assistant";
  text: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
    };

    // Agregar mensaje de usuario
    setMessages((prev) => [...prev, newMessage]);

    // Simular respuesta del asistente
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "assistant",
          text: `Respuesta automática a: "${text}"`,
        },
      ]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-900">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender} message={msg.text} />
        ))}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}

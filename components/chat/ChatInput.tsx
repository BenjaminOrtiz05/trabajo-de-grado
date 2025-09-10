// components/chat/ChatInput.tsx
"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-gray-700 p-2 bg-gray-800">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="flex-1 rounded-lg border border-gray-600 bg-gray-900/50 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit" variant="default" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg shadow hover:opacity-90">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}

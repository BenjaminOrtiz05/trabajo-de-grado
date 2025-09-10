// components/chat/MessageBubble.tsx
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  sender: "user" | "assistant";
  message: string;
}

export default function MessageBubble({ sender, message }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow transition-all duration-200",
        sender === "user"
          ? "ml-auto bg-blue-600 text-white"
          : "mr-auto bg-gray-700 text-gray-100"
      )}
    >
      {message}
    </div>
  );
}

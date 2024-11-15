import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  isAi?: boolean;
}

const Message = ({ content, isAi }: MessageProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg max-w-[80%] animate-slide-up",
        isAi
          ? "bg-gray-800/50 mr-auto border border-gray-700"
          : "bg-gray-700/50 ml-auto border border-gray-600"
      )}
    >
      <p className="text-sm leading-relaxed text-gray-200">{content}</p>
    </div>
  );
};

export default Message;
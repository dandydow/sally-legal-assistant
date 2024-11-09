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
          ? "bg-sally-slate/20 mr-auto border border-sally-slate/20"
          : "bg-sally-azure/20 ml-auto border border-sally-azure/20"
      )}
    >
      <p className="text-sm leading-relaxed">{content}</p>
    </div>
  );
};

export default Message;
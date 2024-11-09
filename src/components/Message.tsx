import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  isAi?: boolean;
}

const Message = ({ content, isAi }: MessageProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg max-w-[80%]",
        isAi
          ? "bg-sally-slate/20 mr-auto"
          : "bg-sally-azure/20 ml-auto"
      )}
    >
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Message;
import { useState } from "react";
import { Link } from "react-router-dom";
import ChatInput from "@/components/ChatInput";
import Message from "@/components/Message";
import QuickActions from "@/components/QuickActions";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  content: string;
  isAi: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (message: string) => {
    setMessages((prev) => [...prev, { content: message, isAi: false }]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content: "I'm analyzing your request. How can I assist you further?",
          isAi: true,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    handleSend(`Execute ${action} action`);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-24 pb-8">
      <div className="bg-sally-slate/10 rounded-lg border border-sally-slate p-4 min-h-[600px] flex flex-col relative">
        <Link
          to="/dashboard"
          className="absolute top-4 right-4"
        >
          <Button variant="outline" size="icon">
            <LayoutDashboard className="h-4 w-4" />
          </Button>
        </Link>
        
        <h1 className="text-2xl font-semibold mb-8 text-center">
          How can I help you?
        </h1>
        
        <div className="flex-grow space-y-4 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              isAi={message.isAi}
            />
          ))}
        </div>
        
        <div className="space-y-4">
          <QuickActions onAction={handleQuickAction} disabled={isLoading} />
          <ChatInput onSend={handleSend} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
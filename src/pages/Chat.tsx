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
    <div className="flex flex-col h-screen bg-sally-navy">
      <div className="flex-grow overflow-hidden relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <h1 className="text-3xl font-semibold text-sally-silver">
                  How can I help you?
                </h1>
                <p className="text-sally-silver/60 max-w-md">
                  I'm your AI legal assistant. Ask me anything about your cases or legal matters.
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <Message key={index} content={message.content} isAi={message.isAi} />
              ))
            )}
          </div>
          
          <div className="border-t border-sally-slate/20 bg-sally-navy/90 backdrop-blur-sm p-4 space-y-4">
            <QuickActions onAction={handleQuickAction} disabled={isLoading} />
            <div className="max-w-3xl mx-auto">
              <ChatInput onSend={handleSend} disabled={isLoading} />
            </div>
          </div>
        </div>
        
        <Link to="/dashboard" className="absolute top-4 right-4">
          <Button variant="outline" size="icon" className="bg-sally-slate/20 hover:bg-sally-slate/30">
            <LayoutDashboard className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chat;
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
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="flex-grow overflow-hidden relative">
        <div className="absolute inset-0 flex flex-col">
          {messages.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-2xl mx-auto space-y-8">
                <h1 className="text-4xl font-semibold text-gray-200 text-center">
                  How can I help you?
                </h1>
                <p className="text-gray-400 text-center max-w-lg mx-auto">
                  I'm your AI legal assistant. Ask me anything about your cases or legal matters.
                </p>
                <div className="w-full">
                  <ChatInput onSend={handleSend} disabled={isLoading} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              <div className="max-w-3xl mx-auto space-y-6">
                {messages.map((message, index) => (
                  <Message key={index} content={message.content} isAi={message.isAi} />
                ))}
              </div>
            </div>
          )}
          
          <div className="border-t border-gray-800 bg-gray-900/90 backdrop-blur-sm p-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <QuickActions onAction={handleQuickAction} disabled={isLoading} />
              <div className="flex items-center gap-2">
                <ChatInput onSend={handleSend} disabled={isLoading} />
                <Link to="/dashboard">
                  <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700 border-gray-700">
                    <LayoutDashboard className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
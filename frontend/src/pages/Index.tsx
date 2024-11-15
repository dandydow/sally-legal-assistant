import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Shield, Lock } from "lucide-react";

const phrases = [
  "Revolutionizing access to justice with AI",
  "Your legal assistant powered by artificial intelligence",
  "Law and technology, together",
];

const Index = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl font-bold gradient-text mb-4">SALLY</h1>
          <p className="text-lg text-gray-400 mb-2">
            Systematic AI Legal Liaison for You
          </p>
          <div className="h-8">
            <p className="typing-effect text-xl text-sally-silver">
              {phrases[currentPhrase]}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <Link to="/chat">
              <Button size="lg" className="animate-slide-up">
                <MessageSquare className="w-5 h-5 mr-2" />
                Try SALLY Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="animate-slide-up">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-sally-slate/20 rounded-lg border border-sally-slate">
              <Shield className="w-12 h-12 text-sally-azure mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-400">
                Your data is encrypted and protected with enterprise-grade security
              </p>
            </div>
            <div className="p-6 bg-sally-slate/20 rounded-lg border border-sally-slate">
              <MessageSquare className="w-12 h-12 text-sally-azure mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400">
                Advanced AI technology to assist with legal research and analysis
              </p>
            </div>
            <div className="p-6 bg-sally-slate/20 rounded-lg border border-sally-slate">
              <Lock className="w-12 h-12 text-sally-azure mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Compliant</h3>
              <p className="text-gray-400">
                Fully compliant with legal and data protection regulations
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
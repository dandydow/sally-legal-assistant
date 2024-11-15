import { Button } from "@/components/ui/button";
import { Shield, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-sally-navy/90 backdrop-blur-sm border-b border-sally-slate z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-roboto-slab font-bold gradient-text">SALLY</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help
          </Button>
          <Button variant="ghost" size="sm">
            <Shield className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
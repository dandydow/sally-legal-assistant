import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">SALLY</h3>
              <p className="text-sm text-gray-400">
                Systematic AI Legal Liaison for You
              </p>
            </div>
            <div className="flex justify-center space-x-8">
              <div>
                <h4 className="text-sm font-semibold mb-2">Legal</h4>
                <div className="space-y-1">
                  <a href="#" className="block text-sm text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                  <a href="#" className="block text-sm text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Support</h4>
                <div className="space-y-1">
                  <a href="#" className="block text-sm text-gray-400 hover:text-white">
                    Help Center
                  </a>
                  <a href="#" className="block text-sm text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} SALLY. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
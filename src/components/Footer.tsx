import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-[#0080FF] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#FF0080] border-4 border-black flex items-center justify-center font-bold text-xl shadow-[4px_4px_0px_#000000]">
                PT
              </div>
              <span className="font-bold text-xl text-white">
                Programmer Tools
              </span>
            </div>
            <p className="text-white font-bold">
              The fastest way to solve your daily coding problems.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white hover:text-[#00FF80] font-bold">
                Home
              </Link>
              <Link to="/tools" className="block text-white hover:text-[#00FF80] font-bold">
                Tools
              </Link>
              <Link to="/about" className="block text-white hover:text-[#00FF80] font-bold">
                About
              </Link>
              <Link to="/contact" className="block text-white hover:text-[#00FF80] font-bold">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-4 border-black text-center">
          <p className="text-white font-bold">
            © 2024 Programmer Tools Hub. Built with ❤️ for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}

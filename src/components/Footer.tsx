import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t-[6px] border-black bg-[#0080FF] mt-20 shadow-[0_-6px_0px_#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#FF0080] border-[5px] border-black flex items-center justify-center font-black text-2xl shadow-[6px_6px_0px_#000000] rotate-[5deg]">
                PT
              </div>
              <span className="font-black text-2xl text-white uppercase tracking-tight">
                DevToolsHUB
              </span>
            </div>
            <p className="text-white font-bold text-lg leading-relaxed">
              The fastest way to solve your daily coding problems.
            </p>
          </div>

          <div>
            <h3 className="font-black text-xl sm:text-2xl text-white mb-4 sm:mb-6 uppercase tracking-tight">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-white hover:text-[#00FF80] font-bold text-lg transition-colors hover:translate-x-1 inline-block">
                → Home
              </Link>
              <Link to="/tools" className="block text-white hover:text-[#00FF80] font-bold text-lg transition-colors hover:translate-x-1 inline-block">
                → Tools
              </Link>
              <Link to="/about" className="block text-white hover:text-[#00FF80] font-bold text-lg transition-colors hover:translate-x-1 inline-block">
                → About
              </Link>
              <Link to="/contact" className="block text-white hover:text-[#00FF80] font-bold text-lg transition-colors hover:translate-x-1 inline-block">
                → Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-black text-xl sm:text-2xl text-white mb-4 sm:mb-6 uppercase tracking-tight">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white border-[5px] border-black flex items-center justify-center shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all rotate-[-3deg] hover:rotate-[3deg]"
              >
                <Github size={28} strokeWidth={2.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white border-[5px] border-black flex items-center justify-center shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all rotate-[3deg] hover:rotate-[-3deg]"
              >
                <Twitter size={28} strokeWidth={2.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white border-[5px] border-black flex items-center justify-center shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all rotate-[-3deg] hover:rotate-[3deg]"
              >
                <Linkedin size={28} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-[4px] sm:border-t-[5px] border-black text-center">
          <p className="text-white font-black text-sm sm:text-base md:text-lg uppercase tracking-wide">
            © 2024 DevToolsHUB. Built with ❤️ for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
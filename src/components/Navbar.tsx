import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b-[6px] border-black bg-[#FF0080] sticky top-0 z-50 shadow-[0_6px_0px_#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-14 h-14 bg-[#00FF80] border-[5px] border-black flex items-center justify-center font-black text-2xl shadow-[6px_6px_0px_#000000] rotate-[-5deg] group-hover:rotate-[5deg] transition-transform">
              PT
            </div>
            <span className="font-black text-2xl text-white hidden sm:block uppercase tracking-tight">
              Programmer Tools
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`border-[5px] border-black font-black text-base shadow-[5px_5px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#000000] transition-all uppercase tracking-wide ${
                    isActive(link.path)
                      ? "bg-[#00FF80] text-black rotate-[-2deg]"
                      : "bg-white text-black hover:bg-[#0080FF] hover:text-white"
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 bg-white border-[5px] border-black shadow-[5px_5px_0px_#000000] active:shadow-[2px_2px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px]"
          >
            {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {links.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className={`w-full border-[5px] border-black font-black shadow-[5px_5px_0px_#000000] uppercase tracking-wide ${
                    isActive(link.path)
                      ? "bg-[#00FF80] text-black"
                      : "bg-white text-black hover:bg-[#0080FF] hover:text-white"
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
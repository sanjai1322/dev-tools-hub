import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  color: string;
}

export default function ToolCard({ icon: Icon, title, description, path, color }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to={path}>
        <div className={`${color} border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[6px] transition-all cursor-pointer h-full rotate-[-1deg] hover:rotate-[1deg]`}>
          <div className="bg-white border-[5px] border-black w-20 h-20 flex items-center justify-center mb-6 shadow-[6px_6px_0px_#000000] rotate-[3deg]">
            <Icon size={40} className="text-black" strokeWidth={3} />
          </div>
          <h3 className="font-black text-3xl mb-3 text-black uppercase tracking-tight">{title}</h3>
          <p className="text-black font-bold text-lg mb-6 leading-tight">{description}</p>
          <Button className="w-full bg-black text-white border-[5px] border-black font-black text-lg py-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black hover:shadow-[3px_3px_0px_rgba(0,0,0,0.3)] uppercase tracking-wide">
            Open Tool →
          </Button>
        </div>
      </Link>
    </motion.div>
  );
}
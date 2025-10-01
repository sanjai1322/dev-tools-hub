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
      whileHover={{ scale: 1.05, rotate: -1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={path}>
        <div className={`${color} border-4 border-black p-6 shadow-[8px_8px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer h-full`}>
          <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
            <Icon size={32} className="text-black" />
          </div>
          <h3 className="font-bold text-2xl mb-2 text-black">{title}</h3>
          <p className="text-black font-bold mb-4">{description}</p>
          <Button className="w-full bg-black text-white border-4 border-black font-bold shadow-[4px_4px_0px_#000000] hover:bg-white hover:text-black">
            Open Tool
          </Button>
        </div>
      </Link>
    </motion.div>
  );
}

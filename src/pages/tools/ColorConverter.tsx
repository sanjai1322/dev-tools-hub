import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Copy, Palette, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ColorConverter() {
  const [hexColor, setHexColor] = useState("#FF0080");
  const [rgbColor, setRgbColor] = useState("rgb(255, 0, 128)");
  const [hslColor, setHslColor] = useState("hsl(328, 100%, 50%)");

  const hexToRgb = (hex: string) => {
    // Remove # if present and validate
    const cleanHex = hex.replace('#', '');
    if (!/^[0-9A-F]{6}$/i.test(cleanHex)) {
      return null;
    }
    
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(cleanHex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const updateFromHex = (hex: string) => {
    // Ensure hex starts with #
    const formattedHex = hex.startsWith('#') ? hex : `#${hex}`;
    setHexColor(formattedHex);
    
    const rgb = hexToRgb(formattedHex);
    if (rgb) {
      setRgbColor(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      setHslColor(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`);
    } else {
      toast.error("Invalid HEX color format");
    }
  };

  const copyColor = (color: string, format: string) => {
    navigator.clipboard.writeText(color);
    toast.success(`${format} color copied to clipboard!`);
  };

  const clear = () => {
    setHexColor("#000000");
    setRgbColor("rgb(0, 0, 0)");
    setHslColor("hsl(0, 0%, 0%)");
    toast.success("Cleared!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#FFD700] border-[6px] border-black w-20 h-20 flex items-center justify-center shadow-[8px_8px_0px_#000000] rotate-[3deg]">
              <Palette size={40} className="text-black" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Color Converter
              </h1>
              <p className="text-lg font-bold text-black">
                Convert between HEX, RGB, and HSL color formats
              </p>
            </div>
          </div>

          {/* Color Picker */}
          <div className="bg-[#FF0080] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
            <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Pick a Color</h2>
            <div className="flex gap-4 items-center">
              <input
                type="color"
                value={hexColor}
                onChange={(e) => updateFromHex(e.target.value)}
                className="w-32 h-32 border-[6px] border-black shadow-[8px_8px_0px_#000000] cursor-pointer"
              />
              <div
                className="flex-1 h-32 border-[6px] border-black shadow-[8px_8px_0px_#000000]"
                style={{ backgroundColor: hexColor }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* HEX */}
            <div className="bg-[#0080FF] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
              <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">HEX</h2>
              <Input
                value={hexColor}
                onChange={(e) => updateFromHex(e.target.value)}
                className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-mono font-black text-lg mb-4"
              />
              <Button
                onClick={() => copyColor(hexColor, "HEX")}
                className="w-full bg-black text-white border-[5px] border-black font-black py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide"
              >
                <Copy className="mr-2" size={20} strokeWidth={3} />
                Copy HEX
              </Button>
            </div>

            {/* RGB */}
            <div className="bg-[#00FF80] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">RGB</h2>
              <Input
                value={rgbColor}
                readOnly
                className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-mono font-black text-lg mb-4 bg-white"
              />
              <Button
                onClick={() => copyColor(rgbColor, "RGB")}
                className="w-full bg-black text-white border-[5px] border-black font-black py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide"
              >
                <Copy className="mr-2" size={20} strokeWidth={3} />
                Copy RGB
              </Button>
            </div>

            {/* HSL */}
            <div className="bg-[#9D4EDD] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
              <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">HSL</h2>
              <Input
                value={hslColor}
                readOnly
                className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-mono font-black text-lg mb-4 bg-white"
              />
              <Button
                onClick={() => copyColor(hslColor, "HSL")}
                className="w-full bg-black text-white border-[5px] border-black font-black py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide"
              >
                <Copy className="mr-2" size={20} strokeWidth={3} />
                Copy HSL
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={clear}
              className="bg-[#FF6B35] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[2deg] hover:rotate-[0deg]"
            >
              <Trash2 className="mr-2" size={24} strokeWidth={3} />
              Clear
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Copy, Type, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convertCase = (type: string) => {
    if (!input) {
      toast.error("Please enter text to convert");
      return;
    }

    let result = "";
    switch (type) {
      case "upper":
        result = input.toUpperCase();
        break;
      case "lower":
        result = input.toLowerCase();
        break;
      case "title":
        result = input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        break;
      case "sentence":
        result = input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case "camel":
        result = input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
          index === 0 ? word.toLowerCase() : word.toUpperCase()
        ).replace(/\s+/g, "");
        break;
      case "snake":
        result = input.toLowerCase().replace(/\s+/g, "_");
        break;
      case "kebab":
        result = input.toLowerCase().replace(/\s+/g, "-");
        break;
      default:
        result = input;
    }
    setOutput(result);
    toast.success(`Converted to ${type} case!`);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  const clear = () => {
    setInput("");
    setOutput("");
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
            <div className="bg-[#FF0080] border-[6px] border-black w-20 h-20 flex items-center justify-center shadow-[8px_8px_0px_#000000] rotate-[-3deg]">
              <Type size={40} className="text-white" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Text Case Converter
              </h1>
              <p className="text-lg font-bold text-black">
                Convert text between different case formats
              </p>
            </div>
          </div>

          <div className="bg-[#0080FF] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
            <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Input Text</h2>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your text here..."
              className="min-h-[200px] border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none font-bold"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Button onClick={() => convertCase("upper")} className="bg-[#FFD700] text-black border-[5px] border-black font-black py-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide">
              UPPERCASE
            </Button>
            <Button onClick={() => convertCase("lower")} className="bg-[#00FF80] text-black border-[5px] border-black font-black py-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide">
              lowercase
            </Button>
            <Button onClick={() => convertCase("title")} className="bg-[#9D4EDD] text-white border-[5px] border-black font-black py-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide">
              Title Case
            </Button>
            <Button onClick={() => convertCase("sentence")} className="bg-[#FF6B35] text-white border-[5px] border-black font-black py-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide">
              Sentence
            </Button>
            <Button onClick={() => convertCase("camel")} className="bg-[#FF0080] text-white border-[5px] border-black font-black py-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide">
              camelCase
            </Button>
            <Button onClick={() => convertCase("snake")} className="bg-[#0080FF] text-white border-[5px] border-black font-black py-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide">
              snake_case
            </Button>
            <Button onClick={() => convertCase("kebab")} className="bg-[#FFD700] text-black border-[5px] border-black font-black py-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide">
              kebab-case
            </Button>
          </div>

          {output && (
            <div className="bg-[#00FF80] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Output</h2>
              <Textarea
                value={output}
                readOnly
                className="min-h-[200px] border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none bg-white font-bold"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={copyOutput}
              disabled={!output}
              className="bg-[#9D4EDD] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all disabled:opacity-50 uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
            >
              <Copy className="mr-2" size={24} strokeWidth={3} />
              Copy
            </Button>
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

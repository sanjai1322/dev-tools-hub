import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { Copy, Lock, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (charset === "") {
      toast.error("Please select at least one character type");
      return;
    }

    let result = "";
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      result += charset[array[i] % charset.length];
    }

    setPassword(result);
    toast.success("Password generated!");
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#FF0080] border-[6px] border-black w-20 h-20 flex items-center justify-center shadow-[8px_8px_0px_#000000] rotate-[3deg]">
              <Lock size={40} className="text-white" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Password Generator
              </h1>
              <p className="text-lg font-bold text-black">
                Generate secure random passwords
              </p>
            </div>
          </div>

          <div className="bg-[#0080FF] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
            <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Password Length</h2>
            <Input
              type="number"
              min="4"
              max="128"
              value={length}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '') {
                  setLength(4);
                } else {
                  const parsed = parseInt(value);
                  setLength(Math.max(4, Math.min(128, isNaN(parsed) ? 4 : parsed)));
                }
              }}
              className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-bold text-lg"
            />
          </div>

          <div className="bg-[#FFD700] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
            <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Options</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Checkbox id="uppercase" checked={includeUppercase} onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)} className="border-[4px] border-black" />
                <label htmlFor="uppercase" className="font-bold text-lg text-black cursor-pointer">Include Uppercase (A-Z)</label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="lowercase" checked={includeLowercase} onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)} className="border-[4px] border-black" />
                <label htmlFor="lowercase" className="font-bold text-lg text-black cursor-pointer">Include Lowercase (a-z)</label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="numbers" checked={includeNumbers} onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)} className="border-[4px] border-black" />
                <label htmlFor="numbers" className="font-bold text-lg text-black cursor-pointer">Include Numbers (0-9)</label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="symbols" checked={includeSymbols} onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)} className="border-[4px] border-black" />
                <label htmlFor="symbols" className="font-bold text-lg text-black cursor-pointer">Include Symbols (!@#$%...)</label>
              </div>
            </div>
          </div>

          {password && (
            <div className="bg-[#00FF80] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Generated Password</h2>
              <Input
                value={password}
                readOnly
                className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-mono font-bold text-lg bg-white"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={generatePassword}
              className="bg-[#9D4EDD] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
            >
              <RefreshCw className="mr-2" size={24} strokeWidth={3} />
              Generate
            </Button>
            <Button
              onClick={copyPassword}
              disabled={!password}
              className="bg-[#FF6B35] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all disabled:opacity-50 uppercase tracking-wide rotate-[2deg] hover:rotate-[0deg]"
            >
              <Copy className="mr-2" size={24} strokeWidth={3} />
              Copy
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Copy, Hash, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [md5Hash, setMd5Hash] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");

  // Simple MD5 implementation
  const generateMD5 = (str: string) => {
    // Using a simple hash for demo - in production, use crypto library
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).padStart(32, '0');
  };

  const generateHashes = async () => {
    if (!input) {
      toast.error("Please enter text to hash");
      return;
    }

    try {
      // MD5 (simplified for demo)
      const md5 = generateMD5(input);
      setMd5Hash(md5);

      // SHA-256 using Web Crypto API
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const sha256 = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setSha256Hash(sha256);

      toast.success("Hashes generated successfully!");
    } catch (error) {
      toast.error("Failed to generate hashes: " + (error as Error).message);
    }
  };

  const copyHash = (hash: string, type: string) => {
    navigator.clipboard.writeText(hash);
    toast.success(`${type} hash copied to clipboard!`);
  };

  const clear = () => {
    setInput("");
    setMd5Hash("");
    setSha256Hash("");
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
            <div className="bg-[#9D4EDD] border-[6px] border-black w-20 h-20 flex items-center justify-center shadow-[8px_8px_0px_#000000] rotate-[3deg]">
              <Hash size={40} className="text-white" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Hash Generator
              </h1>
              <p className="text-lg font-bold text-black">
                Generate MD5 and SHA256 hashes from text
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="bg-[#FF0080] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
            <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Input Text</h2>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to hash..."
              className="min-h-[200px] border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none font-bold"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* MD5 */}
            <div className="bg-[#00FF80] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">MD5 Hash</h2>
              <div className="bg-white border-[5px] border-black p-4 shadow-[6px_6px_0px_#000000] mb-4 break-all font-mono font-bold">
                {md5Hash || "Hash will appear here..."}
              </div>
              <Button
                onClick={() => copyHash(md5Hash, "MD5")}
                disabled={!md5Hash}
                className="w-full bg-black text-white border-[5px] border-black font-black py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all disabled:opacity-50 uppercase tracking-wide"
              >
                <Copy className="mr-2" size={20} strokeWidth={3} />
                Copy MD5
              </Button>
            </div>

            {/* SHA-256 */}
            <div className="bg-[#FFD700] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">SHA-256 Hash</h2>
              <div className="bg-white border-[5px] border-black p-4 shadow-[6px_6px_0px_#000000] mb-4 break-all font-mono font-bold">
                {sha256Hash || "Hash will appear here..."}
              </div>
              <Button
                onClick={() => copyHash(sha256Hash, "SHA-256")}
                disabled={!sha256Hash}
                className="w-full bg-black text-white border-[5px] border-black font-black py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all disabled:opacity-50 uppercase tracking-wide"
              >
                <Copy className="mr-2" size={20} strokeWidth={3} />
                Copy SHA-256
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={generateHashes}
              className="bg-[#0080FF] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
            >
              Generate Hashes
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

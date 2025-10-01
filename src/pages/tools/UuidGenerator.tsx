import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Copy, Key, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const generateUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const generateUuids = () => {
    const newUuids = Array.from({ length: count }, () => generateUuid());
    setUuids(newUuids);
    toast.success(`Generated ${count} UUID(s)!`);
  };

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid);
    toast.success("UUID copied to clipboard!");
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join('\n'));
    toast.success("All UUIDs copied to clipboard!");
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
            <div className="bg-[#0080FF] border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_#000000]">
              <Key size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                UUID Generator
              </h1>
              <p className="text-lg font-bold text-black">
                Generate unique identifiers instantly
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-[#FF0080] border-4 border-black p-6 mb-6 shadow-[8px_8px_0px_#000000]">
            <h2 className="text-2xl font-bold mb-4 text-white">Generate UUIDs</h2>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block font-bold text-white mb-2">
                  Number of UUIDs
                </label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                  className="border-4 border-black shadow-[4px_4px_0px_#000000] font-bold"
                />
              </div>
              <Button
                onClick={generateUuids}
                className="bg-[#00FF80] text-black border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
              >
                <RefreshCw className="mr-2" size={20} />
                Generate
              </Button>
            </div>
          </div>

          {/* Generated UUIDs */}
          {uuids.length > 0 && (
            <div className="bg-[#FFD700] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-black">
                  Generated UUIDs ({uuids.length})
                </h2>
                <Button
                  onClick={copyAll}
                  className="bg-[#9D4EDD] text-white border-4 border-black font-bold px-4 py-2 shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
                >
                  <Copy className="mr-2" size={16} />
                  Copy All
                </Button>
              </div>
              <div className="space-y-3">
                {uuids.map((uuid, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_#000000] flex justify-between items-center"
                  >
                    <code className="font-mono font-bold text-black">{uuid}</code>
                    <Button
                      onClick={() => copyToClipboard(uuid)}
                      className="bg-[#0080FF] text-white border-4 border-black font-bold px-3 py-2 shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all"
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

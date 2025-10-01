import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Key, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function JwtDecoder() {
  const [jwtInput, setJwtInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");

  const decodeJwt = () => {
    try {
      const parts = jwtInput.trim().split(".");
      if (parts.length !== 3) {
        toast.error("Invalid JWT format. JWT must have 3 parts separated by dots.");
        return;
      }

      const decodedHeader = JSON.parse(atob(parts[0]));
      const decodedPayload = JSON.parse(atob(parts[1]));

      setHeader(JSON.stringify(decodedHeader, null, 2));
      setPayload(JSON.stringify(decodedPayload, null, 2));
      toast.success("JWT decoded successfully!");
    } catch (error) {
      toast.error("Failed to decode JWT: " + (error as Error).message);
      setHeader("");
      setPayload("");
    }
  };

  const clear = () => {
    setJwtInput("");
    setHeader("");
    setPayload("");
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
              <Key size={40} className="text-white" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                JWT Decoder
              </h1>
              <p className="text-lg font-bold text-black">
                Decode JWT tokens to view header and payload
              </p>
            </div>
          </div>

          {/* JWT Input */}
          <div className="bg-[#0080FF] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
            <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">JWT Token</h2>
            <Textarea
              value={jwtInput}
              onChange={(e) => setJwtInput(e.target.value)}
              placeholder="Paste your JWT token here..."
              className="min-h-[150px] font-mono border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none font-bold"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Header */}
            <div className="bg-[#00FF80] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Header</h2>
              <Textarea
                value={header}
                readOnly
                placeholder="Decoded header will appear here..."
                className="min-h-[300px] font-mono border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none bg-white font-bold"
              />
            </div>

            {/* Payload */}
            <div className="bg-[#FFD700] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Payload</h2>
              <Textarea
                value={payload}
                readOnly
                placeholder="Decoded payload will appear here..."
                className="min-h-[300px] font-mono border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none bg-white font-bold"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={decodeJwt}
              className="bg-[#9D4EDD] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
            >
              Decode JWT
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

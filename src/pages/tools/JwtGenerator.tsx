import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Copy, Key, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function JwtGenerator() {
  const [header, setHeader] = useState('{"alg":"HS256","typ":"JWT"}');
  const [payload, setPayload] = useState('{"sub":"1234567890","name":"John Doe","iat":1516239022}');
  const [secret, setSecret] = useState("your-256-bit-secret");
  const [jwt, setJwt] = useState("");

  const base64UrlEncode = (str: string) => {
    return btoa(str)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  };

  const generateJwt = () => {
    try {
      JSON.parse(header);
      JSON.parse(payload);

      const encodedHeader = base64UrlEncode(header);
      const encodedPayload = base64UrlEncode(payload);
      const signature = base64UrlEncode(secret);

      const token = `${encodedHeader}.${encodedPayload}.${signature}`;
      setJwt(token);
      toast.success("JWT generated successfully!");
    } catch (error) {
      toast.error("Invalid JSON in header or payload: " + (error as Error).message);
    }
  };

  const copyJwt = () => {
    navigator.clipboard.writeText(jwt);
    toast.success("JWT copied to clipboard!");
  };

  const clear = () => {
    setHeader('{"alg":"HS256","typ":"JWT"}');
    setPayload('{"sub":"1234567890","name":"John Doe","iat":1516239022}');
    setSecret("your-256-bit-secret");
    setJwt("");
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
            <div className="bg-[#00FF80] border-[6px] border-black w-20 h-20 flex items-center justify-center shadow-[8px_8px_0px_#000000] rotate-[3deg]">
              <Key size={40} className="text-black" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                JWT Generator
              </h1>
              <p className="text-lg font-bold text-black">
                Create JWT tokens with custom header and payload
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#FF0080] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
              <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Header</h2>
              <Textarea
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                placeholder='{"alg":"HS256","typ":"JWT"}'
                className="min-h-[150px] font-mono border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none font-bold"
              />
            </div>

            <div className="bg-[#0080FF] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
              <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Payload</h2>
              <Textarea
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
                placeholder='{"sub":"1234567890","name":"John Doe"}'
                className="min-h-[150px] font-mono border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none font-bold"
              />
            </div>
          </div>

          <div className="bg-[#FFD700] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
            <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Secret Key</h2>
            <Input
              type="text"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="your-256-bit-secret"
              className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-mono font-bold text-lg"
            />
          </div>

          {jwt && (
            <div className="bg-[#9D4EDD] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
              <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Generated JWT</h2>
              <Textarea
                value={jwt}
                readOnly
                className="min-h-[150px] font-mono border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none bg-white font-bold"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={generateJwt}
              className="bg-[#00FF80] text-black border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
            >
              Generate JWT
            </Button>
            <Button
              onClick={copyJwt}
              disabled={!jwt}
              className="bg-[#0080FF] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all disabled:opacity-50 uppercase tracking-wide rotate-[2deg] hover:rotate-[0deg]"
            >
              <Copy className="mr-2" size={24} strokeWidth={3} />
              Copy JWT
            </Button>
            <Button
              onClick={clear}
              className="bg-[#FF6B35] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
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

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Copy, FileCode, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Base64Tool() {
  const [encodeInput, setEncodeInput] = useState("");
  const [encodeOutput, setEncodeOutput] = useState("");
  const [decodeInput, setDecodeInput] = useState("");
  const [decodeOutput, setDecodeOutput] = useState("");

  const encode = () => {
    try {
      const encoded = btoa(encodeInput);
      setEncodeOutput(encoded);
      toast.success("Encoded successfully!");
    } catch (error) {
      toast.error("Encoding failed: " + (error as Error).message);
    }
  };

  const decode = () => {
    try {
      const decoded = atob(decodeInput);
      setDecodeOutput(decoded);
      toast.success("Decoded successfully!");
    } catch (error) {
      toast.error("Decoding failed: " + (error as Error).message);
    }
  };

  const copyEncoded = () => {
    navigator.clipboard.writeText(encodeOutput);
    toast.success("Copied to clipboard!");
  };

  const copyDecoded = () => {
    navigator.clipboard.writeText(decodeOutput);
    toast.success("Copied to clipboard!");
  };

  const clearEncode = () => {
    setEncodeInput("");
    setEncodeOutput("");
    toast.success("Cleared!");
  };

  const clearDecode = () => {
    setDecodeInput("");
    setDecodeOutput("");
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
            <div className="bg-[#FFD700] border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_#000000]">
              <FileCode size={32} className="text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Base64 Encoder/Decoder
              </h1>
              <p className="text-lg font-bold text-black">
                Encode and decode Base64 strings
              </p>
            </div>
          </div>

          <Tabs defaultValue="encode" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#9D4EDD] border-4 border-black shadow-[4px_4px_0px_#000000] p-2">
              <TabsTrigger
                value="encode"
                className="font-bold data-[state=active]:bg-[#00FF80] data-[state=active]:text-black border-4 border-black shadow-[2px_2px_0px_#000000]"
              >
                Encode
              </TabsTrigger>
              <TabsTrigger
                value="decode"
                className="font-bold data-[state=active]:bg-[#00FF80] data-[state=active]:text-black border-4 border-black shadow-[2px_2px_0px_#000000]"
              >
                Decode
              </TabsTrigger>
            </TabsList>

            <TabsContent value="encode" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#FF0080] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                  <h2 className="text-2xl font-bold mb-4 text-white">Plain Text</h2>
                  <Textarea
                    value={encodeInput}
                    onChange={(e) => setEncodeInput(e.target.value)}
                    placeholder="Enter text to encode..."
                    className="min-h-[300px] border-4 border-black shadow-[4px_4px_0px_#000000] resize-none font-mono"
                  />
                </div>

                <div className="bg-[#0080FF] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                  <h2 className="text-2xl font-bold mb-4 text-white">Base64 Encoded</h2>
                  <Textarea
                    value={encodeOutput}
                    readOnly
                    placeholder="Encoded text will appear here..."
                    className="min-h-[300px] border-4 border-black shadow-[4px_4px_0px_#000000] resize-none font-mono bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Button
                  onClick={encode}
                  className="bg-[#00FF80] text-black border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
                >
                  Encode
                </Button>
                <Button
                  onClick={copyEncoded}
                  disabled={!encodeOutput}
                  className="bg-[#9D4EDD] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all disabled:opacity-50"
                >
                  <Copy className="mr-2" size={20} />
                  Copy
                </Button>
                <Button
                  onClick={clearEncode}
                  className="bg-[#FF6B35] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
                >
                  <Trash2 className="mr-2" size={20} />
                  Clear
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="decode" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#0080FF] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                  <h2 className="text-2xl font-bold mb-4 text-white">Base64 Encoded</h2>
                  <Textarea
                    value={decodeInput}
                    onChange={(e) => setDecodeInput(e.target.value)}
                    placeholder="Enter Base64 to decode..."
                    className="min-h-[300px] border-4 border-black shadow-[4px_4px_0px_#000000] resize-none font-mono"
                  />
                </div>

                <div className="bg-[#FF0080] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                  <h2 className="text-2xl font-bold mb-4 text-white">Decoded Text</h2>
                  <Textarea
                    value={decodeOutput}
                    readOnly
                    placeholder="Decoded text will appear here..."
                    className="min-h-[300px] border-4 border-black shadow-[4px_4px_0px_#000000] resize-none font-mono bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Button
                  onClick={decode}
                  className="bg-[#00FF80] text-black border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
                >
                  Decode
                </Button>
                <Button
                  onClick={copyDecoded}
                  disabled={!decodeOutput}
                  className="bg-[#9D4EDD] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all disabled:opacity-50"
                >
                  <Copy className="mr-2" size={20} />
                  Copy
                </Button>
                <Button
                  onClick={clearDecode}
                  className="bg-[#FF6B35] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
                >
                  <Trash2 className="mr-2" size={20} />
                  Clear
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Copy, FileJson, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      toast.success("JSON formatted successfully!");
    } catch (error) {
      toast.error("Invalid JSON: " + (error as Error).message);
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      toast.success("JSON minified successfully!");
    } catch (error) {
      toast.error("Invalid JSON: " + (error as Error).message);
      setOutput("");
    }
  };

  const copyToClipboard = () => {
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
            <div className="bg-[#FF0080] border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_#000000]">
              <FileJson size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                JSON Formatter
              </h1>
              <p className="text-lg font-bold text-black">
                Format, validate, and minify JSON data
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input */}
            <div className="bg-[#FFD700] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-black">Input JSON</h2>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='{"name": "John", "age": 30}'
                className="min-h-[400px] font-mono border-4 border-black shadow-[4px_4px_0px_#000000] resize-none"
              />
            </div>

            {/* Output */}
            <div className="bg-[#00FF80] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-black">Output</h2>
              <Textarea
                value={output}
                readOnly
                placeholder="Formatted JSON will appear here..."
                className="min-h-[400px] font-mono border-4 border-black shadow-[4px_4px_0px_#000000] resize-none bg-white"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={formatJson}
              className="bg-[#0080FF] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
            >
              Format JSON
            </Button>
            <Button
              onClick={minifyJson}
              className="bg-[#FF0080] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
            >
              Minify JSON
            </Button>
            <Button
              onClick={copyToClipboard}
              disabled={!output}
              className="bg-[#9D4EDD] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all disabled:opacity-50"
            >
              <Copy className="mr-2" size={20} />
              Copy Output
            </Button>
            <Button
              onClick={clear}
              className="bg-[#FF6B35] text-white border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
            >
              <Trash2 className="mr-2" size={20} />
              Clear
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

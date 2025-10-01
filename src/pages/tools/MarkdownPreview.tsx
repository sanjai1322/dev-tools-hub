import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FileText, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function MarkdownPreview() {
  const [markdown, setMarkdown] = useState("# Hello World\n\nThis is a **markdown** preview tool.\n\n- Item 1\n- Item 2\n- Item 3");

  const clear = () => {
    setMarkdown("");
    toast.success("Cleared!");
  };

  // Simple markdown to HTML converter
  const convertMarkdown = (text: string) => {
    let html = text;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mb-2">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-3">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-4">$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold">$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');
    
    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-blue-600 underline">$1</a>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-4">• $1</li>');
    
    // Line breaks
    html = html.replace(/\n/gim, '<br />');
    
    return html;
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
            <div className="bg-[#9D4EDD] border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_#000000]">
              <FileText size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Markdown Preview
              </h1>
              <p className="text-lg font-bold text-black">
                Write and preview markdown in real-time
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Editor */}
            <div className="bg-[#FF0080] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-white">Markdown Editor</h2>
              <Textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="# Enter markdown here..."
                className="min-h-[500px] font-mono border-4 border-black shadow-[4px_4px_0px_#000000] resize-none"
              />
            </div>

            {/* Preview */}
            <div className="bg-[#00FF80] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-black">Live Preview</h2>
              <div
                className="min-h-[500px] bg-white border-4 border-black p-6 shadow-[4px_4px_0px_#000000] overflow-auto"
                dangerouslySetInnerHTML={{ __html: convertMarkdown(markdown) }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-8">
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

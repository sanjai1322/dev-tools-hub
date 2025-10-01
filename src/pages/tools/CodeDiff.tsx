import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { GitCompare, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CodeDiff() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [differences, setDifferences] = useState<string[]>([]);

  const compareDiff = () => {
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');
    const diffs: string[] = [];

    const maxLength = Math.max(lines1.length, lines2.length);

    for (let i = 0; i < maxLength; i++) {
      const line1 = lines1[i] || '';
      const line2 = lines2[i] || '';

      if (line1 !== line2) {
        if (line1 && !line2) {
          diffs.push(`Line ${i + 1}: Removed from Text 2`);
        } else if (!line1 && line2) {
          diffs.push(`Line ${i + 1}: Added in Text 2`);
        } else {
          diffs.push(`Line ${i + 1}: Modified`);
        }
      }
    }

    setDifferences(diffs);
    if (diffs.length === 0) {
      toast.success("No differences found! Texts are identical.");
    } else {
      toast.success(`Found ${diffs.length} difference(s)!`);
    }
  };

  const clear = () => {
    setText1("");
    setText2("");
    setDifferences([]);
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
            <div className="bg-[#FF6B35] border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_#000000]">
              <GitCompare size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Code Diff Checker
              </h1>
              <p className="text-lg font-bold text-black">
                Compare two texts and find differences
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Text 1 */}
            <div className="bg-[#FF0080] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-white">Text 1 (Original)</h2>
              <Textarea
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                placeholder="Enter original text..."
                className="min-h-[400px] font-mono border-4 border-black shadow-[4px_4px_0px_#000000] resize-none"
              />
            </div>

            {/* Text 2 */}
            <div className="bg-[#0080FF] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-white">Text 2 (Modified)</h2>
              <Textarea
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                placeholder="Enter modified text..."
                className="min-h-[400px] font-mono border-4 border-black shadow-[4px_4px_0px_#000000] resize-none"
              />
            </div>
          </div>

          {/* Differences */}
          {differences.length > 0 && (
            <div className="bg-[#FFD700] border-4 border-black p-6 mb-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Differences Found ({differences.length})
              </h2>
              <div className="space-y-2">
                {differences.map((diff, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_#000000] font-bold"
                  >
                    {diff}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={compareDiff}
              className="bg-[#00FF80] text-black border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
            >
              <GitCompare className="mr-2" size={20} />
              Compare
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

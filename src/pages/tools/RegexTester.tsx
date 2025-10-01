import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Regex, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [matches, setMatches] = useState<string[]>([]);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const results = testString.match(regex);
      if (results) {
        setMatches(results);
        toast.success(`Found ${results.length} match(es)!`);
      } else {
        setMatches([]);
        toast.error("No matches found");
      }
    } catch (error) {
      toast.error("Invalid regex pattern: " + (error as Error).message);
      setMatches([]);
    }
  };

  const clear = () => {
    setPattern("");
    setFlags("g");
    setTestString("");
    setMatches([]);
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
            <div className="bg-[#00FF80] border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_#000000]">
              <Regex size={32} className="text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Regex Tester
              </h1>
              <p className="text-lg font-bold text-black">
                Test and debug regular expressions
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Pattern Input */}
            <div className="bg-[#FF0080] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-white">Regex Pattern</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <Input
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    placeholder="Enter regex pattern (e.g., \d+)"
                    className="border-4 border-black shadow-[4px_4px_0px_#000000] font-mono font-bold"
                  />
                </div>
                <Input
                  value={flags}
                  onChange={(e) => setFlags(e.target.value)}
                  placeholder="Flags (g, i, m)"
                  className="border-4 border-black shadow-[4px_4px_0px_#000000] font-mono font-bold"
                />
              </div>
            </div>

            {/* Test String */}
            <div className="bg-[#0080FF] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-white">Test String</h2>
              <Textarea
                value={testString}
                onChange={(e) => setTestString(e.target.value)}
                placeholder="Enter text to test against the regex pattern..."
                className="min-h-[200px] border-4 border-black shadow-[4px_4px_0px_#000000] font-mono resize-none"
              />
            </div>

            {/* Matches */}
            <div className="bg-[#FFD700] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Matches ({matches.length})
              </h2>
              {matches.length > 0 ? (
                <div className="space-y-2">
                  {matches.map((match, index) => (
                    <div
                      key={index}
                      className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_#000000] font-mono font-bold"
                    >
                      {match}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-bold text-black">No matches yet. Test your regex!</p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={testRegex}
              className="bg-[#00FF80] text-black border-4 border-black font-bold px-6 py-6 text-lg shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
            >
              Test Regex
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

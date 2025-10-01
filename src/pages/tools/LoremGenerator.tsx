import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Copy, FileText, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function LoremGenerator() {
  const [wordCount, setWordCount] = useState(50);
  const [sentenceCount, setSentenceCount] = useState(5);
  const [paragraphCount, setParagraphCount] = useState(3);
  const [output, setOutput] = useState("");

  const loremWords = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
    "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
    "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
    "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
    "deserunt", "mollit", "anim", "id", "est", "laborum"
  ];

  const generateWords = () => {
    const words = [];
    for (let i = 0; i < wordCount; i++) {
      words.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }
    setOutput(words.join(" "));
    toast.success(`Generated ${wordCount} words!`);
  };

  const generateSentences = () => {
    const sentences = [];
    for (let i = 0; i < sentenceCount; i++) {
      const sentenceLength = Math.floor(Math.random() * 10) + 5;
      const words = [];
      for (let j = 0; j < sentenceLength; j++) {
        words.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
      }
      const sentence = words.join(" ");
      sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".");
    }
    setOutput(sentences.join(" "));
    toast.success(`Generated ${sentenceCount} sentences!`);
  };

  const generateParagraphs = () => {
    const paragraphs = [];
    for (let i = 0; i < paragraphCount; i++) {
      const sentences = [];
      const sentencesInParagraph = Math.floor(Math.random() * 5) + 3;
      for (let j = 0; j < sentencesInParagraph; j++) {
        const sentenceLength = Math.floor(Math.random() * 10) + 5;
        const words = [];
        for (let k = 0; k < sentenceLength; k++) {
          words.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
        }
        const sentence = words.join(" ");
        sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".");
      }
      paragraphs.push(sentences.join(" "));
    }
    setOutput(paragraphs.join("\n\n"));
    toast.success(`Generated ${paragraphCount} paragraphs!`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  const clear = () => {
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
            <div className="bg-[#00FF80] border-[6px] border-black w-20 h-20 flex items-center justify-center shadow-[8px_8px_0px_#000000] rotate-[-3deg]">
              <FileText size={40} className="text-black" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Lorem Ipsum Generator
              </h1>
              <p className="text-lg font-bold text-black">
                Generate dummy text for your designs
              </p>
            </div>
          </div>

          <Tabs defaultValue="words" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-3 bg-[#9D4EDD] border-[6px] border-black shadow-[8px_8px_0px_#000000] p-2">
              <TabsTrigger
                value="words"
                className="font-black data-[state=active]:bg-[#FFD700] data-[state=active]:text-black border-[5px] border-black shadow-[4px_4px_0px_#000000] uppercase tracking-tight"
              >
                Words
              </TabsTrigger>
              <TabsTrigger
                value="sentences"
                className="font-black data-[state=active]:bg-[#FFD700] data-[state=active]:text-black border-[5px] border-black shadow-[4px_4px_0px_#000000] uppercase tracking-tight"
              >
                Sentences
              </TabsTrigger>
              <TabsTrigger
                value="paragraphs"
                className="font-black data-[state=active]:bg-[#FFD700] data-[state=active]:text-black border-[5px] border-black shadow-[4px_4px_0px_#000000] uppercase tracking-tight"
              >
                Paragraphs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="words" className="mt-6">
              <div className="bg-[#FF0080] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
                <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Word Count</h2>
                <Input
                  type="number"
                  min="1"
                  max="1000"
                  value={wordCount}
                  onChange={(e) => setWordCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-bold text-lg"
                />
                <Button
                  onClick={generateWords}
                  className="w-full mt-4 bg-black text-white border-[5px] border-black font-black py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide"
                >
                  Generate Words
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="sentences" className="mt-6">
              <div className="bg-[#0080FF] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
                <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Sentence Count</h2>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={sentenceCount}
                  onChange={(e) => setSentenceCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-bold text-lg"
                />
                <Button
                  onClick={generateSentences}
                  className="w-full mt-4 bg-black text-white border-[5px] border-black font-black py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide"
                >
                  Generate Sentences
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="paragraphs" className="mt-6">
              <div className="bg-[#FFD700] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
                <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Paragraph Count</h2>
                <Input
                  type="number"
                  min="1"
                  max="50"
                  value={paragraphCount}
                  onChange={(e) => setParagraphCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-bold text-lg"
                />
                <Button
                  onClick={generateParagraphs}
                  className="w-full mt-4 bg-black text-white border-[5px] border-black font-black py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide"
                >
                  Generate Paragraphs
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Output */}
          <div className="bg-[#00FF80] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
            <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Generated Text</h2>
            <Textarea
              value={output}
              readOnly
              placeholder="Generated text will appear here..."
              className="min-h-[300px] border-[5px] border-black shadow-[6px_6px_0px_#000000] resize-none bg-white font-bold"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              onClick={copyToClipboard}
              disabled={!output}
              className="bg-[#9D4EDD] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all disabled:opacity-50 uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
            >
              <Copy className="mr-2" size={24} strokeWidth={3} />
              Copy Text
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

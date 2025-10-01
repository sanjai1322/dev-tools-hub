import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Code2, Regex, Key, FileCode, GitCompare, FileText, Search } from "lucide-react";
import { useState } from "react";

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");

  const tools = [
    {
      icon: Code2,
      title: "JSON Formatter",
      description: "Format and validate JSON data instantly",
      path: "/tools/json",
      color: "bg-[#FF0080]",
    },
    {
      icon: Regex,
      title: "Regex Tester",
      description: "Test and debug regular expressions",
      path: "/tools/regex",
      color: "bg-[#00FF80]",
    },
    {
      icon: Key,
      title: "UUID Generator",
      description: "Generate unique identifiers on demand",
      path: "/tools/uuid",
      color: "bg-[#0080FF]",
    },
    {
      icon: FileCode,
      title: "Base64 Encoder",
      description: "Encode and decode Base64 strings",
      path: "/tools/base64",
      color: "bg-[#FFD700]",
    },
    {
      icon: GitCompare,
      title: "Code Diff",
      description: "Compare code and find differences",
      path: "/tools/diff",
      color: "bg-[#FF6B35]",
    },
    {
      icon: FileText,
      title: "Markdown Preview",
      description: "Preview markdown in real-time",
      path: "/tools/markdown",
      color: "bg-[#9D4EDD]",
    },
  ];

  const filteredTools = tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
            Developer Tools
          </h1>
          <p className="text-xl font-bold text-black mb-8">
            Choose your weapon of choice
          </p>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" size={24} />
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 py-6 text-lg border-4 border-black shadow-[8px_8px_0px_#000000] font-bold focus:shadow-[4px_4px_0px_#000000] focus:translate-x-[4px] focus:translate-y-[4px] transition-all"
            />
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ToolCard {...tool} />
              </motion.div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-black">
                No tools found matching "{searchQuery}"
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

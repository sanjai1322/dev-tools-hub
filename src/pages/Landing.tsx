import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Regex, Key, FileCode, GitCompare, FileText, ArrowRight, Zap, Shield, Rocket } from "lucide-react";
import { Link } from "react-router";

export default function Landing() {
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-center"
          >
            <div className="inline-block bg-[#00FF80] border-[6px] border-black px-8 py-3 mb-8 shadow-[10px_10px_0px_#000000] rotate-[-3deg]">
              <span className="font-black text-black text-xl uppercase tracking-tight">🚀 DEVELOPER TOOLS</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-black leading-none uppercase tracking-tighter">
              All-in-One
              <br />
              <span className="bg-[#FF0080] border-[6px] border-black px-6 py-2 inline-block shadow-[12px_12px_0px_#000000] rotate-[2deg] mt-4">
                Programmer Tools
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-black mb-10 max-w-3xl mx-auto leading-tight">
              The fastest way to solve your daily coding problems.
              <br />
              <span className="font-black">No sign-up. No BS. Just tools.</span>
            </p>

            <Link to="/tools">
              <Button className="bg-[#0080FF] text-white border-[6px] border-black px-12 py-8 text-2xl font-black shadow-[12px_12px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[6px_6px_0px_#000000] transition-all uppercase tracking-wide rotate-[-1deg] hover:rotate-[1deg]">
                Explore Tools <ArrowRight className="ml-3" size={32} strokeWidth={3} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-24 left-12 w-24 h-24 bg-[#FFD700] border-[6px] border-black rotate-[15deg] shadow-[10px_10px_0px_#000000] hidden lg:block" />
        <div className="absolute bottom-24 right-12 w-40 h-40 bg-[#FF6B35] border-[6px] border-black rotate-[-20deg] shadow-[12px_12px_0px_#000000] hidden lg:block" />
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-[#9D4EDD] border-[6px] border-black rotate-[25deg] shadow-[8px_8px_0px_#000000] hidden lg:block" />
      </section>

      {/* Featured Tools */}
      <section className="py-24 px-4 bg-[#FFD700] border-y-[6px] border-black shadow-[0_6px_0px_#000000,0_-6px_0px_#000000]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-center mb-6 text-black uppercase tracking-tighter">
              Featured Tools
            </h2>
            <p className="text-center text-2xl font-bold text-black mb-16 uppercase tracking-wide">
              Everything you need, nothing you don't
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <ToolCard {...tool} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="bg-[#FF0080] border-[6px] border-black p-10 shadow-[12px_12px_0px_#000000] rotate-[-2deg] hover:rotate-[0deg] transition-transform"
            >
              <div className="bg-white border-[5px] border-black w-20 h-20 flex items-center justify-center mb-6 shadow-[6px_6px_0px_#000000] rotate-[5deg]">
                <Zap size={40} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Lightning Fast</h3>
              <p className="text-white font-bold text-lg leading-relaxed">
                All tools run instantly in your browser. No server delays.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="bg-[#00FF80] border-[6px] border-black p-10 shadow-[12px_12px_0px_#000000] rotate-[2deg] hover:rotate-[0deg] transition-transform"
            >
              <div className="bg-white border-[5px] border-black w-20 h-20 flex items-center justify-center mb-6 shadow-[6px_6px_0px_#000000] rotate-[-5deg]">
                <Shield size={40} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">100% Private</h3>
              <p className="text-black font-bold text-lg leading-relaxed">
                Your data never leaves your browser. Complete privacy guaranteed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="bg-[#0080FF] border-[6px] border-black p-10 shadow-[12px_12px_0px_#000000] rotate-[-2deg] hover:rotate-[0deg] transition-transform"
            >
              <div className="bg-white border-[5px] border-black w-20 h-20 flex items-center justify-center mb-6 shadow-[6px_6px_0px_#000000] rotate-[5deg]">
                <Rocket size={40} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Always Free</h3>
              <p className="text-white font-bold text-lg leading-relaxed">
                No subscriptions, no paywalls. Built by devs, for devs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 bg-[#9D4EDD] border-y-[6px] border-black shadow-[0_6px_0px_#000000,0_-6px_0px_#000000]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="bg-white border-[6px] border-black p-14 shadow-[12px_12px_0px_#000000] rotate-[1deg]"
          >
            <p className="text-3xl md:text-4xl font-black text-black mb-8 leading-tight">
              "This is the tool collection I wish I had built myself. Saves me hours every week!"
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-20 bg-[#00FF80] border-[5px] border-black rounded-full flex items-center justify-center font-black text-3xl shadow-[6px_6px_0px_#000000] rotate-[-5deg]">
                JD
              </div>
              <div className="text-left">
                <p className="font-black text-black text-xl uppercase tracking-tight">Jane Developer</p>
                <p className="font-bold text-black text-lg">Senior Engineer @ TechCorp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-black uppercase tracking-tighter leading-none">
              Ready to boost your productivity?
            </h2>
            <p className="text-2xl font-bold text-black mb-10 uppercase tracking-wide">
              Join thousands of developers using our tools daily
            </p>
            <Link to="/tools">
              <Button className="bg-[#FF0080] text-white border-[6px] border-black px-12 py-8 text-2xl font-black shadow-[12px_12px_0px_#000000] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[6px_6px_0px_#000000] transition-all uppercase tracking-wide rotate-[1deg] hover:rotate-[-1deg]">
                Start Using Tools Now <ArrowRight className="ml-3" size={32} strokeWidth={3} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
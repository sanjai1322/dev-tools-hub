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
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-[#00FF80] border-4 border-black px-6 py-2 mb-6 shadow-[8px_8px_0px_#000000] rotate-[-2deg]">
              <span className="font-bold text-black text-lg">🚀 DEVELOPER TOOLS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black leading-tight">
              All-in-One
              <br />
              <span className="bg-[#FF0080] border-4 border-black px-4 inline-block shadow-[8px_8px_0px_#000000] rotate-[1deg]">
                Programmer Tools
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-black mb-8 max-w-2xl mx-auto">
              The fastest way to solve your daily coding problems.
              <br />
              No sign-up. No BS. Just tools.
            </p>

            <Link to="/tools">
              <Button className="bg-[#0080FF] text-white border-4 border-black px-8 py-6 text-xl font-bold shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all">
                Explore Tools <ArrowRight className="ml-2" size={24} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FFD700] border-4 border-black rotate-12 shadow-[8px_8px_0px_#000000] hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#FF6B35] border-4 border-black rotate-[-15deg] shadow-[8px_8px_0px_#000000] hidden lg:block" />
      </section>

      {/* Featured Tools */}
      <section className="py-20 px-4 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">
              Featured Tools
            </h2>
            <p className="text-center text-xl font-bold text-black mb-12">
              Everything you need, nothing you don't
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#FF0080] border-4 border-black p-8 shadow-[8px_8px_0px_#000000]"
            >
              <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Lightning Fast</h3>
              <p className="text-white font-bold">
                All tools run instantly in your browser. No server delays.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#00FF80] border-4 border-black p-8 shadow-[8px_8px_0px_#000000]"
            >
              <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">100% Private</h3>
              <p className="text-black font-bold">
                Your data never leaves your browser. Complete privacy guaranteed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#0080FF] border-4 border-black p-8 shadow-[8px_8px_0px_#000000]"
            >
              <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Always Free</h3>
              <p className="text-white font-bold">
                No subscriptions, no paywalls. Built by devs, for devs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-[#9D4EDD]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-12 shadow-[8px_8px_0px_#000000]"
          >
            <p className="text-2xl md:text-3xl font-bold text-black mb-6">
              "This is the tool collection I wish I had built myself. Saves me hours every week!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-[#00FF80] border-4 border-black rounded-full flex items-center justify-center font-bold text-2xl shadow-[4px_4px_0px_#000000]">
                JD
              </div>
              <div className="text-left">
                <p className="font-bold text-black text-lg">Jane Developer</p>
                <p className="font-bold text-black">Senior Engineer @ TechCorp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to boost your productivity?
            </h2>
            <p className="text-xl font-bold text-black mb-8">
              Join thousands of developers using our tools daily
            </p>
            <Link to="/tools">
              <Button className="bg-[#FF0080] text-white border-4 border-black px-8 py-6 text-xl font-bold shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all">
                Start Using Tools Now <ArrowRight className="ml-2" size={24} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Code2, Heart, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-black">
            About Us
          </h1>

          <div className="bg-[#FF0080] border-4 border-black p-8 mb-8 shadow-[8px_8px_0px_#000000]">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-xl font-bold text-white leading-relaxed">
              We're on a mission to make developers' lives easier by providing fast, reliable, and free tools that solve everyday coding problems. No fluff, no ads, just pure utility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#00FF80] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
                <Code2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Built by Developers</h3>
              <p className="font-bold text-black">
                We understand your pain points because we face them too. Every tool is crafted with real-world use cases in mind.
              </p>
            </div>

            <div className="bg-[#0080FF] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">For Developers</h3>
              <p className="font-bold text-white">
                No tracking, no data collection, no BS. Your privacy is our priority. All tools run locally in your browser.
              </p>
            </div>

            <div className="bg-[#FFD700] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Lightning Fast</h3>
              <p className="font-bold text-black">
                No server round-trips, no loading spinners. Everything happens instantly in your browser for maximum speed.
              </p>
            </div>

            <div className="bg-[#9D4EDD] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
              <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#000000]">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Community Driven</h3>
              <p className="font-bold text-white">
                Got ideas for new tools? We're always listening to the community and adding features that developers actually need.
              </p>
            </div>
          </div>

          <div className="bg-[#FF6B35] border-4 border-black p-8 shadow-[8px_8px_0px_#000000]">
            <h2 className="text-3xl font-bold mb-4 text-white">Why We Built This</h2>
            <p className="text-lg font-bold text-white leading-relaxed mb-4">
              As developers, we were tired of:
            </p>
            <ul className="list-none space-y-2 text-lg font-bold text-white">
              <li>✗ Searching for different tools across multiple websites</li>
              <li>✗ Dealing with ads and popups</li>
              <li>✗ Worrying about data privacy</li>
              <li>✗ Slow, clunky interfaces</li>
              <li>✗ Tools that require sign-ups</li>
            </ul>
            <p className="text-lg font-bold text-white leading-relaxed mt-4">
              So we built the tool hub we always wanted. Simple, fast, and free forever.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

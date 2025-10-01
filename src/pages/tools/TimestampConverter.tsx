import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Clock, Copy, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000).toString());
  const [humanDate, setHumanDate] = useState(new Date().toISOString().slice(0, 16));

  const timestampToHuman = () => {
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) {
        toast.error("Invalid timestamp: must be a number");
        return;
      }
      const date = new Date(ts * 1000);
      if (isNaN(date.getTime())) {
        toast.error("Invalid timestamp: out of range");
        return;
      }
      setHumanDate(date.toISOString().slice(0, 16));
      toast.success("Converted timestamp to human-readable date!");
    } catch (error) {
      toast.error("Invalid timestamp: " + (error as Error).message);
    }
  };

  const humanToTimestamp = () => {
    try {
      const date = new Date(humanDate);
      if (isNaN(date.getTime())) {
        toast.error("Invalid date format");
        return;
      }
      const ts = Math.floor(date.getTime() / 1000);
      setTimestamp(ts.toString());
      toast.success("Converted date to UNIX timestamp!");
    } catch (error) {
      toast.error("Invalid date: " + (error as Error).message);
    }
  };

  const getCurrentTimestamp = () => {
    const ts = Math.floor(Date.now() / 1000);
    setTimestamp(ts.toString());
    setHumanDate(new Date().toISOString().slice(0, 16));
    toast.success("Set to current timestamp!");
  };

  const copyTimestamp = () => {
    navigator.clipboard.writeText(timestamp);
    toast.success("Timestamp copied to clipboard!");
  };

  const copyHumanDate = () => {
    navigator.clipboard.writeText(humanDate);
    toast.success("Date copied to clipboard!");
  };

  const clear = () => {
    setTimestamp("");
    setHumanDate("");
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
            <div className="bg-[#0080FF] border-[6px] border-black w-20 h-20 flex items-center justify-center shadow-[8px_8px_0px_#000000] rotate-[-3deg]">
              <Clock size={40} className="text-white" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                Timestamp Converter
              </h1>
              <p className="text-lg font-bold text-black">
                Convert between UNIX timestamp and human-readable date
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* UNIX Timestamp */}
            <div className="bg-[#FF0080] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
              <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">UNIX Timestamp</h2>
              <Input
                type="text"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                placeholder="1234567890"
                className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-mono font-black text-lg mb-4"
              />
              <div className="flex gap-3">
                <Button
                  onClick={timestampToHuman}
                  className="flex-1 bg-[#00FF80] text-black border-[5px] border-black font-black py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide"
                >
                  Convert →
                </Button>
                <Button
                  onClick={copyTimestamp}
                  disabled={!timestamp}
                  className="bg-[#9D4EDD] text-white border-[5px] border-black font-black px-4 py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all disabled:opacity-50"
                >
                  <Copy size={20} strokeWidth={3} />
                </Button>
              </div>
            </div>

            {/* Human-Readable Date */}
            <div className="bg-[#FFD700] border-[6px] border-black p-8 shadow-[12px_12px_0px_#000000] rotate-[-1deg]">
              <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Human-Readable Date</h2>
              <Input
                type="datetime-local"
                value={humanDate}
                onChange={(e) => setHumanDate(e.target.value)}
                className="border-[5px] border-black shadow-[6px_6px_0px_#000000] font-mono font-black text-lg mb-4"
              />
              <div className="flex gap-3">
                <Button
                  onClick={humanToTimestamp}
                  className="flex-1 bg-[#00FF80] text-black border-[5px] border-black font-black py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all uppercase tracking-wide"
                >
                  ← Convert
                </Button>
                <Button
                  onClick={copyHumanDate}
                  disabled={!humanDate}
                  className="bg-[#9D4EDD] text-white border-[5px] border-black font-black px-4 py-4 shadow-[6px_6px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-all disabled:opacity-50"
                >
                  <Copy size={20} strokeWidth={3} />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#00FF80] border-[6px] border-black p-8 mb-6 shadow-[12px_12px_0px_#000000] rotate-[1deg]">
            <h2 className="text-3xl font-black mb-4 text-black uppercase tracking-tight">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={getCurrentTimestamp}
                className="bg-[#0080FF] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[-2deg] hover:rotate-[0deg]"
              >
                <Clock className="mr-2" size={24} strokeWidth={3} />
                Current Timestamp
              </Button>
              <Button
                onClick={clear}
                className="bg-[#FF6B35] text-white border-[5px] border-black font-black px-8 py-6 text-xl shadow-[8px_8px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all uppercase tracking-wide rotate-[2deg] hover:rotate-[0deg]"
              >
                <Trash2 className="mr-2" size={24} strokeWidth={3} />
                Clear
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
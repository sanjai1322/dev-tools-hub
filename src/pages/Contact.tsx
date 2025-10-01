import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Loader2, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = useMutation(api.tools.submitContact);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContact({ name, email, message });
      toast.success("Message sent successfully! We'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
            Get in Touch
          </h1>
          <p className="text-xl font-bold text-black mb-12">
            Have questions, suggestions, or just want to say hi? Drop us a message!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-[#FF0080] border-4 border-black p-8 shadow-[8px_8px_0px_#000000]">
              <h2 className="text-3xl font-bold mb-6 text-white">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-bold text-white mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="pl-10 border-4 border-black shadow-[4px_4px_0px_#000000] font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-white mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="pl-10 border-4 border-black shadow-[4px_4px_0px_#000000] font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-white mb-2">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-black" size={20} />
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      required
                      rows={6}
                      className="pl-10 border-4 border-black shadow-[4px_4px_0px_#000000] font-bold resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white border-4 border-black font-bold py-6 text-lg shadow-[4px_4px_0px_#000000] hover:bg-white hover:text-black disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#00FF80] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                <h3 className="text-2xl font-bold mb-2 text-black">Quick Response</h3>
                <p className="font-bold text-black">
                  We typically respond within 24 hours. For urgent matters, please include "URGENT" in your subject.
                </p>
              </div>

              <div className="bg-[#0080FF] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                <h3 className="text-2xl font-bold mb-2 text-white">Feature Requests</h3>
                <p className="font-bold text-white">
                  Got an idea for a new tool? We'd love to hear it! The best suggestions get built first.
                </p>
              </div>

              <div className="bg-[#FFD700] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                <h3 className="text-2xl font-bold mb-2 text-black">Bug Reports</h3>
                <p className="font-bold text-black">
                  Found a bug? Let us know! Include details about what happened and we'll fix it ASAP.
                </p>
              </div>

              <div className="bg-[#9D4EDD] border-4 border-black p-6 shadow-[8px_8px_0px_#000000]">
                <h3 className="text-2xl font-bold mb-2 text-white">Partnerships</h3>
                <p className="font-bold text-white">
                  Interested in collaborating? We're always open to partnerships that benefit the developer community.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { sendContactMessage } from "@/app/actions/sendContact";

const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const result = await sendContactMessage(form);

      if (!result.success) {
        throw new Error(result.error || "Something went wrong during delivery.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Form dispatch submission failed:", error);
      setErrorMessage(error.message || "Failed to deliver message. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg-surface border border-border-base rounded p-6 sm:p-8">
      {sent ? (
        <div className="py-12 text-center">
          <p className="font-mono text-[0.65rem] tracking-widest text-status-green mb-2 uppercase">
            // Message Sent Successfully
          </p>
          <p className="text-sm text-text-secondary font-sans">
            Thanks for reaching out! Your message hit my inbox — I&apos;ll get back to you soon.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-6 font-mono text-[11px] text-accent hover:underline bg-transparent border-none outline-none cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-xs font-mono text-red-400">
              Error: {errorMessage}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-[10px] font-mono tracking-wider text-text-faint mb-2 uppercase">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full bg-bg-base border border-border-base rounded px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[10px] font-mono tracking-wider text-text-faint mb-2 uppercase">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full bg-bg-base border border-border-base rounded px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[10px] font-mono tracking-wider text-text-faint mb-2 uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your message details..."
              className="w-full bg-bg-base border border-border-base rounded px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
              rows={5}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-accent hover:bg-accent-hover disabled:bg-border-base text-white rounded font-mono text-xs tracking-wide transition-colors duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
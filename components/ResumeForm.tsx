"use client";

import { useState, useTransition } from "react";
import { sendResumeAction } from "@/app/actions/sendResume";

export default function ResumeFormClient() {
  const [isPending, startTransition] = useTransition();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendResumeAction(formData);
      if (result.success) {
        setStatus({
          type: "success",
          message: "Success! The resume has been dispatched to your inbox.",
        });
        (e.target as HTMLFormElement).reset();
        setSubmitDisabled(true);
      } else {
        setStatus({
          type: "error",
          message:
            result.error || "An unexpected error occurred. Please try again.",
        });
      }
    });
  };

  return (
    <>
      <p className="text-sm text-text-secondary mb-6 max-w-xl leading-relaxed">
        Please fill out your details below. An automated copy of my latest
        resume will be instantly routed directly to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-4 font-mono text-sm"
      >
        <div>
          <label className="block text-[11px] tracking-wider text-text-faint mb-2 uppercase">
            Your Name
          </label>
          <input
            required
            type="text"
            name="name"
            disabled={isPending || submitDisabled}
            placeholder="John Doe"
            className="w-full bg-bg-surface border border-border-base rounded px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent disabled:opacity-50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] tracking-wider text-text-faint mb-2 uppercase">
            Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            disabled={isPending || submitDisabled}
            placeholder="john@example.com"
            className="w-full bg-bg-surface border border-border-base rounded px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent disabled:opacity-50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] tracking-wider text-text-faint mb-2 uppercase">
            Subject / Purpose
          </label>
          <input
            required
            type="text"
            name="subject"
            disabled={isPending || submitDisabled}
            placeholder="Hiring / Collaboration / Research Inquiry"
            className="w-full bg-bg-surface border border-border-base rounded px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent disabled:opacity-50 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isPending || submitDisabled}
          className="font-mono text-[0.65rem] tracking-widest px-6 py-2.5 bg-accent rounded text-bg-base hover:bg-accent-hover disabled:bg-border-base transition-colors duration-200 disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Request Resume →"}
        </button>

        {status.type && (
          <div
            className={`p-4 rounded border text-xs leading-relaxed ${
              status.type === "success"
                ? "bg-green-950/20 border-green-800 text-green-400"
                : "bg-red-950/20 border-red-800 text-red-400"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </>
  );
}

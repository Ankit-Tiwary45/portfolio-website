"use client";

import { socialLinks } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiArrowRight, FiLoader } from "react-icons/fi";

const ContactSchema = z.object({
  name: z.string().min(2, "Please add your name."),
  email: z.string().email("Add a valid email."),
  message: z.string().min(10, "Tell me more about the project."),
});

type ContactValues = z.infer<typeof ContactSchema>;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleClear = () => {
    reset();
    setStatus("idle");
  };

  return (
    <section id="contact" className="space-y-12">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s Build Something Great Together"
        description="I’m a B.Tech 3rd-year student specializing in web development. Contact me for internship opportunities, collaborations, or tech discussions."
        align="left"
      />

      <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/80 p-8 dark:bg-slate-900/70 md:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" suppressHydrationWarning>
          <div>
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input
              {...register("name")}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-800 outline-none ring-brand-primary/40 transition focus:ring-2 dark:border-slate-700 dark:text-white"
              placeholder="Ankit Tiwary"
              suppressHydrationWarning
            />
            {errors.name && (
              <p className="mt-2 text-xs text-rose-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input
              {...register("email")}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-800 outline-none ring-brand-primary/40 transition focus:ring-2 dark:border-slate-700 dark:text-white"
              placeholder="you@example.com"
              suppressHydrationWarning
            />
            {errors.email && (
              <p className="mt-2 text-xs text-rose-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-800 outline-none ring-brand-primary/40 transition focus:ring-2 dark:border-slate-700 dark:text-white"
              placeholder="How can I help you? Feel free to reach out!"
            />
            {errors.message && (
              <p className="mt-2 text-xs text-rose-500">{errors.message.message}</p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-between">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-70 dark:bg-white dark:text-slate-900"
              suppressHydrationWarning
            >
              {status === "loading" ? (
                <>
                  <FiLoader className="h-4 w-4 animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send Message <FiArrowRight />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500 dark:border-slate-700 dark:text-white"
              suppressHydrationWarning
            >
              Clear Inbox
            </button>
          </div>
          {status === "success" && (
            <p className="text-sm text-emerald-500">Message sent! I’ll reply soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-rose-500">
              Something went wrong. Email me at shivankit2145@gmail.com instead.
            </p>
          )}
        </form>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/20 bg-white/60 p-6 text-sm dark:bg-slate-950/40">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Connect</h4>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              I am active on these platforms—feel free to connect!
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:-translate-y-0.5 dark:border-slate-800 dark:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <iframe
            title="Studio location"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14663.93599616016!2d77.5247448!3d23.2512042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244c97d6f29%3A0x72457a4e85fd116c!2sLNCT%20Group%20of%20Colleges!5e0!3m2!1sen!2sin"
            className="h-64 w-full rounded-[28px] border border-white/20"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}


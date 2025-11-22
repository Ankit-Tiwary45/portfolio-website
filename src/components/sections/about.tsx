"use client";

import Image from "next/image";
import { experienceTimeline } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionHeading } from "../section-heading";
import { FiDownloadCloud } from "react-icons/fi";

export function AboutSection() {
  return (
    <section id="about" className="space-y-16">
      <SectionHeading
        eyebrow="About"
        title="Developer blending Web Development with strong problem-solving"
        description={
          <>
            Whether it’s crafting responsive web apps or breaking down complex algorithmic problems, I work at the intersection of structured thinking and creative execution. I aim to build experiences that are fast, intuitive, and reliable.
          </>
        }
        align="left"
      />

      <div className="grid gap-10 rounded-[32px] border border-white/10 bg-white/40 p-8 shadow-2xl backdrop-blur dark:bg-slate-900/40 md:grid-cols-[320px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-[28px] border border-white/30 shadow-2xl">
            <Image
              src="/PortfolioImage.png"
              alt="Profile placeholder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900">
              Ankit Tiwary
              <p className="text-xs font-normal text-slate-500">CSE Undergrad.</p>
            </div>
          </div>
          <button 
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
            suppressHydrationWarning
          >
            <FiDownloadCloud />
            <a href="Spider_CV.pdf">Download Full Resume</a>
          </button>
        </motion.div>

        <div className="space-y-6">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/30 bg-white/70 p-6 dark:bg-slate-900/70"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-sm font-medium text-brand-primary">{item.period}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-secondary" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


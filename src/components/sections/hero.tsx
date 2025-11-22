"use client";

import { stats, heroHighlights } from "@/lib/data";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden rounded-[32px] border border-white/10 bg-hero-gradient px-6 py-20 text-white shadow-glow md:px-12"
    >
      <div className="absolute inset-0 opacity-30 mix-blend-screen">
        <Image src="/media/projects/nebula-poster.svg" alt="Decor" fill className="object-cover" />
      </div>
      <div className="relative z-10 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.6em]"
        >
          Portfolio 2025
        </motion.div>
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Ankit Tiwary
            <br />
            <span className="text-brand-secondary">Full Stack Developer And a DSA Ardent</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-2xl text-lg text-white/80"
          >
            I build clean, responsive, and user-centered web experiences. Passionate about Data Structures and Algorithms, solving problems that demand clarity and precision.
          </motion.p>
          <TypeAnimation
            sequence={heroHighlights.flatMap((line) => [line, 2500])}
            wrapper="span"
            repeat={Infinity}
            className="text-base font-semibold uppercase tracking-[0.4em] text-white/70"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            suppressHydrationWarning
          >
            View Projects <FiArrowUpRight className="transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            suppressHydrationWarning
          >
            Contact Me
          </Link>
          <a
            href="/Spider_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            suppressHydrationWarning
          >
            Download Resume
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
            >
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { blogPosts } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export function BlogSection() {
  return (
    <section id="blog" className="space-y-12">
      <SectionHeading
        eyebrow="Articles"
        title="Stories That Shaped My Journey"
        description="A curated collection of reads, ideas, and stories that shaped my learning journey."
        align="left"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/80 p-6 dark:bg-slate-900/70"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-primary">{post.date}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <span>{post.readingTime}</span>
              <Link
                href={post.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-brand-primary"
              >
                Read <FiArrowUpRight />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


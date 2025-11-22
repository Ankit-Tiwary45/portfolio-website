"use client";

import { testimonials } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { motion } from "framer-motion";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-12">
      <SectionHeading
        eyebrow="Testimonials"
        title="From my Peers & Mentors"
        description="Feedback from mentors, teammates, and collaborators who have worked closely with me."
        align="left"
      />

      <motion.div
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/80 p-8 dark:bg-slate-900/60"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-3xl border border-white/20 bg-white/70 p-6 text-slate-700 shadow-lg dark:bg-slate-950/40 dark:text-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/40">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


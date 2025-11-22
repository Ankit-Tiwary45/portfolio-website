"use client";

import { skillCategories } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-16">
      <SectionHeading
        eyebrow="Skills"
        title="Full-stack fluency with a frontend heartbeat"
        description="I pair design intuition with production-grade engineering. Every skill is continuously sharpened through shipped work."
        align="left"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-[28px] border border-white/10 bg-white/70 p-6 dark:bg-slate-900/70"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {category.label}
            </h3>
            <div className="mt-6 space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


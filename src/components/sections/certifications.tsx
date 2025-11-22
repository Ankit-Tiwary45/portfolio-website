"use client";

import { achievements, certifications } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { motion } from "framer-motion";

export function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-12">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications & Milestones"
        description="Continuous learning keeps my toolkit sharp and my perspective fresh."
        align="left"
      />

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-white/10 bg-white/80 p-6 dark:bg-slate-900/70"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Certifications</h3>
          <div className="mt-6 space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-sm dark:bg-slate-950/40"
              >
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{cert.title}</p>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                </div>
                <span className="text-xs font-semibold text-brand-primary">{cert.year}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-white/10 bg-white/80 p-6 dark:bg-slate-900/70"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Achievements Timeline
          </h3>
          <div className="mt-6 space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="relative pl-6 text-sm">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand-primary" />
                <p className="font-semibold text-slate-900 dark:text-white">{achievement.title}</p>
                <p className="text-xs text-slate-500">{achievement.description}</p>
                <span className="text-xs font-semibold text-brand-secondary">{achievement.year}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


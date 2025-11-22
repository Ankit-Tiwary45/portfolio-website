"use client";

import { projects, type Project } from "@/lib/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FiGithub, FiGlobe, FiX } from "react-icons/fi";
import { SectionHeading } from "../section-heading";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const gridProjects = useMemo(() => projects, []);

  return (
    <section id="projects" className="space-y-16">
      <SectionHeading
        eyebrow="Projects"
        title="Case studies with motion-first storytelling"
        description="Each build is optimized for performance, accessibility, and delight. Click a card to deep dive into the narrative."
        align="left"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {gridProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-white/70 shadow-2xl transition hover:-translate-y-1 hover:shadow-glow dark:bg-slate-900/70"
            onClick={() => setSelected(project)}
          >
            <div className="relative h-64 overflow-hidden">
              {project.media.type === "image" && (
                <Image
                  src={project.media.src}
                  alt={project.media.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              )}
              {project.media.type === "video" && (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.media.poster}
                >
                  <source src={project.media.src} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 space-y-2 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">Featured</p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-white/70">{project.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-white/40 px-6 py-4 text-xs uppercase tracking-[0.3em] text-slate-700 dark:bg-slate-900/50 dark:text-white/70">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-white/70 px-3 py-1 dark:bg-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-white p-8 shadow-2xl dark:bg-slate-950"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="absolute right-6 top-6 rounded-full border border-slate-200 p-2 text-slate-600 transition hover:-translate-y-0.5 dark:border-slate-700 dark:text-white"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                <FiX />
              </button>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-primary">Project</p>
                  <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
                    {selected.title}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{selected.description}</p>
                </div>
                <div className="grid gap-4 text-sm text-slate-700 dark:text-slate-200">
                  {selected.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 dark:border-slate-700 dark:text-white"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
                    suppressHydrationWarning
                  >
                    <FiGlobe />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


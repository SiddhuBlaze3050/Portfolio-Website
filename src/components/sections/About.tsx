"use client";

import { motion } from "framer-motion";
import { siteConfig, skills } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            {/* Bio */}
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m {siteConfig.name}, a software engineer and AI
                researcher passionate about building products that are both
                technically excellent and genuinely useful.
              </p>
              <p>
                My experience spans full-stack web development, machine learning
                systems, and applied research in NLP and LLM safety. I enjoy
                taking complex problems apart and solving them with clean,
                well-tested code.
              </p>
              <p>
                When I&apos;m not coding, you can find me reading papers,
                contributing to open-source, or experimenting with new AI tools.
              </p>
            </div>

            {/* Skills grid */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies &amp; Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

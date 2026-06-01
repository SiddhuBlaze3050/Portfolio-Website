"use client";

import { motion } from "framer-motion";
import { siteConfig, CATEGORIZED_SKILLS } from "@/lib/constants";

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
                I am an AI/ML Engineer focused on designing intelligent systems and production-grade Data/AI/ML infrastructure. My passion lies at the intersection of scalable software engineering and artificial intelligence, where I build tools that turn complex models into reliable, high-throughput applications.
              </p>
              <p>
                Most recently, I architected robust backend pipelines for retail demand forecasting and engineered automated, event-driven LLM orchestration frameworks. My technical foundation is rooted in deploying machine learning models, optimizing hybrid retrieval architectures, and conducting rigorous research in AI safety and inference-time defenses.
              </p>
              <p>
                I am currently completing my degree in Data Science at IIT Madras, with plans to pursue advanced graduate studies next year to further specialize in AI/ML systems. Outside of production code, you can usually find me competing in predictive modeling challenges, reading research papers,
                contributing to open-source, experimenting with new AI tools, and exploring new architectures in generative AI.
              </p>
            </div>

            {/* Skills grid */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies &amp; Skills
              </h3>
              <div className="flex flex-col gap-6">
                {CATEGORIZED_SKILLS.map((categoryGroup) => (
                  <div key={categoryGroup.category}>
                    <h4 className="mb-3 text-sm font-medium text-foreground">
                      {categoryGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {categoryGroup.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

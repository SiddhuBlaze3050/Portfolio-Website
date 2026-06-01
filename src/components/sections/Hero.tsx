"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
            {siteConfig.title}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            I build scalable web applications, design intelligent systems, and
            publish research at the intersection of software engineering and
            artificial intelligence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

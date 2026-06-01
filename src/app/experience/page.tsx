import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { experienceItems } from "@/lib/constants";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "My Professional Journey",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <PageHeader
        title="Experience"
        description="My   Professional Journey"
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-8" />

        <div className="space-y-12">
          {experienceItems.map((item, index) => (
            <div key={index} className="relative pl-12 sm:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card sm:left-4 sm:h-9 sm:w-9">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">
                  {item.company}
                </p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.description.map((desc, i) => {
                    const trimmed = desc.trim();
                    if (!trimmed) {
                      return <div key={i} className="h-2" aria-hidden="true" />;
                    }
                    if (trimmed.startsWith("🔹")) {
                      return (
                        <div key={i} className="mt-3 text-sm font-medium text-foreground">
                          {trimmed}
                        </div>
                      );
                    }
                    
                    const text = trimmed.startsWith("•") ? trimmed.substring(1).trim() : trimmed;
                    
                    return (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground before:mr-2 before:content-['•']"
                      >
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

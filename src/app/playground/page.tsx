import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { playgroundItems } from "@/lib/constants";
import { Maximize2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Playground",
  description: "Interactive AI demos and tools you can try in your browser.",
};

export default function PlaygroundPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <PageHeader
        title="AI Playground"
        description="Interactive demos and tools — try them directly in your browser. These are live deployments of my AI/ML projects."
      />

      {playgroundItems.length === 0 ? (
        <p className="text-muted-foreground">
          Playground items coming soon. Check back later!
        </p>
      ) : (
        <div className="space-y-12">
          {playgroundItems.map((item, index) => (
            <Card key={index} hover={false} className="overflow-hidden p-0">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 p-6 pb-4">
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {item.description}
                  </CardDescription>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <a
                  href={item.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  Open Full Screen
                </a>
              </div>

              {/* Embed */}
              <div className="relative aspect-video w-full border-t border-border">
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; camera; microphone"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

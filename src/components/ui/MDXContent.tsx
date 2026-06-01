import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={source} />
    </div>
  );
}

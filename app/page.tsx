"use client";

import { ThemeToggle } from "@/components/theme-toggle";

function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </blockquote>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 gap-4">
      <ThemeToggle />
      <TypographyBlockquote />
    </main>
  );
}

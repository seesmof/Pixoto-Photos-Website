"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 gap-4">
      <div className="flex justify-end w-full">
        <ThemeToggle />
      </div>

      <Accordion type="single">
        <AccordionItem value="first">
          <AccordionTrigger>Why choose us?</AccordionTrigger>
          <AccordionContent>
            <p>Well, because we're the best.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="second">
          <AccordionTrigger>How much do we charge?</AccordionTrigger>
          <AccordionContent>
            <p>We don't charge anything. Just kidding. We charge a lot.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

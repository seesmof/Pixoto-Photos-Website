"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, FileWarning, AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 gap-4">
      <ThemeToggle />

      <div className="">
        <Alert variant="destructive">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Terminal</AlertTitle>
          <AlertDescription>
            This is a terminal alert. It's a great way to show off your terminal
            skills.
          </AlertDescription>
        </Alert>
      </div>
    </main>
  );
}

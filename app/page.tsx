"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Terminal, FileWarning, AlertCircle } from "lucide-react";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const handleAccountDeletion = () => {
    console.error("Account have been successfully deleted");
    window.location.href = "https://google.com/";
  };
  const [isArtFlipped, setIsArtFlipped] = React.useState(false);
  const [showCoolAlert, setShowCoolAlert] = React.useState(false);
  const [showUncoolAlert, setShowUncoolAlert] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col p-4 gap-4">
      <ThemeToggle />

      <div className="flex flex-row items-center gap-2">
        <Badge variant="outline">Entertainment</Badge>
        <Badge variant="outline">Fun</Badge>
        <Badge variant="outline">Cool</Badge>
      </div>
    </main>
  );
}

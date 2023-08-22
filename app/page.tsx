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

      <div className="">
        <Alert variant="default">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Terminal</AlertTitle>
          <AlertDescription>
            This is a terminal alert. It's a great way to show off your terminal
            skills.
          </AlertDescription>
        </Alert>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl py-4">
          Hello and Welcome
        </h1>
        <p className="pb-6 text-lg">
          Pet apple add replace silly circle sent fighting mental arrive dance
          judge castle entire oxygen easy mysterious practice brought substance
          quarter pure connected ants!
        </p>

        <p className="text-lg">Your questions, our answers</p>
        <Accordion type="single" className="pb-6">
          <AccordionItem value="1">
            <AccordionTrigger>Why us?</AccordionTrigger>
            <AccordionContent>Welp, cause I said so. Hehe</AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>What we do</AccordionTrigger>
            <AccordionContent>
              We do what we do, stop asking so many questions
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>How we do it</AccordionTrigger>
            <AccordionContent>
              We do it the hard way, okay, bud? Now, go have a walk or something
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-lg pb-2">Look at all the buttons!</p>
        <div className="flex flex-row gap-2 pb-6">
          <Button variant="default">Default</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="secondary">Secondary</Button>
        </div>

        <p className="text-lg pb-2">Wanna delete this page perhaps?</p>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="mb-6" variant="destructive">
              Delete page
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Deleting this page will remove all of its content. This action
                cannot be undone. This stuff is real deal, twink twice about it!
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleAccountDeletion}>
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <p className="text-lg pb-2">Check this out</p>
        <AspectRatio
          ratio={1 / 1}
          className={`mb-6 flex items-center justify-center duration-500  ${
            isArtFlipped
              ? "rotate-180 rounded-full scale-50 bg-gradient-to-bl from-stone-900 to-stone-700"
              : "hover:bg-primary/90 active:bg-primary/80 bg-primary rounded-md"
          }`}
          onClick={() => setIsArtFlipped(!isArtFlipped)}
        >
          <div
            className={`inset-0 text-primary-foreground font-extrabold uppercase text-6xl ${
              isArtFlipped && "animate-[spin_2s_linear_infinite]"
            }`}
          >
            {isArtFlipped ? "meow" : "art"}
          </div>
        </AspectRatio>

        <p className="text-lg pb-2">Cool?</p>
        <div className="flex flex-row items-center gap-2 pb-6">
          <Button
            variant="outline"
            onClick={() => {
              setShowCoolAlert(true);
            }}
          >
            Not really
          </Button>
          <Button variant="default" onClick={() => setShowUncoolAlert(true)}>
            Cool
          </Button>
        </div>

        <p className="text-lg pb-2">Alright, here is me</p>
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" />
          <AvatarFallback>SE</AvatarFallback>
        </Avatar>
      </div>
    </main>
  );
}

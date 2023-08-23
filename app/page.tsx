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
import {
  Terminal,
  FileWarning,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  CalendarIcon,
  Twitter,
  Mail,
  Facebook,
} from "lucide-react";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { DataTable } from "./payments/data-table";
import { columns } from "./payments/columns";
import { payments } from "./payments/payment-data";
import { spawn } from "child_process";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [datePickerDate, setDatePickerDate] = React.useState<Date>();

  return (
    <main className="flex min-h-screen flex-col p-4 gap-4 max-w-6xl mx-auto">
      <ThemeToggle />

      <Alert>
        <Mail className="w-4 h-4" />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>
          This is a default alert. It can be dismissed. Please pay attention to
          it. Use it whenever you feel like. Usage is not limited to just places
          where you need it, but also to the places where you don't.
        </AlertDescription>
      </Alert>

      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Do we have a main office?</AccordionTrigger>
          <AccordionContent>
            Yes we do indeed. You can get the address of our headquarters, which
            is located in New York City, on our website, please follow the{" "}
            <a href="#" className="underline">
              link
            </a>
            .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Are we hiring?</AccordionTrigger>
          <AccordionContent>
            We are indeed. You can get additional information on our{" "}
            <a href="#" className="underline">
              website
            </a>
            . Please keep in mind that we need only qualified and well-rounded
            specialists, so please look into the requirements of the job before
            reaching out.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>How old is our company?</AccordionTrigger>
          <AccordionContent>
            Our company is <span className="font-bold">10</span> years old. You
            can get our full history by following the{" "}
            <a href="#" className="underline">
              link
            </a>
            . Our company was founded by Patrick Patterson, a remarkable
            engineer in the field of electrodynamics who decided to contribute
            his knowledge to the world of photography.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default" className="w-max">
            Open Alert Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is an alert dialog. It can be dismissed. It can also be
              closed and confirmed. Please make your choice and click the option
              you feel like clicking.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Avatar>
        <AvatarImage src="https://github.com/seesmof.png" alt="@seesmof" />
        <AvatarFallback>SE</AvatarFallback>
      </Avatar>

      <Card className="w-max">
        <CardHeader>
          <CardTitle>Oleh Onyshchenko</CardTitle>
          <CardDescription>
            A capable frontend web developer with a passion for creating
            responsive, scalable, and accessible web UIs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-medium mb-1">Projects</h3>
          <ul className="flex flex-col list-disc">
            <li className="ml-4">SpaceX Website</li>
            <li className="ml-4">Local Clinic Website</li>
            <li className="ml-4">Social Media App</li>
            <li className="ml-4">Photography Website</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Skills</h3>
          <div className="flex flex-row gap-2 py-2 flex-wrap">
            <Badge variant="default" className="bg-slate-300">
              Next.js
            </Badge>
            <Badge variant="default" className="bg-blue-200">
              React
            </Badge>
            <Badge variant="default" className="bg-teal-200">
              TailwindCSS
            </Badge>
            <Badge variant="default" className="bg-neutral-300">
              ShadCN
            </Badge>
            <Badge variant="default" className="bg-emerald-200">
              TypeScript
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <h2 className="text-xl font-medium">Feel free to get in touch</h2>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-2 pt-2">
              <Button size="icon" variant={"outline"}>
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant={"outline"}>
                <Mail className="w-4 h-4" />
              </Button>
              <Button size="icon" variant={"outline"}>
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
            <Button variant={"default"}>Close</Button>
          </div>
        </CardFooter>
      </Card>

      <div className="flex flex-row items-center gap-2">
        <Badge variant="outline">Entertainment</Badge>
        <Badge variant="outline">Fun</Badge>
        <Badge variant="outline">Cool</Badge>
      </div>

      <div className="flex flex-row items-center gap-2 flex-wrap">
        <Button variant="default">Default</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Calendar mode="default" className="rounded-lg border cursor-pointer" />
      </div>

      <Card className="w-max">
        <CardHeader>
          <CardTitle>Payment information</CardTitle>
          <CardDescription>
            Please enter your payment information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2 list-disc">
            <div className="flex flex-row items-center gap-2">
              <Checkbox id="cardNumber" />
              <label
                htmlFor="cardNumber"
                className="leading-none text-sm font-medium"
              >
                Card number
              </label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox id="expirationDate" />
              <label htmlFor="expirationDate" className="leading-none text-sm">
                Expiration date
              </label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox id="cvc" />
              <label htmlFor="cvc" className="leading-none text-sm">
                CVC
              </label>
            </div>
          </ul>
        </CardContent>
        <CardFooter className="flex flex-row gap-2">
          <Button variant={"outline"}>Cancel</Button>
          <Button variant={"default"}>Confirm</Button>
        </CardFooter>
      </Card>

      <Collapsible>
        <CollapsibleTrigger
          className="font-medium leading-none flex items-center gap-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
          Can I use this in my project?
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 ml-8">
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
      <p>
        Window crew feet port dollar depth principal anything strike wing forgot
        mind orange surprise imagine can accident doctor began coast prepare
        thank fix medicine
      </p>

      <Command className="border rounded-lg">
        <CommandInput placeholder="Type a command to run..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="File">
            <CommandItem className="cursor-pointer">Calendar</CommandItem>
            <CommandItem className="cursor-pointer">Search Emoji</CommandItem>
            <CommandItem className="cursor-pointer">Calculator</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Edit">
            <CommandItem className="cursor-pointer">Profile</CommandItem>
            <CommandItem className="cursor-pointer">Billing</CommandItem>
            <CommandItem className="cursor-pointer">Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>

      <ContextMenu>
        <ContextMenuTrigger className="w-full border rounded-lg text-center p-6 font-medium">
          Right click
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Rewards</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Subscribtion</ContextMenuItem>
          <ContextMenuItem>Files</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Settings</ContextMenuLabel>
        </ContextMenuContent>
      </ContextMenu>

      <DataTable columns={columns} data={payments} />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal",
              !datePickerDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="h-4 w-4 mr-2" />
            {datePickerDate ? (
              format(datePickerDate, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={datePickerDate}
            onSelect={setDatePickerDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="w-max">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely hundred percent?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}

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

export default function Home() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [datePickerDate, setDatePickerDate] = React.useState<Date>();

  return (
    <main className="flex min-h-screen flex-col p-4 gap-4">
      <ThemeToggle />

      <div className="flex flex-row items-center gap-2">
        <Badge variant="outline">Entertainment</Badge>
        <Badge variant="outline">Fun</Badge>
        <Badge variant="outline">Cool</Badge>
      </div>

      <div className="flex flex-row items-center gap-2">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        distinctio inventore hic repellendus eum, vel maiores voluptate
        reiciendis ducimus pariatur qui porro, dolorum ullam earum ipsam fugiat
        similique! Odit, eum.
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
    </main>
  );
}

"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Blockquote, H1, H2, H3, H4, Ol, P, Ul } from "@/components/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <ThemeToggle />
      <H1>NextJS APP</H1>
      <P>
        This is my NextJS app built with TailwindCSS, ShadCN, TypeScript and
        React.
      </P>
      <Blockquote>
        "A good programmer is someone who always looks both ways before crossing
        a one-way street."
      </Blockquote>
      <H2>Our Advantages</H2>
      <Ol>
        <li>We are the best</li>
        <li>We dont have any competition</li>
        <li>Because we eliminate the competition</li>
      </Ol>
      <H3>Our Features</H3>
      <Ul>
        <li>
          Anybody snake spirit these chamber fly bus must main bar band soldier
          lucky introduced ask uncle wish sell easy program pour tail gun summer
        </li>
        <li>
          Log lead flow nodded sugar officer hole basis stay sale wheat spend
          above stick very examine lungs iron definition sum boat gather stiff
          doctor
        </li>
        <li>
          Face definition bee greatly total rabbit write gather correctly would
          studied those anybody sitting mixture twice writing fun breeze improve
          since rhythm careful fence
        </li>
      </Ul>
      <P>
        Also, please know that bound brother attempt rhythm coast bell flight
        pay sheep for goose brain got enter success ring could interior fifth
        wing word unusual floor hand
      </P>
      <H4>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          Google
        </a>
      </H4>
    </main>
  );
}

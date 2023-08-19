import "./local.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col p-4 gap-4 min-h-screen">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "MoodFlow - Energy-Based Task Manager",
  description: "Align your tasks with your energy, powered by Farcaster and Base.",
  openGraph: {
    title: "MoodFlow",
    description: "Align your tasks with your energy",
    images: ["/images/moodflow-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

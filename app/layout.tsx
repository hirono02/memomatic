import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/css/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Context Providers
import { MessageProvider } from "@/contexts/messageContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MessageProvider>{children}</MessageProvider>
      </body>
    </html>
  );
}

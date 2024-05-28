import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import SiteHeader from "@/components/layouts/site-header";
import SiteFooter from "@/components/layouts/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowFlow Magazine",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            inter.className,
            "antialiased min-h-screen flex flex-col dark"
          )}
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}

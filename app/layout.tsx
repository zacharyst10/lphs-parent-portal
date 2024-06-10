import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedOut,
  SignedIn,
  SignIn,
  SignInButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Dashboard } from "@/components/dashboard";
import { SignInCard } from "@/components/sign-in-card";
import { dark } from "@clerk/themes";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LPHS Chevalier Parent Portal",
  description: "A parent portal for the LPHS Chevalier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>
              <div className="flex h-screen flex-col items-center justify-center">
                <SignInCard />
              </div>
            </SignedOut>
            <SignedIn>
              <main>
                <Dashboard children={children} />
              </main>
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

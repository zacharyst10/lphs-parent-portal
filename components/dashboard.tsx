import Link from "next/link";
import { Bell, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./toggle-mode";
import NavLinks from "./nav-links";
import MobileNav from "./mobile-nav";

export async function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="https://www.lonepeakdrillteam.com"
              className="flex items-center gap-2 font-semibold"
            >
              <Home className="h-6 w-6" />
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLinks />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileNav />
          <div className="w-full flex-1">
            <span className="text-xl">Chevaliers Parent Portal</span>
          </div>

          <UserButton />

          <ModeToggle />
        </header>
        {children}
      </div>
    </div>
  );
}

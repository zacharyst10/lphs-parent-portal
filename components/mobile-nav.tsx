"use client";
import { Menu, Link, Package2 } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavLinks from "./nav-links";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((open) => !open);

  const NavigationWithClose = () => {
    return (
      <div onClick={() => setOpen(false)}>
        <NavLinks />
      </div>
    );
  };
  return (
    <Sheet open={open} onOpenChange={handleToggle}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="https://www.lonepeakdrillteam.com"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <NavigationWithClose />
        </nav>
      </SheetContent>
    </Sheet>
  );
}

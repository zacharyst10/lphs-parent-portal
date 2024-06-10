"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  LineChart,
  Users,
  CalendarDays,
  HandCoins,
  PlaneTakeoff,
  ClipboardPenLine,
  Trophy,
  Sun,
} from "lucide-react";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      title: "Calendars",
      href: "/",
      icon: <CalendarDays className="h-4 w-4" />,
    },
    {
      title: "Fee Schedule",
      href: "/fee-schedule",
      icon: <HandCoins className="h-4 w-4" />,
    },
    {
      title: "Nationals",
      href: "/nationals",
      icon: <PlaneTakeoff className="h-4 w-4" />,
    },
    {
      title: "Family Directory",
      href: "/family-directory",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Summer Schedule",
      href: "/summer-schedule",
      icon: <Sun className="h-4 w-4" />,
    },
    {
      title: "Register My Athlete",
      href: "/register",
      icon: <ClipboardPenLine className="h-4 w-4" />,
    },
    {
      title: "Competition Info",
      href: "/competition-info",
      icon: <Trophy className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            { "bg-muted": pathname === link.href },
          )}
        >
          {link.icon}
          {link.title}
        </Link>
      ))}
    </>
  );
}

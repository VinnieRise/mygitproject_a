"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo />
      </Link>
      <nav className="flex items-center space-x-6 text-base font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-sky-500",
            pathname === "/" ? "text-sky-500" : "text-foreground/60"
          )}
        >
          Главная
        </Link>
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-sky-500",
            pathname === "/docs" ? "text-sky-500" : "text-foreground/60"
          )}
        >
          Документация
        </Link>
      </nav>
    </div>
  );
}

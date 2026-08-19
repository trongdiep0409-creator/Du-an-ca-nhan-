"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mainNav } from "@/lib/constants/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="grid h-16 items-center justify-center gap-2 px-2 py-2 md:grid-cols-5">
        {mainNav
          .flatMap((g) => g.items.slice(0, 3))
          .slice(0, 4)
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 rounded-md px-3 py-2 text-xs transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        {/* More menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex h-auto flex-col gap-1 px-3 py-2 text-xs"
              aria-label="Thêm tùy chọn"
            >
              <Menu className="h-5 w-5" />
              <span>Thêm</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[calc(100vh-4rem)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Điều hướng</h2>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {mainNav.map((group) => (
              <div key={group.label} className="mb-4">
                <p className="mb-2 px-2 text-xs font-semibold uppercase text-sidebar-muted-foreground">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                          pathname === item.href
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

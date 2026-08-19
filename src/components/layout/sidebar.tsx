"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/constants/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      {/* Logo / Brand */}
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sidebar-primary">◆</span>
          <span className="font-bold text-sidebar-foreground">Titan OS</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4">
        {mainNav.map((group) => (
          <div key={group.label} className="mb-4">
            <p className="px-4 text-xs font-semibold uppercase text-sidebar-muted-foreground">
              {group.label}
            </p>
            <ul className="mt-2 space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-4 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t p-4 text-xs text-sidebar-muted-foreground">
        Titan OS Web v1 — Phát triển bản thân
      </div>
    </div>
  );
}

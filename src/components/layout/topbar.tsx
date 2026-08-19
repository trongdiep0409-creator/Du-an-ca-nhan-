"use client";

import { Menu, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/layout/mode-toggle";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-topbar-background px-4 md:px-6">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 md:hidden"
        aria-label="Mở menu"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm..."
                className="pl-10 md:w-80"
                aria-label="Tìm kiếm"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="h-8 w-8" aria-label="Thông báo">
          <Bell className="h-5 w-5" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}

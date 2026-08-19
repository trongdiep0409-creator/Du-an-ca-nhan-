"use client";

import { Moon, Sun } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { darkMode, setDarkMode } = useUIStore();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8"
      aria-label={darkMode ? "Chế độ sáng" : "Chế độ tối"}
      onClick={() => setDarkMode(!darkMode)}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all",
          !darkMode ? "scale-100 rotate-0" : "scale-0 rotate-90"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all",
          darkMode ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        )}
      />
    </Button>
  );
}

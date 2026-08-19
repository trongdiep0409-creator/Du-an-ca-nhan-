"use client";

import * as React from "react";
import { useUIStore } from "@/store/ui-store";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { MobileNav } from "@/components/layout/mobile-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, setSidebarOpen, darkMode } = useUIStore();

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Desktop sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 hidden w-64 border-r bg-sidebar-background lg:block ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-200 ease-in-out`}
      >
        <Sidebar />
      </aside>

      {/* Mobile sidebar overlay */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r bg-sidebar-background lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out`}
      >
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-6 pb-20 lg:pb-6">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}

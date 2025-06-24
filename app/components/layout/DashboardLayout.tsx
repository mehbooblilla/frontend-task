"use client";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-8">
      <div className="2xl:max-w-6xl mx-auto">{children}</div>
    </main>
  );
}
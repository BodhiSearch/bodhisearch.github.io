"use client";

import { Button } from "@/components/ui/button";
import { Github, Disc as Discord, Download } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 border-b">
      <nav className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="url(#paint0_linear)" />
            <path d="M16 6c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6z" fill="url(#paint1_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF66B3" />
                <stop offset="1" stopColor="#4ADE80" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold text-gray-900">Bodhi</span>
        </div>

        {/* Navigation - Mobile friendly */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-violet-600 text-sm font-medium">Features</a>
          <a href="#docs" className="text-gray-700 hover:text-violet-600 text-sm font-medium">Docs</a>
          <a href="#blog" className="text-gray-700 hover:text-violet-600 text-sm font-medium">Blog</a>
        </div>

        {/* Action Buttons - Mobile friendly */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-2">
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Button>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-2">
            <Discord className="w-4 h-4" />
            <span className="hidden sm:inline">Discord</span>
          </Button>
          <Button variant="default" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </Button>
        </div>
      </nav>
    </header>
  );
} 
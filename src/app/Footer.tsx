"use client";

import { Github, Disc as Discord, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/bodhi-logo/bodhi-logo-60.svg"
                alt="Bodhi Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-semibold text-gray-900">Bodhi</span>
            </div>
            <p className="text-sm text-gray-600">
              Run LLMs locally with complete privacy and control.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/docs/install" className="text-sm text-gray-600 hover:text-violet-600">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="/docs/features/chat-ui" className="text-sm text-gray-600 hover:text-violet-600">
                  Chat Interface
                </a>
              </li>
              <li>
                <a href="/docs/features/model-alias" className="text-sm text-gray-600 hover:text-violet-600">
                  Model Management
                </a>
              </li>
              <li>
                <a href="/docs/troubleshooting" className="text-sm text-gray-600 hover:text-violet-600">
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/bodhi-project/bodhi-app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-violet-600 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/bodhi-app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-violet-600 flex items-center gap-2"
                >
                  <Discord className="w-4 h-4" />
                  Discord Community
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Bodhi App. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/bodhi-project/bodhi-app" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-600"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://discord.gg/bodhi-app" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-600"
              >
                <Discord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
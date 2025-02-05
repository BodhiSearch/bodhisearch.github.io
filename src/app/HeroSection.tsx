"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn } from "./animations";

export function HeroSection() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          {...fadeIn}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Run LLMs locally, powered by
            <span className="text-violet-600"> Open Source</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of local AI with seamless integration, enhanced privacy, and enterprise-grade features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Download className="w-5 h-5" />
              Download for macOS
            </Button>
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              View on GitHub
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <CodeExample />
        </motion.div>
      </div>
    </section>
  );
}

function CodeExample() {
  return (
    <div className="mt-8 sm:mt-16">
      <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
        <pre className="text-sm text-violet-300">
          <code>
            <span className="text-pink-400">import</span> bodhi
            {"\n\n"}
            <span className="text-green-400"># Initialize the client</span>
            {"\n"}
            client = bodhi.Client(model=<span className="text-yellow-300">"mistral-7b"</span>)
            {"\n\n"}
            <span className="text-green-400"># Generate text</span>
            {"\n"}
            response = client.generate(
            {"\n"}
            {"  "}<span className="text-yellow-300">"Explain quantum computing in simple terms"</span>
            {"\n"}
            )
          </code>
        </pre>
      </div>
    </div>
  );
} 
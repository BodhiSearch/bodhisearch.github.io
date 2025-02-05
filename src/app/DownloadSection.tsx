"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-gray-600 mb-8">
            Download Bodhi App for macOS and start running LLMs locally today.
          </p>
          <Button size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download for macOS
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 
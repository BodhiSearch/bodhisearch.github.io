"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { fadeIn } from "./animations";

export function HeroSection() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <motion.div {...fadeIn} className="text-center space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Run LLMs locally, powered by{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Open Source
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
            Run LLMs locally, completely free, private and without technical hassle or setup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download for macOS
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              View on GitHub
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src="/chat-ui.jpeg"
              alt="Bodhi Chat Interface"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </Container>
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
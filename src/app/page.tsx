"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight, Cpu, Database, Disc as Discord, Download, Github, Lock, MessageSquare, Terminal, Zap } from "lucide-react";

// Simplified animations
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50">
      {/* Simplified Header */}
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

      {/* Simplified Hero Section */}
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

            {/* Code Example - Mobile friendly */}
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
          </motion.div>
        </div>
      </section>

      {/* Simplified Features Section */}
      <section className="px-4 py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeIn}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
            <p className="text-lg sm:text-xl text-gray-600">Everything you need to build AI-powered applications</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="rounded-full bg-violet-100 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="link" className="p-0 gap-1 hover:text-violet-600">
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-violet-600" />,
    title: "Built-in Chat UI",
    description: "Intuitive chat interface with full markdown support and code highlighting."
  },
  {
    icon: <Database className="w-6 h-6 text-violet-600" />,
    title: "Model Management",
    description: "One-click downloads from HuggingFace and seamless model switching."
  },
  {
    icon: <Terminal className="w-6 h-6 text-violet-600" />,
    title: "API Compatibility",
    description: "Drop-in replacement for OpenAI and Ollama APIs."
  },
  {
    icon: <Lock className="w-6 h-6 text-violet-600" />,
    title: "Security First",
    description: "Flexible authentication and encryption for enterprise needs."
  },
  {
    icon: <Cpu className="w-6 h-6 text-violet-600" />,
    title: "Local Processing",
    description: "Run models on your hardware for enhanced privacy and control."
  },
  {
    icon: <Zap className="w-6 h-6 text-violet-600" />,
    title: "High Performance",
    description: "Optimized inference with llama.cpp and GPU acceleration."
  }
];
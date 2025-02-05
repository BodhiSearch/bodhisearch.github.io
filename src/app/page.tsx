"use client";

import { motion } from "framer-motion";
import { Github, Disc as Discord, Download, ExternalLink, Cpu, Lock, Terminal, MessageSquare, Database, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center"
              >
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="url(#paint0_linear)"/>
                  <path d="M16 6c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6z" fill="url(#paint1_linear)"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF66B3"/>
                      <stop offset="1" stopColor="#4ADE80"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">Bodhi</span>
              </motion.div>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#features" className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium">Features</a>
                <a href="#docs" className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium">Docs</a>
                <a href="#blog" className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium">Blog</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Discord className="w-4 h-4 mr-2" />
                Discord
              </Button>
              <Button variant="default" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Run LLMs locally, powered by
              <span className="text-violet-600"> Open Source</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the power of local AI with seamless integration, enhanced privacy, and enterprise-grade features.
            </p>
            <div className="flex justify-center space-x-4 mb-16">
              <Button size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download for macOS
              </Button>
              <Button variant="outline" size="lg">
                View on GitHub
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="relative mx-auto max-w-4xl"
            >
              <div className="rounded-xl bg-gray-900 p-4 shadow-2xl">
                <pre className="text-left overflow-x-auto">
                  <code className="text-sm text-violet-300">
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">Everything you need to build AI-powered applications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="rounded-full bg-violet-100 w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Button variant="link" className="p-0">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Card>
              </motion.div>
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
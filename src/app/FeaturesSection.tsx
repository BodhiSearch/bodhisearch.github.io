"use client";

import { motion } from "framer-motion";
import { ChevronRight, Cpu, Database, Lock, MessageSquare, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeIn } from "./animations";

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

export function FeaturesSection() {
  return (
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
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6">
      <div className="rounded-full bg-violet-100 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="link" className="p-0 gap-1 hover:text-violet-600">
        Learn more
        <ChevronRight className="w-4 h-4" />
      </Button>
    </Card>
  );
} 
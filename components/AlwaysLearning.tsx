"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function AlwaysLearning() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 px-6 sm:px-8 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-bg-secondary border border-border rounded-3xl p-12 sm:p-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            Always Learning
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
            Technology evolves rapidly, and I'm committed to continuous learning. I regularly
            explore new frameworks, tools, and best practices to stay current with industry
            trends and deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

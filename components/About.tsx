"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

export function About() {
  const { about } = content;
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-28 py-24 px-6 sm:px-8 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {about.headline}
            </h2>
            <div className="w-24 h-1 bg-accent-primary mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Paragraphs - 2 columns */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-7"
            >
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Profile Image - 1 column */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 rounded-[50%] border-4 border-accent-primary/30 p-2 shadow-[0_0_30px_rgba(0,217,255,0.3)]">
                  <div className="w-full h-full rounded-[50%] bg-bg-tertiary flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={about.profileImage}
                      alt="Azad Patel"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Vignette Effect */}
                    <div className="absolute inset-0 rounded-[50%]" style={{
                      background: 'radial-gradient(circle, transparent 30%, rgba(10, 14, 23, 0.6) 60%, rgba(10, 14, 23, 0.95) 100%)'
                    }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-10"
          >
            {about.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-bg-tertiary border border-border hover:border-accent-primary transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-accent-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

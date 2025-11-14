"use client";

import { content } from "@/lib/content";
import { Button } from "./ui/Button";
import { SVGRobot } from "./SVGRobot";
import { TypingEffect } from "./TypingEffect";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export function Hero() {
  const { hero } = content;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="hero"
      className="scroll-mt-28 min-h-screen flex items-center pt-28 pb-24 px-6 sm:px-8"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-sm font-mono font-medium">
                <TypingEffect text={hero.label} speed={80} />
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
            >
              {hero.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl text-accent-primary font-medium"
            >
              I build clean, scalable systems - and ship fast.
            </motion.p>

            {/* Intro */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              {hero.intro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <a
                href={hero.resume}
                download="Azad_Patel_resume.pdf"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 bg-accent-primary text-bg-primary hover:bg-accent-hover shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] h-14 px-8 text-lg"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = `mailto:${hero.email}`)}
              >
                <FaEnvelope className="mr-2" />
                Email Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 pt-4"
            >
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-bg-tertiary border border-border hover:border-accent-primary hover:text-accent-primary transition-all duration-200 group"
                aria-label="GitHub profile"
              >
                <FaGithub
                  size={24}
                  className="text-text-secondary group-hover:text-accent-primary transition-colors"
                />
              </a>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-bg-tertiary border border-border hover:border-accent-primary hover:text-accent-primary transition-all duration-200 group"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin
                  size={24}
                  className="text-text-secondary group-hover:text-accent-primary transition-colors"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[400px] lg:h-[520px] flex items-center justify-center"
          >
            <SVGRobot />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

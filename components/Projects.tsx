"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Badge } from "./ui/Badge";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

interface ProjectItemProps {
  project: {
    id: number;
    name: string;
    tagline: string;
    description: string;
    problem: string;
    approach: string;
    result: string;
    techStack: string[];
    image: string;
    demoLink: string | null;
    githubLink: string | null;
    isPrivate: boolean;
  };
  delay: number;
}

function ProjectItem({ project, delay }: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-b border-border py-8 group cursor-pointer"
    >
      <div className="flex items-center justify-between gap-8">
        {/* Left side - Project info */}
        <div className="flex-1 space-y-3">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300"
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.name}
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg text-text-secondary max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.tagline}
          </motion.p>

          {/* Tech Stack - visible on hover */}
          <motion.div
            className="flex flex-wrap gap-2 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.techStack.slice(0, 5).map((tech, idx) => (
              <Badge key={idx} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 5 && (
              <Badge variant="outline" size="sm">
                +{project.techStack.length - 5}
              </Badge>
            )}
          </motion.div>
        </div>

        {/* Right side - Services/Links */}
        <div className="hidden md:flex flex-col items-end gap-2 text-sm text-text-tertiary min-w-[200px]">
          {project.githubLink && !project.isPrivate && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-primary transition-colors flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={16} />
              <span>View Code</span>
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-primary transition-colors flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={14} />
              <span>Live Demo</span>
            </a>
          )}
          {project.isPrivate && (
            <span className="flex items-center gap-2 text-text-tertiary">
              <FaLock size={12} />
              <span>Private</span>
            </span>
          )}
        </div>
      </div>

      {/* Project Image - Shows on hover (Desktop) */}
      <motion.div
        className="fixed top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[350px] pointer-events-none z-50 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          x: isHovered ? 0 : 50,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-accent-primary/30 shadow-[0_0_50px_rgba(0,217,255,0.4)]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-hover/10" />

          {/* Project Image */}
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain"
            sizes="500px"
          />
        </div>
      </motion.div>

      {/* Project Image - Mobile (always visible) */}
      <motion.div
        className="lg:hidden mt-6 w-full h-[250px] sm:h-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-accent-primary/20 shadow-[0_0_30px_rgba(0,217,255,0.2)]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-hover/10" />

          {/* Project Image */}
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const { projects } = content;
  const { ref, isInView } = useInView({ threshold: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 py-24 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm text-text-tertiary uppercase tracking-wider mb-4">
              Latest work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent-primary rounded-full" />
          </div>

          {/* Projects List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

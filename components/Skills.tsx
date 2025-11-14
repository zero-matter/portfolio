"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FaReact, FaDatabase, FaMobileAlt, FaCloud, FaCode, FaTools } from "react-icons/fa";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number;
    years: number;
    description: string;
  }>;
  delay: number;
}

function SkillCard({ title, icon, skills, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-bg-primary border border-border rounded-2xl p-8 hover:border-accent-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
            className="px-4 py-2 bg-bg-secondary rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-tertiary hover:text-accent-primary transition-all cursor-default"
            title={`${skill.years} years - ${skill.description}`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { skills } = content;
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode size={24} />,
      skills: skills.languages,
    },
    {
      title: "Frontend Frameworks & Libraries",
      icon: <FaReact size={24} />,
      skills: skills.frontend,
    },
    {
      title: "Backend & Cloud",
      icon: <FaDatabase size={24} />,
      skills: skills.backend,
    },
    {
      title: "DevOps & Tools",
      icon: <FaCloud size={24} />,
      skills: skills.devops,
    },
    {
      title: "Specialized Skills",
      icon: <FaTools size={24} />,
      skills: skills.specialized,
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 py-24 px-6 sm:px-8 bg-bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Proficiency across the full stack with years of production
              experience
            </p>
            <div className="w-24 h-1 bg-accent-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export function Education() {
  const { education } = content;
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="education"
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
              Education
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Academic foundation in computer science and software engineering
            </p>
            <div className="w-24 h-1 bg-accent-primary mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants}>
                <Card variant="hover">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Icon/Logo Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-lg bg-accent-primary/10 border-2 border-accent-primary/30 flex items-center justify-center">
                        <FaGraduationCap
                          size={36}
                          className="text-accent-primary"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <CardHeader className="mb-0 p-0">
                        <CardTitle className="text-2xl">
                          {edu.degree}
                        </CardTitle>
                        {edu.field && (
                          <p className="text-lg text-text-secondary mt-1">
                            {edu.field}
                          </p>
                        )}
                        <p className="text-lg text-accent-primary font-semibold mt-2">
                          {edu.institution}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Location and Dates */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-tertiary">
                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt size={12} />
                            {edu.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-2">
                            <FaCalendarAlt size={12} />
                            {edu.dates}
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

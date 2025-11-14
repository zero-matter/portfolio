"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";

export function Experience() {
  const { experience } = content;
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
    <section id="experience" ref={ref} className="scroll-mt-28 py-24 px-6 sm:px-8">
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
              Experience
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Building production systems and delivering value across full-stack
              development
            </p>
            <div className="w-24 h-1 bg-accent-primary mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div key={job.id} variants={itemVariants}>
                <Card variant="hover" className="overflow-hidden">
                  <CardHeader className="mb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle>{job.title}</CardTitle>
                        <p className="text-lg text-accent-primary font-semibold mt-1">
                          {job.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-text-tertiary">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt size={12} />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span>{job.dates}</span>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded bg-bg-secondary text-text-secondary font-mono text-xs">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Bullets */}
                    <ul className="space-y-3 mb-6">
                      {job.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-text-secondary leading-relaxed"
                        >
                          <span className="text-accent-primary mt-1.5 flex-shrink-0">
                            ▹
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="accent" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Show More/Less Button */}
                    {job.details && (
                      <>
                        <button
                          onClick={() => toggleExpanded(job.id)}
                          className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-hover transition-colors font-medium"
                          aria-expanded={expandedId === job.id}
                          aria-controls={`details-${job.id}`}
                        >
                          {expandedId === job.id ? (
                            <>
                              <FaChevronUp size={12} />
                              Show Less
                            </>
                          ) : (
                            <>
                              <FaChevronDown size={12} />
                              Show More
                            </>
                          )}
                        </button>

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {expandedId === job.id && (
                            <motion.div
                              id={`details-${job.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 mt-4 border-t border-border">
                                <p className="text-text-secondary leading-relaxed">
                                  {job.details}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

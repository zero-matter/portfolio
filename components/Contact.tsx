"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input, Textarea } from "./ui/Input";
import { Button } from "./ui/Button";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  honeypot: z.string().max(0), // Anti-spam field
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { contact } = content;
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or email me directly."
      );
    }
  };

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" ref={ref} className="scroll-mt-28 py-24 px-6 sm:px-8">
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
              {contact.headline}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {contact.description}
            </p>
            <div className="w-24 h-1 bg-accent-primary mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="sr-only"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Input
                  label="Name"
                  placeholder="John Doe"
                  error={errors.name?.message}
                  required
                  {...register("name")}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                  required
                  {...register("email")}
                />

                <Input
                  label="Subject"
                  placeholder="Project Inquiry"
                  error={errors.subject?.message}
                  {...register("subject")}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  error={errors.message?.message}
                  required
                  {...register("message")}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-md bg-success/10 border border-success/30 flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-success font-medium">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        I'll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-md bg-error/10 border border-error/30 flex items-start gap-3"
                  >
                    <FaExclamationCircle className="text-error mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-error font-medium">
                        Failed to send message
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        {errorMessage}
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-primary/10 border border-accent-primary/30">
                    <FaEnvelope className="text-accent-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-tertiary uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-text-primary hover:text-accent-primary transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-primary/10 border border-accent-primary/30">
                    <FaMapMarkerAlt className="text-accent-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-tertiary uppercase">
                      Location
                    </p>
                    <p className="text-text-primary">{contact.location}</p>
                    <p className="text-sm text-text-tertiary">
                      {contact.locationNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-primary/10 border border-accent-primary/30">
                    <FaClock className="text-accent-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-tertiary uppercase">
                      Timezone & Response
                    </p>
                    <p className="text-text-primary">{contact.timezone}</p>
                    <p className="text-sm text-text-tertiary">
                      {contact.responseTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="pt-6 border-t border-border">
                <p className="text-lg font-semibold text-text-primary mb-4">
                  Connect With Me
                </p>
                <div className="flex gap-4">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg bg-bg-tertiary border border-border hover:border-accent-primary hover:bg-bg-secondary transition-all duration-200 group flex-1 flex items-center justify-center"
                    aria-label="GitHub profile"
                  >
                    <FaGithub
                      size={28}
                      className="text-text-secondary group-hover:text-accent-primary transition-colors"
                    />
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg bg-bg-tertiary border border-border hover:border-accent-primary hover:bg-bg-secondary transition-all duration-200 group flex-1 flex items-center justify-center"
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin
                      size={28}
                      className="text-text-secondary group-hover:text-accent-primary transition-colors"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

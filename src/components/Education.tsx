"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  scoreLabel: string;
  score: string;
  focus?: string[];
}

const educationData: EducationItem[] = [
  {
    year: "2023 - 2027",
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "KL University",
    scoreLabel: "CGPA",
    score: "9.12 / 10",
    focus: ["Embedded Systems", "Internet of Things (IoT)", "Automotive Electronics"],
  },
  {
    year: "2021 - 2023",
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Junior College",
    scoreLabel: "Score",
    score: "818 / 1000",
  },
  {
    year: "Secondary Education",
    degree: "Secondary School Certificate",
    institution: "Atkinson High School (CBSE)",
    scoreLabel: "Score",
    score: "68%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-card-bg/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-card-border transform -translate-x-1/2" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-8 w-6 h-6 rounded-full bg-card-bg border-4 border-primary transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>

                  {/* Card wrapper */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8 shadow-xl shadow-foreground/5 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4">
                        <Calendar size={14} />
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground leading-snug">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-muted font-medium text-base sm:text-lg mt-1 flex items-center gap-1.5">
                        <GraduationCap size={18} className="text-accent" />
                        {item.institution}
                      </p>

                      {/* Score Indicator */}
                      <div className="mt-4 flex items-center gap-2 py-2 px-3 rounded-lg bg-foreground/5 w-fit border border-card-border/50">
                        <Award size={16} className="text-primary" />
                        <span className="text-xs font-semibold text-muted uppercase tracking-wider">{item.scoreLabel}:</span>
                        <span className="text-sm font-bold text-foreground">{item.score}</span>
                      </div>

                      {/* Focus Areas (if any) */}
                      {item.focus && (
                        <div className="mt-6 pt-4 border-t border-card-border/50">
                          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <BookOpen size={14} />
                            Key Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.focus.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="px-2.5 py-1 rounded-md text-xs font-medium bg-foreground/5 text-muted border border-card-border/30 hover:border-primary/20 transition-colors duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for MD screens to align timeline */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

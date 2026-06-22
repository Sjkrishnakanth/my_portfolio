"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Cpu, PlusCircle } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Code2 size={22} />,
      color: "from-blue-500 to-indigo-500",
      skills: ["C", "Embedded C", "Python", "Java", "Data Structures"],
    },
    {
      title: "Tools & IDEs",
      icon: <Wrench size={22} />,
      color: "from-cyan-500 to-teal-500",
      skills: ["Arduino IDE", "MATLAB", "Keil", "STM32 IDE", "Cadence Spectre"],
    },
    {
      title: "Hardware Platforms",
      icon: <Cpu size={22} />,
      color: "from-amber-500 to-orange-500",
      skills: [
        "ESP8266",
        "ESP32",
        "STM32",
        "Arduino",
        "RFID",
        "Zigbee",
        "NXP",
        "LPC Development Boards",
      ],
    },
    {
      title: "Additional Domains",
      icon: <PlusCircle size={22} />,
      color: "from-purple-500 to-pink-500",
      skills: ["IoT", "AI Applications", "Industrial Automation"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-24 bg-[#F8FAFC] border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            A comprehensive overview of my technical capabilities, ranging from low-level programming to cloud-connected IoT architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-card-border rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
              variants={cardVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 border-b border-card-border/50 pb-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-foreground/5 text-muted hover:bg-primary hover:text-white border border-card-border/60 hover:border-primary transition-all duration-200 cursor-default shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

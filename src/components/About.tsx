"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Award, Cpu } from "lucide-react";

export default function About() {
  const cardData = [
    { label: "Degree", value: "B.Tech ECE" },
    { label: "University", value: "KL University" },
    { label: "CGPA", value: "9.12 / 10" },
  ];

  const interests = [
    "Embedded Systems",
    "Internet of Things (IoT)",
    "Automotive Electronics",
    "Research & Development",
    "Product Development",
    "Artificial Intelligence Applications",
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-card-border">
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
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Professional Profile Description */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <User size={22} />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground">
                My Professional Profile
              </h3>
            </div>

            <p className="text-muted leading-relaxed text-base sm:text-lg font-medium">
              I am an ambitious Electronics and Communication Engineering undergraduate student with a specialized passion for **Embedded Systems**, **IoT**, and **Automotive Technology**. My technical journey is driven by the desire to merge hardware intelligence with software agility to solve complex, real-world problems.
            </p>

            <p className="text-muted leading-relaxed text-base sm:text-lg font-medium">
              Throughout my academic career at **KL University**, I have maintained an outstanding CGPA of **9.12** while actively participating in hands-on projects, industry internships (testing RFID and Zigbee protocols), and designing AI-powered healthcare and agricultural tools.
            </p>

            <p className="text-muted leading-relaxed text-base sm:text-lg font-medium">
              I thrive in environments where I can apply my skills in microcontroller architectures (STM32, ESP32, ESP8266, Arduino), sensor calibrations, hardware debugging, and C/Embedded C/Python programming. My ultimate objective is to contribute to smart automotive designs, industrial automations, and intelligent systems that make a tangible difference in daily life.
            </p>
          </motion.div>

          {/* Right Side: Quick Info Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full bg-white border border-card-border rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              {/* Profile Photo & Name header in Card */}
              <div className="flex flex-col items-center mb-6 pb-6 border-b border-card-border">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm mb-3">
                  <Image
                    src="/images/profile.jpg"
                    alt="SUROJU JYOTHI KRISHNA KANTH"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold font-display text-foreground text-center">
                  SUROJU JYOTHI KRISHNA KANTH
                </h4>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">
                  B.Tech ECE Student
                </p>
              </div>

              {/* Snapshot Info */}
              <div className="space-y-4 mb-6">
                {cardData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-card-border/50 last:border-0">
                    <span className="text-muted font-bold text-sm">{item.label}</span>
                    <span className="text-foreground font-semibold text-sm text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interests Card Sub-section */}
              <div>
                <h5 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Cpu size={14} />
                  Core Focus Areas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-foreground/5 text-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

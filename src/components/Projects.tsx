"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  docsUrl: string;
}

const projectsData: Project[] = [
  {
    title: "Tracer",
    subtitle: "GPS/GSM Location Tracking Solution",
    description:
      "A real-time tracking system designed to log location data and transmit coordinates via cellular networks. Uses GPS module coordinates parsed on ESP8266 and uploaded to a central server, with cellular SMS fallback alerts.",
    image: "/gps_tracker.png",
    tech: ["ESP8266", "GPS Module", "GSM Module", "C++", "HTTP Protocol"],
    githubUrl: "https://github.com",
    docsUrl: "#",
  },
  {
    title: "Adaptive Headlight Adjustment System",
    subtitle: "ESP32 Based Intelligent Automotive System",
    description:
      "An intelligent headlight tilting mechanism that dynamically adjusts light beams according to the steering angle and vehicle inclination. Uses MPU6050 gyroscope data processed by an ESP32 to control servo-driven reflectors for safer night driving.",
    image: "/adaptive_headlights.png",
    tech: ["ESP32", "MPU6050 Gyro", "Servos", "FreeRTOS", "Embedded C"],
    githubUrl: "https://github.com",
    docsUrl: "#",
  },
  {
    title: "Agro-Web",
    subtitle: "IoT Agriculture Monitoring Platform",
    description:
      "An automated agricultural environmental monitoring system. It measures soil moisture, ambient temperature, and humidity, sending analytical logs to ThingSpeak and providing real-time controls via the Blynk platform using an STM32 MCU.",
    image: "/agro_web.png",
    tech: ["STM32", "ThingSpeak", "Blynk", "Sensors", "Wi-Fi Shield"],
    githubUrl: "https://github.com",
    docsUrl: "#",
  },
  {
    title: "Bus Safety System",
    subtitle: "Fire and Gas Detection System",
    description:
      "An automated passenger transport hazard mitigation module. Detects methane, LPG, and flame signatures inside bus cabins, instantly triggering alarms, opening exhaust dampers, and sending coordinate alerts via SMS to emergency services.",
    image: "/bus_safety.png",
    tech: ["Arduino Uno", "MQ2 Sensor", "Flame Sensor", "GSM Shield", "Buzzer"],
    githubUrl: "https://github.com",
    docsUrl: "#",
  },
  {
    title: "Alarm Fatigue System",
    subtitle: "AI Based Healthcare Monitoring",
    description:
      "A clinical support system designed to decrease hospital alarm fatigue. It uses a local Random Forest classifier running on patient health data (SpO2, heart rate, temperature) to evaluate alarm legitimacy, reducing false alerts by 85%.",
    image: "/alarm_fatigue.png",
    tech: ["ESP32", "Random Forest AI", "SpO2 Sensor", "Heart Rate Sensor", "Python"],
    githubUrl: "https://github.com",
    docsUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-b border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Engineering solutions designed for hardware-software integration, automotive systems, and IoT deployment.
          </p>
        </div>

        {/* Projects Stack (Horizontal Cards) */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-card-border rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-0 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Image Column - 4/12 width on desktop */}
              <div className="relative h-56 md:h-auto md:col-span-4 overflow-hidden bg-slate-50 border-b md:border-b-0 md:border-r border-card-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Details Column - 8/12 width on desktop */}
              <div className="p-6 sm:p-8 md:col-span-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-lg bg-foreground/5 text-muted border border-card-border/50 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-card-border/50">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-foreground/5 text-foreground hover:bg-primary hover:text-white text-xs font-bold transition-all duration-200"
                    >
                      <GithubIcon size={14} />
                      GitHub Repository
                    </a>
                    <a
                      href={project.docsUrl}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-foreground/5 text-foreground hover:bg-accent hover:text-white text-xs font-bold transition-all duration-200"
                    >
                      <FileText size={14} />
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

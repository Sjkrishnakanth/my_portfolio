"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckSquare, Award, ArrowUpRight } from "lucide-react";

interface Internship {
  role: string;
  company: string;
  date: string;
  location: string;
  responsibilities: string[];
  certificateUrl: string;
  certificateMock: {
    title: string;
    details: string;
  };
}

const internshipsData: Internship[] = [
  {
    role: "RFID and Zigbee Testing Intern",
    company: "Efftronics Systems Pvt Ltd",
    date: "June 2025",
    location: "Vijayawada, Andhra Pradesh, India",
    responsibilities: [
      "Assessed performance thresholds of HZ-100 RFID modules under range and material constraints.",
      "Configured Zigbee mesh networks to evaluate packet delivery success rates and power metrics.",
      "Logged RF diagnostics data using serial terminals and plotted attenuation profiles.",
      "Collaborated with industrial engineers to analyze product durability and shielding properties.",
    ],
    certificateUrl: "/certificates/efftronics.pdf",
    certificateMock: {
      title: "RFID & Zigbee Testing Specialist",
      details: "Completed 4-week industrial internship validating wireless hardware configurations.",
    },
  },
  {
    role: "Embedded Systems & AI/ML Trainee Intern",
    company: "Microchip Technologies - Taras Solutions",
    date: "April 2025",
    location: "Remote / Hyderabad, India",
    responsibilities: [
      "Programmed Microchip microcontrollers utilizing advanced C arrays and timers.",
      "Implemented local classifier frameworks to run Random Forest algorithms on edge nodes.",
      "Interfaced SpO2 and temperature telemetry setups for clinical hardware simulations.",
      "Wrote structured technical logs documenting code size, RAM constraints, and model accuracies.",
    ],
    certificateUrl: "/certificates/microchip.pdf",
    certificateMock: {
      title: "Embedded Systems and AI/ML Core Training",
      details: "Completed training on microcontroller interfacing, sensors, and machine learning models.",
    },
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-24 bg-white border-b border-card-border">
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
            Internship Experience
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Practical workspace contributions applying embedded engineering principles inside local tech corporations and testing labs.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {internshipsData.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-card-border rounded-[20px] p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Column: Role Details */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-accent flex items-center gap-2">
                    <Briefcase size={16} />
                    {item.company}
                  </p>
                  <p className="text-muted text-xs sm:text-sm mt-2 flex items-center gap-1.5 font-semibold">
                    <Calendar size={14} className="text-primary" />
                    {item.date} | {item.location}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <CheckSquare size={14} />
                    Key Activities & Learnings
                  </h4>
                  <ul className="space-y-2.5 text-muted text-sm sm:text-base leading-relaxed font-semibold">
                    {item.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 font-bold text-xs">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Certificate Mock Showcase */}
              <div className="lg:col-span-4 flex items-center">
                <div className="w-full bg-slate-50 border border-dashed border-card-border rounded-xl p-6 flex flex-col justify-between h-full hover:bg-slate-100 transition-all duration-300">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Award size={20} />
                      </div>
                      <span className="text-[10px] font-bold text-muted font-mono tracking-widest uppercase bg-white px-2 py-0.5 rounded border border-card-border">
                        VERIFIED
                      </span>
                    </div>
                    <h4 className="font-bold font-display text-foreground text-sm">
                      {item.certificateMock.title}
                    </h4>
                    <p className="text-xs text-muted mt-2 leading-relaxed font-semibold">
                      {item.certificateMock.details}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-card-border/50">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary font-bold hover:underline"
                    >
                      View Internship Certificate <ArrowUpRight size={14} />
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

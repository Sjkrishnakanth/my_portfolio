"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Mail, ArrowRight, GraduationCap, Code, FileDigit, Briefcase, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const roles = [
  "Embedded Systems Engineer",
  "IoT Developer",
  "Automotive Technology Enthusiast",
  "Research Enthusiast",
];

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <motion.div
      className="bg-white border border-card-border rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
      whileHover={{ y: -4 }}
    >
      <div className="p-3.5 rounded-xl bg-primary/5 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold font-display text-foreground tracking-tight">{value}</div>
        <div className="text-xs font-semibold text-muted tracking-wide uppercase mt-0.5">{label}</div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const stats = [
    { icon: <GraduationCap size={22} />, value: "9.12", label: "ECE CGPA" },
    { icon: <Code size={22} />, value: "5+", label: "Projects" },
    { icon: <FileDigit size={22} />, value: "1+", label: "Research Work" },
    { icon: <Briefcase size={22} />, value: "2", label: "Internships" },
    { icon: <Award size={22} />, value: "5+", label: "Certifications" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 bg-[#F8FAFC] border-b border-card-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Details */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <motion.span
                className="text-primary font-bold text-base sm:text-lg tracking-wider block mb-2 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Hi, I'm
              </motion.span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-display leading-tight">
                SUROJU JYOTHI <br />
                <span className="text-primary">
                  KRISHNA KANTH
                </span>
              </h1>
            </div>

            {/* Animated Typing Role */}
            <div className="h-8 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-accent font-display">
                {currentText}
                <span className="animate-pulse text-primary ml-1">|</span>
              </span>
            </div>

            <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              I am an enthusiastic Electronics and Communication Engineering student with strong interests in Embedded Systems, Internet of Things (IoT), Automotive Technologies, Product Development, and Research & Development. Passionate about developing innovative technology solutions that address real-world challenges in healthcare, agriculture, transportation, and safety systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection("resume")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-hover font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText size={16} />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-foreground border border-card-border hover:bg-foreground/5 font-bold text-sm shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Contact Me
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://linkedin.com/in/surojujyothikrishnakanth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white text-muted border border-card-border hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://github.com/Sjkrishnakanth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white text-muted border border-card-border hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-sm"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="mailto:sjkrishnakanth@gmail.com"
                className="p-2.5 rounded-xl bg-white text-muted border border-card-border hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-sm"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Clean thin border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
              
              {/* Inner wrapper */}
              <div className="absolute inset-4 rounded-full overflow-hidden border border-card-border bg-white shadow-md">
                <Image
                  src="/images/profile.jpg"
                  alt="SUROJU JYOTHI KRISHNA KANTH"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Statistics Cards Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 border-t border-card-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <StatCard key={idx} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

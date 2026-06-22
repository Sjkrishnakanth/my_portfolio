"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, Download, ExternalLink, X, ShieldCheck } from "lucide-react";

interface Certificate {
  title: string;
  organization: string;
  year: string;
  fileUrl: string;
  description: string;
}

const certificatesData: Certificate[] = [
  {
    title: "RFID HZ-100 and Zigbee Testing Certification",
    organization: "Efftronics Systems Pvt Ltd",
    year: "June 2025",
    fileUrl: "/certificates/efftronics.pdf",
    description: "Industrial certification validating successful execution of performance testing, read range calibration, and network latency diagnostics for RFID and Zigbee protocols.",
  },
  {
    title: "Embedded Systems and AI/ML Training",
    organization: "Microchip Technologies – Taras Solutions",
    year: "April 2025",
    fileUrl: "/certificates/microchip.pdf",
    description: "Core specialization training covering microcontroller peripheral interfacing, real-time logging, and deployment of machine learning algorithms on edge nodes.",
  },
  {
    title: "Cadence Spectre IC Simulation Certification",
    organization: "Cadence Design Systems",
    year: "2025",
    fileUrl: "/certificates/cadence.pdf",
    description: "Professional certification validating capabilities in analog, RF, and mixed-signal integrated circuit simulations and parameter optimizations.",
  },
];

export default function Certifications() {
  const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  const handlePreview = (url: string, title: string) => {
    setActivePreviewUrl(url);
    setActiveTitle(title);
  };

  const closePreview = () => {
    setActivePreviewUrl(null);
    setActiveTitle("");
  };

  return (
    <section id="certifications" className="py-24 bg-white border-b border-card-border">
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
            Certifications & Credentials
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Professional certifications and internship training achievements validating expertise in hardware testing, design utilities, and edge computing.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-card-border rounded-[20px] p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="space-y-4">
                {/* Header Icon */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-xs font-bold text-muted bg-foreground/5 px-2.5 py-1 rounded-lg">
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mt-1">
                    {cert.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted text-xs sm:text-sm leading-relaxed font-semibold">
                  {cert.description}
                </p>
              </div>

              {/* Action Buttons Grid */}
              <div className="mt-8 pt-4 border-t border-card-border/50 flex flex-col gap-2">
                <button
                  onClick={() => handlePreview(cert.fileUrl, cert.title)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary text-xs font-bold transition-all duration-200 cursor-pointer"
                >
                  <Eye size={14} />
                  Preview Certificate
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={cert.fileUrl}
                    download={`${cert.title.replace(/\s+/g, "_")}.pdf`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs font-bold transition-all duration-200 text-center"
                  >
                    <Download size={14} />
                    Download
                  </a>
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs font-bold transition-all duration-200 text-center"
                  >
                    <ExternalLink size={14} />
                    View Full
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal PDF/Image Viewer */}
      <AnimatePresence>
        {activePreviewUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePreview}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[85vh] bg-white border border-card-border rounded-[20px] shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-card-border bg-slate-50">
                <div className="flex items-center gap-2 pr-4 min-w-0">
                  <Award size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-bold text-foreground font-display truncate">
                    {activeTitle}
                  </span>
                </div>
                <button
                  onClick={closePreview}
                  className="p-1.5 rounded-lg hover:bg-foreground/10 text-muted hover:text-foreground transition-all duration-200 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal PDF Frame */}
              <div className="flex-grow bg-slate-100">
                <iframe
                  src={activePreviewUrl}
                  className="w-full h-full border-0"
                  title={activeTitle}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

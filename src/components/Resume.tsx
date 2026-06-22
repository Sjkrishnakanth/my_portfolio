"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

export default function Resume() {
  const resumeUrl = "/resume/suroju_jyothi_krishna_kanth_cv.pdf";

  const scrollToViewer = () => {
    const viewer = document.getElementById("pdf-viewer-frame");
    if (viewer) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = viewer.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="resume" className="py-24 bg-[#F8FAFC] border-b border-card-border">
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
            Resume
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Review my professional background, key educational focus areas, and technical expertise in Embedded Systems and IoT.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={resumeUrl}
            download="suroju_jyothi_krishna_kanth_cv.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white hover:bg-primary-hover font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Download size={18} />
            Download Resume
          </a>
          <button
            onClick={scrollToViewer}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-foreground border border-card-border hover:bg-foreground/5 font-bold text-sm shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Eye size={18} className="text-primary" />
            View Resume
          </button>
        </div>

        {/* Embedded Interactive Resume Sheet Preview */}
        <motion.div
          id="pdf-viewer-frame"
          className="max-w-4xl mx-auto bg-white border border-card-border rounded-[20px] shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Bar for Mock Document Viewer */}
          <div className="bg-foreground/5 border-b border-card-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="text-xs text-muted font-mono ml-4">suroju_jyothi_krishna_kanth_cv.pdf</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted font-semibold">
              <FileText size={14} className="text-primary" />
              <span>PDF Document Viewer</span>
            </div>
          </div>

          {/* Actual PDF Viewer Frame */}
          <div className="w-full h-[650px] bg-slate-100">
            <iframe
              src={resumeUrl}
              className="w-full h-full border-0"
              title="SUROJU JYOTHI KRISHNA KANTH Resume"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

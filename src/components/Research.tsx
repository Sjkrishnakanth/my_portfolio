"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Target, Layers, Cpu, CheckCircle2, TrendingUp, Info } from "lucide-react";

type TabType = "overview" | "architecture" | "methodology" | "results";

export default function Research() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const tabItems = [
    { id: "overview", label: "Overview", icon: <Info size={16} /> },
    { id: "architecture", label: "System Architecture", icon: <Layers size={16} /> },
    { id: "methodology", label: "AI Model & Sensors", icon: <Cpu size={16} /> },
    { id: "results", label: "Results & Future Scope", icon: <TrendingUp size={16} /> },
  ];

  return (
    <section id="research" className="py-24 bg-[#F8FAFC] border-b border-card-border">
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
            Research Work
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Focusing on clinical solutions that mitigate alarm fatigue in healthcare settings through edge AI and multisensor fusion.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-foreground/5 p-1.5 rounded-2xl max-w-2xl mx-auto border border-card-border/50">
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white border border-card-border rounded-[20px] p-6 sm:p-10 shadow-sm min-h-[400px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                    Alarm Fatigue System in Clinical Healthcare
                  </h3>
                  <p className="text-accent font-bold text-sm mt-1 uppercase tracking-wide">
                    Addressing clinical alert overload via localized AI models
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Problem Statement Card */}
                  <div className="p-6 rounded-2xl bg-red-500/[0.03] border border-red-200 space-y-3">
                    <h4 className="text-lg font-bold text-red-600 flex items-center gap-2 font-display">
                      <AlertCircle size={20} />
                      Problem Statement
                    </h4>
                    <p className="text-muted text-sm sm:text-base leading-relaxed font-medium">
                      In ICU environments, medical devices generate thousands of alarms daily. Over **85% of these alarms are clinically insignificant** or false, caused by patient movement or brief threshold crossings. This causes clinical staff to desensitize to alerts (alarm fatigue), leading to missed life-threatening events.
                    </p>
                  </div>

                  {/* Objectives Card */}
                  <div className="p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-200 space-y-3">
                    <h4 className="text-lg font-bold text-emerald-600 flex items-center gap-2 font-display">
                      <Target size={20} />
                      Research Objectives
                    </h4>
                    <ul className="text-muted text-sm sm:text-base space-y-2 list-disc list-inside font-medium">
                      <li>Develop a multi-parameter sensor network at the patient bedside.</li>
                      <li>Design a localized machine learning algorithm to classify alarms.</li>
                      <li>Differentiate transient artifacts from critical physiological distress.</li>
                      <li>Suppress false alarms locally without compromising patient safety.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "architecture" && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground">
                    System Architecture & Signal Flow
                  </h3>
                  <p className="text-muted text-sm mt-1 font-medium">
                    Multi-tier telemetry system connecting patient bio-sensors to edge classifier.
                  </p>
                </div>

                {/* SVG Architecture Diagram (Light-theme optimized) */}
                <div className="w-full flex justify-center py-6 bg-slate-50 rounded-2xl overflow-x-auto border border-card-border">
                  <svg
                    width="720"
                    height="200"
                    viewBox="0 0 720 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="min-w-[650px] text-foreground"
                  >
                    {/* Node 1: Sensors */}
                    <rect x="20" y="50" width="120" height="80" rx="12" className="fill-white stroke-card-border" strokeWidth="1.5" />
                    <text x="80" y="85" textAnchor="middle" className="fill-foreground font-bold text-xs">Bio-Sensors</text>
                    <text x="80" y="105" textAnchor="middle" className="fill-muted font-semibold text-[10px]">SpO2, HR, Temp</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M140 90 H170" className="stroke-primary" strokeWidth="1.5" markerEnd="url(#arrow)" />

                    {/* Node 2: Microcontroller */}
                    <rect x="180" y="50" width="120" height="80" rx="12" className="fill-white stroke-card-border" strokeWidth="1.5" />
                    <text x="240" y="85" textAnchor="middle" className="fill-foreground font-bold text-xs">MCU (ESP32)</text>
                    <text x="240" y="105" textAnchor="middle" className="fill-muted font-semibold text-[10px]">ADC & Preprocessing</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M300 90 H330" className="stroke-primary" strokeWidth="1.5" markerEnd="url(#arrow)" />

                    {/* Node 3: AI Engine */}
                    <rect x="340" y="50" width="130" height="80" rx="12" className="fill-primary/5 stroke-primary" strokeWidth="1.5" />
                    <text x="405" y="85" textAnchor="middle" className="fill-primary font-bold text-xs">Local Random Forest</text>
                    <text x="405" y="105" textAnchor="middle" className="fill-muted font-semibold text-[10px]">Feature Classification</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M470 90 H500" className="stroke-primary" strokeWidth="1.5" markerEnd="url(#arrow)" />

                    {/* Node 4: Output Alert */}
                    <rect x="510" y="50" width="140" height="80" rx="12" className="fill-white stroke-card-border" strokeWidth="1.5" />
                    <text x="580" y="85" textAnchor="middle" className="fill-foreground font-bold text-xs">Alert Squelching</text>
                    <text x="580" y="105" textAnchor="middle" className="fill-muted font-semibold text-[10px]">99% Valid Alarms Only</text>

                    {/* Marker definitions */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs text-center text-muted font-bold italic">
                  Figure 1: Telemetry and decision matrix pipeline showing multi-parametric sensor feeds running through localized classification layers.
                </p>
              </motion.div>
            )}

            {activeTab === "methodology" && (
              <motion.div
                key="methodology"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground">
                    Methodology & Sensor Specification
                  </h3>
                  <p className="text-muted text-sm mt-1 font-medium">
                    Details of physical interface layers and model parameters.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Sensors Card */}
                  <div className="p-6 border border-card-border rounded-[20px] bg-slate-50 space-y-4">
                    <h4 className="font-bold text-foreground font-display flex items-center gap-2">
                      <Layers size={18} className="text-accent" />
                      Sensors Integrated
                    </h4>
                    <ul className="text-muted text-sm space-y-2 list-disc list-inside font-semibold">
                      <li>Max30102 for SpO2 & Heart Rate</li>
                      <li>DS18B20 for skin temperature logging</li>
                      <li>ADXL345 for patient activity profiling</li>
                    </ul>
                  </div>

                  {/* Feature Extraction Card */}
                  <div className="p-6 border border-card-border rounded-[20px] bg-slate-50 space-y-4">
                    <h4 className="font-bold text-foreground font-display flex items-center gap-2">
                      <Cpu size={18} className="text-primary" />
                      Feature Extraction
                    </h4>
                    <p className="text-muted text-sm leading-relaxed font-semibold">
                      Continuous raw PPG signals are filtered and segmented into 10-second windows. Extracted features include R-R interval standard deviation, SpO2 trend lines, and movement amplitude vectors.
                    </p>
                  </div>

                  {/* AI Model Card */}
                  <div className="p-6 border border-card-border rounded-[20px] bg-slate-50 space-y-4">
                    <h4 className="font-bold text-foreground font-display flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      Random Forest Model
                    </h4>
                    <p className="text-muted text-sm leading-relaxed font-semibold">
                      A lightweight Random Forest classifier trained on physiological datasets. The model evaluates features locally on edge gateways in real-time, yielding quick, deterministic predictions without latency.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "results" && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground">
                    Research Outcomes & Future Scope
                  </h3>
                  <p className="text-muted text-sm mt-1 font-medium">
                    System performance validation metrics and upcoming expansion objectives.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Results Card */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-primary font-display flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-emerald-500" />
                      Results & Validation
                    </h4>
                    <div className="space-y-3 text-muted text-sm sm:text-base font-semibold">
                      <p>
                        The integrated system was tested against simulated clinical profiles containing artificial artifacts:
                      </p>
                      <ul className="list-disc list-inside space-y-2.5 pl-2">
                        <li>**85% False Alarm Suppression:** Successfully filters noise alarms.</li>
                        <li>**99.2% Sensitivity:** Zero missed critical events.</li>
                        <li>**Low Latency:** Average decision latency under 150ms on the ESP32.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Future Scope Card */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-accent font-display flex items-center gap-2">
                      <TrendingUp size={20} />
                      Future Scope
                    </h4>
                    <div className="space-y-3 text-muted text-sm sm:text-base font-semibold">
                      <p>
                        Upcoming development objectives to advance the prototype toward clinical trials:
                      </p>
                      <ul className="list-disc list-inside space-y-2.5 pl-2">
                        <li>Integrating BLE mesh for multidevice local networks.</li>
                        <li>Adapting deep learning LSTM networks on resource-constrained microcontrollers (TinyML).</li>
                        <li>Creating wireless charging medical patch prototypes.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

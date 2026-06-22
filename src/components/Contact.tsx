"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={20} />,
      label: "Email",
      value: "sjkrishnakanth@gmail.com",
      href: "mailto:sjkrishnakanth@gmail.com",
    },
    {
      icon: <Phone className="text-primary" size={20} />,
      label: "Phone",
      value: "+91 6304507289",
      href: "tel:+916304507289",
    },
    {
      icon: <LinkedinIcon className="text-primary" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/surojujyothikrishnakanth",
      href: "https://linkedin.com/in/surojujyothikrishnakanth",
    },
    {
      icon: <GithubIcon className="text-primary" size={20} />,
      label: "GitHub",
      value: "github.com/Sjkrishnakanth",
      href: "https://github.com/Sjkrishnakanth",
    },
    {
      icon: <MapPin className="text-primary" size={20} />,
      label: "Location",
      value: "Tadepalle, Guntur, Andhra Pradesh, India",
      href: "https://maps.google.com/?q=Tadepalle,Guntur,AndhraPradesh,India",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Let's collaborate on embedded architectures, smart IoT deployments, or academic research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Contact Header with Real Avatar Pic */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-primary/20 shadow-sm flex-shrink-0">
                  <Image
                    src="/images/profile.jpg"
                    alt="SUROJU JYOTHI KRISHNA KANTH"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground">
                    Get in Touch
                  </h3>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider">
                    SJKK Portfolio
                  </p>
                </div>
              </div>
              <p className="text-muted text-sm sm:text-base leading-relaxed font-medium">
                Have a question or want to discuss a project proposal? Feel free to contact me via email, phone, or LinkedIn. I am always open to discussing new development ventures and IoT solution ideas.
              </p>
            </div>

            <div className="space-y-3.5">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-card-border rounded-xl p-4 flex items-center justify-between group hover:border-primary/20 transition-all duration-300 shadow-sm"
                >
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3.5 flex-grow truncate"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="truncate pr-2">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">
                        {info.label}
                      </span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate block">
                        {info.value}
                      </span>
                    </div>
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(info.value, info.label)}
                    className="p-2 rounded-lg hover:bg-foreground/5 text-muted hover:text-foreground transition-all duration-200 flex-shrink-0 cursor-pointer"
                    title={`Copy ${info.label}`}
                  >
                    {copiedType === info.label ? (
                      <Check size={16} className="text-emerald-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-card-border rounded-2xl p-6 sm:p-10 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-card-border focus:border-primary focus:outline-none text-foreground font-semibold text-sm transition-all duration-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-card-border focus:border-primary focus:outline-none text-foreground font-semibold text-sm transition-all duration-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-card-border focus:border-primary focus:outline-none text-foreground font-semibold text-sm transition-all duration-300 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white hover:bg-primary-hover font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Status Banner */}
              <AnimatePresence>
                {submitted && (
                  <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-emerald-500 text-sm font-bold">
                    <CheckCircle2 size={20} className="flex-shrink-0" />
                    <span>Message sent successfully! I will get back to you shortly.</span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

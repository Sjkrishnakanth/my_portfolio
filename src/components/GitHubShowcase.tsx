"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Code, GitFork, Calendar, Search, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

interface Repository {
  name: string;
  description: string;
  stars: number;
  language: string;
  lastUpdated: string;
  forks: number;
  htmlUrl: string;
}

const mockRepos: Repository[] = [
  {
    name: "alarm-fatigue-ai",
    description: "Random Forest machine learning classifier optimized for microcontrollers to filter false hospital telemetry alerts.",
    stars: 34,
    language: "Python",
    lastUpdated: "2026-06-15",
    forks: 4,
    htmlUrl: "https://github.com/Sjkrishnakanth/alarm-fatigue-ai",
  },
  {
    name: "adaptive-headlight-system",
    description: "Dynamic automotive headlight beam leveling and steering alignment controller using ESP32 and MPU6050 IMU.",
    stars: 22,
    language: "C++",
    lastUpdated: "2026-06-01",
    forks: 3,
    htmlUrl: "https://github.com/Sjkrishnakanth/adaptive-headlight-system",
  },
  {
    name: "tracer-gps-gsm",
    description: "Micro-locator telemetry system transmitting real-time coordinates over cellular GSM fallback protocols.",
    stars: 15,
    language: "C++",
    lastUpdated: "2026-05-18",
    forks: 2,
    htmlUrl: "https://github.com/Sjkrishnakanth/tracer-gps-gsm",
  },
  {
    name: "agro-web-iot",
    description: "STM32 agricultural logging platform posting humidity and soil metrics directly to ThingSpeak API nodes.",
    stars: 12,
    language: "C",
    lastUpdated: "2026-04-20",
    forks: 1,
    htmlUrl: "https://github.com/Sjkrishnakanth/agro-web-iot",
  },
  {
    name: "bus-safety-detection",
    description: "Automated exhaust venting and alarm triggers responding to smoke, temperature spikes, or gas leaks.",
    stars: 8,
    language: "C++",
    lastUpdated: "2026-03-12",
    forks: 1,
    htmlUrl: "https://github.com/Sjkrishnakanth/bus-safety-detection",
  },
];

export default function GitHubShowcase() {
  const [repos, setRepos] = useState<Repository[]>(mockRepos);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [username] = useState("Sjkrishnakanth");

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        if (response.ok) {
          const data = await response.json();
          if (data && Array.isArray(data) && data.length > 0) {
            const formattedRepos: Repository[] = data.map((repo: any) => ({
              name: repo.name,
              description: repo.description || "No description provided.",
              stars: repo.stargazers_count,
              language: repo.language || "C++",
              lastUpdated: new Date(repo.updated_at).toISOString().split("T")[0],
              forks: repo.forks_count,
              htmlUrl: repo.html_url,
            }));
            setRepos(formattedRepos);
          }
        }
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  // Filter repos based on search query
  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate Mock Contribution Graph (365 days / 53 weeks)
  const generateContributionWeeks = () => {
    const weeks = [];
    const colors = [
      "bg-slate-200", // 0 contributions
      "bg-emerald-100", // 1-2 contributions
      "bg-emerald-250", // 3-4 contributions (in light-mode tailwind we can use custom color values)
      "bg-emerald-300", 
      "bg-emerald-500", // 7+ contributions
    ];

    // Custom CSS mapping to keep light colors clean
    const lightColors = [
      "bg-slate-100 border border-slate-200/50",
      "bg-emerald-100/70 border border-emerald-200/25",
      "bg-emerald-200/80 border border-emerald-300/30",
      "bg-emerald-350 bg-emerald-400/80 border border-emerald-500/20",
      "bg-emerald-500 border border-emerald-600/10",
    ];

    for (let w = 0; w < 53; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const score = (w * 3 + d * 7) % 5;
        days.push(lightColors[score]);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionWeeks = generateContributionWeeks();

  return (
    <section id="github" className="py-24 bg-[#F8FAFC] border-b border-card-border">
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
            GitHub Repositories
          </motion.h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Review live source repositories, version check-ins, and contribution activity feeds representing system design codebases.
          </p>
        </div>

        {/* GitHub Contribution Graph Mockup */}
        <motion.div
          className="bg-white border border-card-border rounded-[20px] p-6 sm:p-8 shadow-sm mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-card-border/50 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-foreground/5 text-foreground">
                <GithubIcon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-foreground">
                  Activity Feed
                </h3>
                <p className="text-xs text-muted font-semibold">
                  {username} on GitHub
                </p>
              </div>
            </div>
            <div className="text-xs text-muted font-bold bg-foreground/5 px-3 py-1.5 rounded-xl border border-card-border">
              340 Contributions in the last year
            </div>
          </div>

          {/* Graph Scrolling viewport */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[700px] flex flex-col space-y-1">
              <div className="flex gap-[3px]">
                {contributionWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((colorClass, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-[10px] h-[10px] rounded-[1.5px] ${colorClass} transition-transform duration-200 hover:scale-125 cursor-pointer`}
                        title={`Activity weight: ${colorClass.includes("slate") ? 0 : colorClass.includes("100") ? 1 : colorClass.includes("200") ? 2 : colorClass.includes("400") ? 3 : 4}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-1.5 text-[10px] text-muted font-bold mt-2">
            <span>Less</span>
            <div className="w-[8px] h-[8px] rounded-[1.5px] bg-slate-100 border border-slate-200/50" />
            <div className="w-[8px] h-[8px] rounded-[1.5px] bg-emerald-100/70 border border-emerald-200/25" />
            <div className="w-[8px] h-[8px] rounded-[1.5px] bg-emerald-200/80 border border-emerald-300/30" />
            <div className="w-[8px] h-[8px] rounded-[1.5px] bg-emerald-400/80 border border-emerald-500/20" />
            <div className="w-[8px] h-[8px] rounded-[1.5px] bg-emerald-500 border border-emerald-600/10" />
            <span>More</span>
          </div>
        </motion.div>

        {/* Repository Search & Grid */}
        <div className="space-y-8">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input
              type="text"
              placeholder="Search repositories by name, language..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-card-border focus:border-primary focus:outline-none text-foreground font-semibold text-sm transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Repo Grid */}
          {loading ? (
            <div className="text-center py-12 text-muted font-semibold text-sm">
              Connecting to GitHub API...
            </div>
          ) : filteredRepos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRepos.map((repo, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-card-border rounded-[20px] p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-full group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold font-display text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                        {repo.name}
                      </h4>
                      <a
                        href={repo.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors duration-200"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2 font-medium">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-card-border/50 text-xs text-muted font-semibold">
                    <span className="flex items-center gap-1">
                      <Code size={14} className="text-accent" />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-amber-500" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} className="text-primary" />
                      {repo.forks}
                    </span>
                    <span className="flex items-center gap-1 ml-auto">
                      <Calendar size={14} />
                      {repo.lastUpdated}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted font-semibold text-sm">
              No matching repositories found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

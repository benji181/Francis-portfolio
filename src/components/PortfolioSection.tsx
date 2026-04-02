import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/Buselor.png";
import project2 from "@/assets/Dkonnect.png";
import project3 from "@/assets/Rank128.png";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

type Category = "All" | "UI/UX" | "Graphic Design";

const projects = [
  { id: 1, title: "Buselor", desc: "A fintech mobile app with intuitive data visualization and seamless user flows.", category: "UI/UX" as const, image: project1 },
  { id: 2, title: "DKonnect", desc: "Complete brand identity system including logo, stationery, and brand guidelines.", category: "UI/UX" as const, image: project2 },
  { id: 3, title: "Rank128", desc: "Full website redesign focusing on Seo optimization and user experience.", category: "UI/UX" as const, image: project3 },
  { id: 4, title: "Festival Poster Series", desc: "Bold typographic poster designs for a music festival campaign.", category: "Graphic Design" as const, image: project4 },
  { id: 5, title: "Social Campaign Kit", desc: "Cohesive social media template system for a lifestyle brand.", category: "Graphic Design" as const, image: project5 },
  { id: 6, title: "Wellness App Design", desc: "Health & wellness app with onboarding, tracking dashboard, and habit builder.", category: "UI/UX" as const, image: project6 },
];

const categories: Category[] = ["All", "UI/UX", "Graphic Design"];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Portfolio</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Selected <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="mt-10 flex justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gradient-blue text-primary-foreground shadow-glow"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover-lift cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary">{project.category}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline">
                    View Project <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

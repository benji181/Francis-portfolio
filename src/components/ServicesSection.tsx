import { motion } from "framer-motion";
import { Layers, PenTool, Search, Palette } from "lucide-react";

const services = [
  { icon: Search, title: "UX Research", desc: "User interviews, surveys, and usability testing to uncover actionable insights." },
  { icon: Layers, title: "Wireframing & Prototyping", desc: "Low to high-fidelity prototypes that bring ideas to life before development." },
  { icon: Palette, title: "Branding & Identity", desc: "Logos, color systems, and brand guidelines that tell your unique story." },
  { icon: PenTool, title: "Graphic Design", desc: "Print and digital visuals — posters, social media kits, marketing collateral." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Services</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 text-center hover-lift"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-blue group-hover:text-primary-foreground">
                <service.icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

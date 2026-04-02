import { motion } from "framer-motion";
import profilePhoto from "@/assets/francis-1.jpeg";
import resume from "@/assets/FrancisEmmanuelResume.pdf";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img
                src={profilePhoto}
                alt="Alex Rivera - UI/UX & Graphic Designer"
                width={512}
                height={512}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              About Me
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Designing with purpose,<br />
              <span className="text-gradient">creating with passion.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With over 5 years of experience in UI/UX and graphic design, I specialize in
              creating user-centric digital products and compelling brand identities. My
              approach combines strategic thinking with creative execution to deliver designs
              that not only look beautiful but also solve real problems.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I believe great design is invisible — it just works. From wireframes to
              high-fidelity prototypes, from logos to full brand systems, every pixel is
              placed with intention.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Projects" },
                { value: "5+", label: "Years Exp." },
                { value: "30+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center rounded-xl border border-border bg-card p-4">
                  <div className="font-display text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <a

                href={resume}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

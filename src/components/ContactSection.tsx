import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Contact</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-blue py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to chat about design? I'd love to hear from you.
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "francixsemmanuel@gmail.com ", href: "mailto:francixsemmanuel@gmail.com " },
                { icon: Phone, label: "+234 806 243 2725", href: "tel:+2348062432725" },
                { icon: Phone, label: "+234 812 854 2506", href: "tel:+2348128542506" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Globe, label: "Behance", href: "https://www.behance.net/yomiempire" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                    <item.icon size={18} />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

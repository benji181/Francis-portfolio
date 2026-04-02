const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="font-display text-lg font-bold text-gradient">Alex.</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Francis. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Home", "About", "Portfolio", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

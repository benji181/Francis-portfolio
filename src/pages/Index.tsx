import { useTheme } from "@/contexts/ThemContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LineWaves from "@/components/LineWaves/LineWaves.tsx";

const Index = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const color1 = isDark ? "#6b21a8" : "#2a1a3a";   // purple-800 instead of purple-500
    const color2 = isDark ? "#86198f" : "#1f1228";   // fuchsia-900
    const color3 = isDark ? "#831843" : "#332222";   // pink-900

    return (
        <div className="relative min-h-screen bg-background">
            {/* Background waves layer */}
            <div className="fixed inset-0 -z-20">
                <LineWaves
                    speed={0.3}
                    innerLineCount={32}
                    outerLineCount={36}
                    warpIntensity={1.0}
                    rotation={-45}
                    edgeFadeWidth={0.2}
                    colorCycleSpeed={0.8}
                    brightness={isDark ? 0.12 : 0.04}
                    color1={color1}
                    color2={color2}
                    color3={color3}
                    enableMouseInteraction
                    mouseInfluence={2.0}
                />
            </div>

            {/* Slightly stronger overlay for better text contrast */}
            <div className="fixed inset-0 -z-10 bg-background/50 backdrop-blur-[4px]" />

            {/* Foreground content */}
            <div className="relative z-0">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <PortfolioSection />
                <ServicesSection />
                <ContactSection />
                <Footer />
            </div>
        </div>
    );
};

export default Index;
import { Code, Palette, Rocket, Shield, Zap, Users } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies for optimal performance and user experience.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that delight users and drive engagement across all devices.",
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description:
        "Comprehensive planning and execution to achieve your business goals in the digital landscape.",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description:
        "Enterprise-grade security measures to protect your data and maintain customer trust.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed and efficiency improvements that enhance user satisfaction and search rankings.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description:
        "Expert guidance and support to navigate complex technical challenges and opportunities.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

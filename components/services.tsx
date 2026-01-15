"use client";

import { motion } from "framer-motion";
import { Clapperboard, Zap, BarChart3, Smartphone } from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Videos Editing",
    description: "Turning raw clips into a story that speaks without words.",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description:
      "Data-driven strategies that align with your business goals and market opportunities.",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    description:
      "Proven tactics to accelerate growth, increase visibility, and dominate your market.",
  },
  {
    icon: Smartphone,
    title: "Brand Design",
    description:
      "Cohesive brand identities that resonate with your audience and stand out.",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services that drive results
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="p-8 bg-card border border-border rounded-xl cursor-pointer group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Icon size={24} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

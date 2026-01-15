"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-medium text-sm tracking-widest uppercase mb-4"
        >
          Digital Excellence
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          We grow brands through{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            strategic, design{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            and demand growth.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-foreground/60 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your brand into a market leader. We combine strategic
          thinking with creative excellence to deliver results that matter.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
            Start Your Journey
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors">
            View Our Work
          </button>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "3 Years", label: "Industry Experience" },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-foreground/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

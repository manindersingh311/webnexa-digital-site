"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.p variants={itemVariants} className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
            About Webnexa Agency
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            We Transform Brands Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Market Leaders
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto">
            Strategic digital solutions that drive measurable growth.
          </motion.p>
        </motion.div>

        {/* Mission & Vision Cards - Removed story section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 border border-border rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg">🎯</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Our Mission</h4>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Empower businesses with innovative digital strategies that drive sustainable growth.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 border border-border rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg">✨</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Our Vision</h4>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Be the most trusted partner for ambitious brands seeking transformative growth.
              </p>
            </motion.div>
          </div>

          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-center">
            Our Core Values
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { title: "Excellence", icon: "⭐" },
              { title: "Transparency", icon: "🔍" },
              { title: "Innovation", icon: "💡" },
              { title: "Results", icon: "📈" },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="p-4 border border-border rounded-lg bg-card hover:bg-card/80 transition-colors text-center"
              >
                <div className="text-3xl mb-2">{value.icon}</div>
                <h4 className="text-sm font-bold">{value.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.button
            variants={itemVariants}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

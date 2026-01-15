"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "TechStart Accelerator",
    tagline: "200% Revenue Growth",
    category: "Growth Marketing",
    description: "Scaled a SaaS startup from $50K to $150K MRR in 6 months.",
  },
  {
    title: "Fashion Forward Co.",
    tagline: "85% Conversion Lift",
    category: "Web Design",
    description: "Redesigned e-commerce platform resulting in massive sales increase.",
  },
  {
    title: "Global Finance Group",
    tagline: "$2M in New Business",
    category: "Brand Design",
    description: "Complete brand overhaul that attracted premium enterprise clients.",
  },
]

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="work" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Our Results</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proven impact across industries</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {caseStudies.map((study, i) => (
            <motion.div key={i} variants={cardVariants} whileHover="hover" className="group">
              <div className="h-48 bg-gradient-to-br from-accent/30 via-primary/20 to-background rounded-xl mb-4 relative overflow-hidden">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-accent text-sm font-medium mb-2">{study.category}</p>
              <h3 className="text-xl font-bold mb-1">{study.title}</h3>
              <p className="text-foreground/60 text-sm mb-3">{study.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="font-bold text-accent">{study.tagline}</span>
                <ArrowRight
                  size={18}
                  className="text-foreground/40 group-hover:text-accent transition-colors group-hover:translate-x-1"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

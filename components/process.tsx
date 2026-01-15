"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understanding your business goals and market position.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Crafting strategies and designs tailored to your vision.",
  },
  {
    number: "03",
    title: "Development",
    description: "Building high-performance digital solutions.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description: "Deploying and optimizing for continuous results.",
  },
]

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="process" className="py-20 px-6 relative bg-card/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A proven process for success</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div key={i} variants={stepVariants} className="flex flex-col">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/60 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

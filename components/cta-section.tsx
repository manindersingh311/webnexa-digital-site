"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CTASection() {
  const router = useRouter()

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background gradients */}
          <div className="absolute -top-20 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 bg-card border border-border rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to transform your brand?</h2>
            <p className="text-foreground/60 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of brands that have achieved extraordinary results with our strategic approach and creative
              excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 group"
            >
              Schedule a Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

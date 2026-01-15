"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Let's Work Together</h2>
            <p className="text-lg text-foreground/70">
              Ready to transform your brand? Get in touch with our team today.
            </p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-lg border border-border"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

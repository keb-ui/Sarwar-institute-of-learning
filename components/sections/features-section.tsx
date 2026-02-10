"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BookOpen, Calculator, Palette, TrendingUp, Globe, Microscope } from "lucide-react"

function SubjectRotator() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const subjects = [
    { icon: Calculator, name: "Math", color: "text-primary" },
    { icon: Microscope, name: "Science", color: "text-accent" },
    { icon: Globe, name: "History", color: "text-primary" },
    { icon: Palette, name: "Arts", color: "text-accent" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subjects.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = subjects[currentIndex].icon

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <motion.div
        key={currentIndex}
        className={subjects[currentIndex].color}
        initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CurrentIcon size={80} strokeWidth={1.5} />
      </motion.div>
      <motion.span
        key={`name-${currentIndex}`}
        className="text-2xl font-serif text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {subjects[currentIndex].name}
      </motion.span>
    </div>
  )
}

function FinanceChart() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
      <TrendingUp size={48} className="text-primary" strokeWidth={1.5} />
      <div className="flex items-end gap-1 h-24">
        {[20, 40, 60, 80, 100].map((height, i) => (
          <motion.div
            key={i}
            className="w-6 bg-accent/30 rounded-t"
            animate={{ height: `${Math.min(progress, height)}%` }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground font-medium">Financial Growth</span>
    </div>
  )
}

function CommunityCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count < 300) {
        setCount((prev) => prev + 15)
      }
    }, 50)
    return () => clearTimeout(timeout)
  }, [count])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <BookOpen size={48} className="text-primary" strokeWidth={1.5} />
      <motion.span
        className="text-5xl font-sans font-bold text-foreground"
        key={count}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        {count}+
      </motion.span>
      <span className="text-sm text-muted-foreground">Students Empowered</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background px-6 py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-serif text-foreground mb-12 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Comprehensive Learning for Every Goal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-card border border-border rounded-xl p-8 min-h-[320px] flex flex-col shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <SubjectRotator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl text-foreground mb-2">Core Subjects</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Master math, science, history, and the arts with expert tutors who make learning engaging and
                accessible.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-xl p-8 min-h-[320px] flex flex-col shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <FinanceChart />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl text-foreground mb-2">Financial Education</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn stocks, investing, and personal finance to build wealth and secure your financial future.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-xl p-8 min-h-[320px] flex flex-col shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <CommunityCounter />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl text-foreground mb-2">Community Centered</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Accessible, locally-focused education that creates lasting connections and fosters lifelong learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

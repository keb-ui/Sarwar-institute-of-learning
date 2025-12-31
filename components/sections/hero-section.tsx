"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, GraduationCap, TrendingUp } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background px-6 py-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[10%] text-primary/10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          <BookOpen size={120} />
        </motion.div>
        <motion.div
          className="absolute top-[60%] right-[15%] text-accent/10"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        >
          <GraduationCap size={140} />
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[20%] text-primary/10"
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          <TrendingUp size={100} />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Sarwar institute of learning</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance leading-tight text-foreground mb-8">
          Empowering <span className="text-primary italic">Your Community</span> Through Education
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-12 leading-relaxed">
          {
            "Comprehensive tutoring across math, science, history, and the arts plus practical lessons in stocks and finance to build your financial future for free."
          }
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Today
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-medium text-lg hover:bg-muted transition-colors border-2 border-border"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Subjects
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

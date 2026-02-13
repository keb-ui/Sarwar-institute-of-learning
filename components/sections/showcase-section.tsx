"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { BookOpen, TrendingUp, Beaker, Globe2, Palette, Calculator, Book } from "lucide-react"

const subjects = [
  {
    icon: Calculator,
    title: "Mathematics",
    description: "From basic arithmetic to advanced calculus, led by Sean Fazel and our expert mathematics team.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Beaker,
    title: "Science",
    description: "Explore biology, chemistry, and physics through engaging experiments with Sean Fazel.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Book,
    title: "English",
    description: "Build strong reading, writing, and communication skills with founder Hedayat Sarwar.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Globe2,
    title: "History",
    description: "Journey through time and understand the events that shaped our world with founder Hedayat Sarwar.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Palette,
    title: "Arts",
    description: "Unleash creativity through visual arts, music, and expressive learning with Hedayat Sarwar.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Financial Literacy",
    description: "Master stocks, investing, and money management with founder Hedayat Sarwar.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description: "Tailored tutoring that adapts to your unique learning style and pace.",
    color: "bg-primary/10 text-primary",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="subjects" ref={containerRef} className="relative bg-background px-6 py-32 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Subjects
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-serif text-foreground mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Everything You Need to Succeed
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, i) => {
            const Icon = subject.icon
            return (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                data-clickable
              >
                <div className={`inline-flex p-3 rounded-lg ${subject.color} mb-4`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{subject.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{subject.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

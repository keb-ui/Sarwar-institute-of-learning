"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, MessageCircle, TrendingUp, Sparkles } from "lucide-react"

const stats = [
  { icon: Users, value: "827", label: "Weekly Visitors", trend: "Growing community" },
  { icon: MessageCircle, value: "128", label: "Active Learners", trend: "Engaged students" },
  { icon: TrendingUp, value: "375", label: "New Members", trend: "This week" },
  { icon: Sparkles, value: "60.3%", label: "Retention Rate", trend: "Students return" },
]

export function CommunitySection() {
  return (
    <section className="bg-muted/30 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Community
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-serif text-foreground mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ask a Former Student
        </motion.h2>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8">
            <a href="mailto:omartarvin@gmail.com" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
              <span className="font-medium text-foreground">Omar</span> — omartarvin@gmail.com
            </a>
            <a href="mailto:aaliyahcervantes772@gmail.com" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
              <span className="font-medium text-foreground">Aaliyah</span> — aaliyahcervantes772@gmail.com
            </a>
            <a href="mailto:jordanmersin@gmail.com" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
              <span className="font-medium text-foreground">Jordan</span> — jordanmersin@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.trend}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Screenshots */}
        <div className="flex flex-col gap-6">
          <motion.div
            className="rounded-2xl overflow-hidden border border-border shadow-lg bg-[#313338]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-01-31%20142706-41uqjZudPeSB98CZ9GZZXip7GlMchN.png"
              alt="Discord testimonial from coco thanking Sarwar for tutoring - went from 40 to 95 in English class"
              width={1200}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden border border-border shadow-lg bg-[#313338]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-01-31%20142714-i7YpV4gbTjizBCi9bJOEmr0gOC18pY.png"
              alt="Discord testimonial from Wist - raised GPA, rebuilt confidence, and transferred to a better college"
              width={1200}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

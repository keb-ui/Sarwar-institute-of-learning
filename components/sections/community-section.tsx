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
          Learn Together, Grow Together
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join our thriving Discord community where students connect, collaborate, and learn from each other. 
          Live classes, study sessions, and expert guidance await.
        </motion.p>

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

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <Image
              src="/images/screenshot-202026-01-26-20224233.png"
              alt="Sarwar's Institute of Learning Discord server showing active tutoring channels and class announcements"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="font-serif text-xl text-foreground mb-2">Live Classes & Channels</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated channels for math, science, art, history, finance, and more. Join live voice classes with our expert tutors.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <Image
              src="/images/screenshot-202026-01-26-20224723.png"
              alt="Server insights showing community growth and engagement statistics"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="font-serif text-xl text-foreground mb-2">Growing Community</h3>
              <p className="text-sm text-muted-foreground">
                Watch our community thrive with hundreds of new members joining each week to learn and grow together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://discord.gg/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            data-clickable
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Our Discord Community
          </a>
        </motion.div>
      </div>
    </section>
  )
}

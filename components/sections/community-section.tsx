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
              src="/images/discord-live-classes.png"
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
      </div>
    </section>
  )
}

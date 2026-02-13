"use client"

import { motion } from "framer-motion"

export function PricingSection() {
  return (
    <section id="about" className="bg-secondary px-6 py-24 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground text-balance mb-8">
            A Message from Us
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Sarwar Institute of Learning started with a simple goal: to help people learn and grow together. Over time, this community became something truly special. After much thought, we've decided to close this chapter and officially end the Sarwar Institute of Learning, including shutting down the community server, due to the ongoing costs and the difficulty of sustaining it long-term. Soon, we will also be shutting down the website due to the technical difficulties of maintaining it and the need to repeatedly restart it on different hosting servers.
            </p>
            <p>
              We're incredibly thankful to everyone who supported us, learned with us, and believed in what we were building. The impact of this experience will last far beyond the server.
            </p>
            <p>
              Thank you for being part of our story. We wish you continued success in your learning journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Individual",
    price: "$45",
    period: "/hour",
    description: "One-on-one personalized tutoring",
    features: [
      "Flexible scheduling",
      "All subjects available",
      "Progress tracking",
      "Email support",
      "Custom learning plans",
    ],
  },
  {
    name: "Small Group",
    price: "$25",
    period: "/hour per student",
    description: "Learn together with peers",
    features: [
      "Groups of 3-5 students",
      "Interactive sessions",
      "All subjects available",
      "Peer collaboration",
      "Progress reports",
      "Discounted rate",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground text-balance">
            Accessible learning for everyone
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Choose the tutoring format that works best for you. Sessions are hosted on a private, free platform. For more information or to get started, please text 984-218-7561.         
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            null
          ))}
        </div>

        
      </div>
    </section>
  )
}

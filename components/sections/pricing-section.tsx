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
    <section id="pricing" className="bg-secondary px-6 py-24 scroll-mt-16">
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
            <motion.div
              key={plan.name}
              className={`relative bg-card border rounded-2xl p-8 ${plan.popular ? "border-primary shadow-lg" : "border-border"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-2xl text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.a
                href="sms:9842187561"
                className={`block w-full py-3 rounded-xl font-medium text-center transition-colors cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-muted border border-border"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">Have questions? Reach out directly!</p>
          <motion.a
            href="tel:9842187561"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Call (984) 218-7561
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  { label: "Subjects", href: "#subjects" },
  { label: "Community", href: "#community" },
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
]

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/20 opacity-50 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.h2
              className="text-5xl md:text-7xl font-serif text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Sarwar's
              <br />
              Institute of Learning
            </motion.h2>

            <motion.div
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a href="mailto:hedayatsarwar216@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={18} />
                <span className="text-sm">hedayatsarwar216@gmail.com</span>
              </a>
              <a href="tel:+19842187561" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={18} />
                <span className="text-sm">(984) 218-7561</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span className="text-sm">Garner, NC</span>
              </div>
            </motion.div>

            <nav className="flex flex-wrap gap-6">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>


        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Sarwar's Institute of Learning. Empowering learners, building futures.
          </p>
          <a href="mailto:hedayatsarwar216@gmail.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-clickable>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

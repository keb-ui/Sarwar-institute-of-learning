"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "The Art of Visual Storytelling",
    category: "Design",
    image: "/visual-storytelling-design-article.jpg",
  },
  {
    title: "Building a Personal Brand Online",
    category: "Strategy",
    image: "/personal-branding-digital-marketing.jpg",
  },
  {
    title: "Typography Trends for 2024",
    category: "Typography",
    image: "/typography-trends-modern-fonts.jpg",
  },
  {
    title: "Minimalism in Portfolio Design",
    category: "Inspiration",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    null
  )
}

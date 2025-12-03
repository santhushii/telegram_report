'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ExpandableSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  color?: string
}

export default function ExpandableSection({
  title,
  children,
  defaultOpen = false,
  color = 'primary',
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="section-card group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:opacity-90 transition-opacity"
      >
        <div className="flex items-center gap-4">
          <div className={`w-1 h-12 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full transition-all ${isOpen ? 'opacity-100' : 'opacity-50'}`}></div>
          <h2 className="text-2xl md:text-3xl font-extrabold gradient-text">{title}</h2>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-primary-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-primary-600" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 border-t border-gray-200 mt-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


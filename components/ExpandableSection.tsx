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
    <div className="section-card group relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:opacity-90 transition-all duration-300"
      >
        <div className="flex items-center gap-5">
          <div className={`w-2 h-14 bg-gradient-to-b from-primary-500 via-accent-500 to-purple-500 rounded-full transition-all shadow-lg shadow-primary-500/30 ${isOpen ? 'opacity-100 scale-110' : 'opacity-60'}`}></div>
          <h2 className="text-2xl md:text-3xl font-extrabold gradient-text drop-shadow-sm">{title}</h2>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex-shrink-0 ml-4 p-3 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 hover:from-primary-200 hover:to-accent-200 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-primary-700" />
          ) : (
            <ChevronDown className="w-6 h-6 text-primary-700" />
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


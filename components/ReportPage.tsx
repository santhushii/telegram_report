'use client'

import { motion } from 'framer-motion'

interface ReportPageProps {
  id: string
  pageNumber: number
  children: React.ReactNode
}

export default function ReportPage({ id, pageNumber, children }: ReportPageProps) {
  return (
    <div
      id={id}
      className="min-h-screen relative overflow-hidden bg-gray-900"
    >

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 container mx-auto px-12 py-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12"
          >
            {children}
          </motion.div>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-8 right-12 text-white/60 text-sm font-mono">
          {pageNumber}
        </div>
      </div>
    </div>
  )
}


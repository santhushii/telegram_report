'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'

interface BookReportProps {
  children: React.ReactNode
  toc: Array<{ id: string; title: string; page: number }>
}

export default function BookReport({ children, toc }: BookReportProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isTocOpen, setIsTocOpen] = useState(true)

  const totalPages = Math.max(...toc.map(item => item.page))

  const goToPage = (page: number) => {
    setCurrentPage(page)
    const element = document.getElementById(`page-${page}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Table of Contents Sidebar */}
      <AnimatePresence>
        {isTocOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-80 bg-black text-green-400 p-8 overflow-y-auto fixed left-0 top-0 h-full z-40 border-r border-gray-800"
          >
            <div className="mb-8">
              <button
                onClick={() => setIsTocOpen(false)}
                className="text-green-400 hover:text-green-300 mb-4"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-green-400 mb-2">
                Strategic Diagnosis
              </h2>
              <p className="text-sm text-green-500">
                Telegram-Based Social Games
              </p>
            </div>

            <nav className="space-y-2">
              {toc.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    goToPage(item.page)
                    setIsTocOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 rounded transition-all ${
                    currentPage === item.page
                      ? 'bg-green-500/20 text-green-300 border-l-2 border-green-400'
                      : 'text-green-400 hover:bg-green-500/10 hover:text-green-300'
                  }`}
                >
                  <span className="text-xs text-green-500/60 mr-2">
                    {item.page}
                  </span>
                  {item.title}
                </button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ${isTocOpen ? 'ml-80' : 'ml-0'}`}>
        {/* TOC Toggle Button */}
        {!isTocOpen && (
          <button
            onClick={() => setIsTocOpen(true)}
            className="fixed left-4 top-4 z-50 bg-black/80 text-green-400 p-3 rounded-lg hover:bg-black border border-green-500/30"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Page Navigation */}
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-500/30">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="text-green-400 hover:text-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-green-400 text-sm">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="text-green-400 hover:text-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Content Pages */}
        <div className="bg-gray-900 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  )
}


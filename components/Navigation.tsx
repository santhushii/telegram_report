'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Gamepad2, 
  DollarSign, 
  Users, 
  Server, 
  Network, 
  Brain,
  FileText,
  CheckCircle2
} from 'lucide-react'

const sections = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'gameplay', label: 'Gameplay Design', icon: Gamepad2 },
  { id: 'monetization', label: 'Monetization', icon: DollarSign },
  { id: 'retention', label: 'User Retention', icon: Users },
  { id: 'technical', label: 'Technical Issues', icon: Server },
  { id: 'fragmentation', label: 'Fragmentation', icon: Network },
  { id: 'opportunities', label: 'Missed Opportunities', icon: Brain },
  { id: 'case-studies', label: 'Case Studies', icon: FileText },
  { id: 'conclusion', label: 'Conclusion', icon: CheckCircle2 },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('overview')
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
      
      // Update active section based on scroll position
      const sectionElements = sections.map(s => document.getElementById(s.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`hidden lg:block fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-lg border-r border-gray-200/50 z-40 transition-transform duration-300 shadow-xl`}
    >
      <div className="p-6 sticky top-0 max-h-screen overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
            Contents
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
        </div>
        <ul className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-100 to-accent-100 text-primary-900 shadow-md border-l-4 border-primary-500'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-sm'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-primary-600' : 'text-gray-500'}`} />
                  <span className={isActive ? 'font-semibold' : ''}>{section.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}


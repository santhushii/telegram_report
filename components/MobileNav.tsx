'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

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
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-3 rounded-lg shadow-lg border border-gray-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white">
          <div className="p-6 pt-20">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Contents</h2>
            <ul className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <Icon className="w-4 h-4" />
                      {section.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}


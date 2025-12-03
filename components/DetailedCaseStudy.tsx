'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, DollarSign, Shield, CheckCircle, XCircle } from 'lucide-react'

interface DetailedCaseStudyProps {
  game: {
    name: string
    description: string
    sections: {
      title: string
      content: string | string[]
      icon?: any
      type?: 'highlight' | 'challenge' | 'info'
    }[]
    metrics?: {
      peakUsers?: string
      currentUsers?: string
      tokenDrop?: string
      tokenPrice?: string
      revenue?: string
    }
  }
}

export default function DetailedCaseStudy({ game }: DetailedCaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-card mb-8"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">{game.name}</h3>
        <p className="text-lg text-gray-600">{game.description}</p>
      </div>

      {game.metrics && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {game.metrics.peakUsers && (
            <div className="metric-card">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold">{game.metrics.peakUsers}</div>
              <div className="text-sm text-gray-600">Peak Users</div>
            </div>
          )}
          {game.metrics.currentUsers && (
            <div className="metric-card">
              <TrendingDown className="w-6 h-6 text-red-600 mb-2" />
              <div className="text-2xl font-bold">{game.metrics.currentUsers}</div>
              <div className="text-sm text-gray-600">Current Active Users</div>
            </div>
          )}
          {game.metrics.tokenDrop && (
            <div className="metric-card">
              <DollarSign className="w-6 h-6 text-yellow-600 mb-2" />
              <div className="text-2xl font-bold">{game.metrics.tokenDrop}</div>
              <div className="text-sm text-gray-600">Token Value Drop</div>
            </div>
          )}
          {game.metrics.tokenPrice && (
            <div className="metric-card">
              <DollarSign className="w-6 h-6 text-green-600 mb-2" />
              <div className="text-2xl font-bold">{game.metrics.tokenPrice}</div>
              <div className="text-sm text-gray-600">Token Price</div>
            </div>
          )}
          {game.metrics.revenue && (
            <div className="metric-card">
              <DollarSign className="w-6 h-6 text-purple-600 mb-2" />
              <div className="text-2xl font-bold">{game.metrics.revenue}</div>
              <div className="text-sm text-gray-600">Revenue</div>
            </div>
          )}
        </div>
      )}

      <div className="space-y-6">
        {game.sections.map((section, index) => {
          const Icon = section.icon
          const isArray = Array.isArray(section.content)
          
          return (
            <div key={index} className="border-l-4 pl-6 pb-6 last:pb-0"
              style={{
                borderColor: section.type === 'challenge' ? '#ef4444' : 
                            section.type === 'highlight' ? '#10b981' : '#3b82f6'
              }}
            >
              <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5" />}
                {section.title}
              </h4>
              
              {isArray ? (
                <ul className="space-y-2 text-gray-700">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              )}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}


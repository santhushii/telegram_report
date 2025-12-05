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
      <div className="mb-10">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{game.name}</h3>
        <p className="text-lg md:text-xl text-gray-900 leading-relaxed font-semibold">{game.description}</p>
      </div>

      {game.metrics && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {game.metrics.peakUsers && (
            <div className="metric-card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Users className="w-8 h-8 text-blue-600 mb-3 relative z-10 drop-shadow-sm" />
              <div className="text-3xl font-extrabold text-gray-900 mb-1 relative z-10">{game.metrics.peakUsers}</div>
              <div className="text-sm font-semibold text-gray-600 relative z-10">Peak Users</div>
            </div>
          )}
          {game.metrics.currentUsers && (
            <div className="metric-card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <TrendingDown className="w-8 h-8 text-red-600 mb-3 relative z-10 drop-shadow-sm" />
              <div className="text-3xl font-extrabold text-gray-900 mb-1 relative z-10">{game.metrics.currentUsers}</div>
              <div className="text-sm font-semibold text-gray-600 relative z-10">Current Active Users</div>
            </div>
          )}
          {game.metrics.tokenDrop && (
            <div className="metric-card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <DollarSign className="w-8 h-8 text-yellow-600 mb-3 relative z-10 drop-shadow-sm" />
              <div className="text-3xl font-extrabold text-gray-900 mb-1 relative z-10">{game.metrics.tokenDrop}</div>
              <div className="text-sm font-semibold text-gray-600 relative z-10">Token Value Drop</div>
            </div>
          )}
          {game.metrics.tokenPrice && (
            <div className="metric-card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <DollarSign className="w-8 h-8 text-green-600 mb-3 relative z-10 drop-shadow-sm" />
              <div className="text-3xl font-extrabold text-gray-900 mb-1 relative z-10">{game.metrics.tokenPrice}</div>
              <div className="text-sm font-semibold text-gray-600 relative z-10">Token Price</div>
            </div>
          )}
          {game.metrics.revenue && (
            <div className="metric-card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <DollarSign className="w-8 h-8 text-purple-600 mb-3 relative z-10 drop-shadow-sm" />
              <div className="text-3xl font-extrabold text-gray-900 mb-1 relative z-10">{game.metrics.revenue}</div>
              <div className="text-sm font-semibold text-gray-600 relative z-10">Revenue</div>
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
              <h4 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
                {Icon && <Icon className="w-6 h-6 flex-shrink-0" />}
                {section.title}
              </h4>
              
              {isArray ? (
                <ul className="space-y-3 text-gray-800">
                  {(section.content as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                      <span className="text-primary-600 mt-2 font-bold text-xl flex-shrink-0">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal">{section.content as string}</p>
              )}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}


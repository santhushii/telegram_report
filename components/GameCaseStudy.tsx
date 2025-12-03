'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, DollarSign, Shield } from 'lucide-react'

interface GameCaseStudyProps {
  game: {
    name: string
    description: string
    metrics: {
      peakUsers?: string
      currentUsers?: string
      tokenDrop?: string
      issues: string[]
    }
    highlights: string[]
    challenges: string[]
  }
}

export default function GameCaseStudy({ game }: GameCaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-card"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{game.name}</h3>
          <p className="text-gray-600">{game.description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
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
      </div>

      {game.highlights.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="badge badge-info">Key Highlights</span>
          </h4>
          <ul className="space-y-2">
            {game.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-primary-600 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {game.challenges.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span>Challenges & Issues</span>
          </h4>
          <ul className="space-y-2">
            {game.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-red-600 mt-1">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}


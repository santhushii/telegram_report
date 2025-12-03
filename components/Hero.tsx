'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Users, AlertTriangle, DollarSign } from 'lucide-react'

export default function Hero() {
  const metrics = [
    { label: 'User Drop-off', value: '86%', icon: TrendingDown, color: 'text-red-600' },
    { label: 'Peak Users', value: '300M+', icon: Users, color: 'text-blue-600' },
    { label: 'Retention Rate', value: '5-20%', icon: AlertTriangle, color: 'text-yellow-600' },
    { label: 'Token Collapse', value: '76%', icon: DollarSign, color: 'text-red-600' },
  ]

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Strategic Diagnosis of<br />Telegram-Based Social Games
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light">
              Flaws and Structural Limitations in the Telegram Gaming Ecosystem
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-6 shadow-2xl 
                           hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className={`w-8 h-8 ${metric.color} drop-shadow-lg`} />
                </div>
                <div className="text-4xl font-extrabold mb-2 text-white drop-shadow-lg">{metric.value}</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wide">{metric.label}</div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-blue-50 leading-relaxed">
              An analysis of key flaws and gaps undermining long-term success in Telegram games,
              spanning <span className="font-semibold text-white">gameplay design</span>, <span className="font-semibold text-white">monetization</span>, 
              {' '}<span className="font-semibold text-white">retention</span>, technical infrastructure,
              community dynamics, and missed opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { Download, FileText, Loader2 } from 'lucide-react'
import { jsPDF } from 'jspdf'

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const generateSummary = () => {
    return `
STRATEGIC DIAGNOSIS OF TELEGRAM-BASED SOCIAL GAMES
Flaws and Structural Limitations in the Telegram Gaming Ecosystem

================================================================================
EXECUTIVE SUMMARY
================================================================================

Telegram's recent wave of social crypto games – exemplified by Hamster Kombat, 
Notcoin, MemeFi, and Catizen – has drawn tens of millions of users with simple 
"tap-to-earn" mechanics and token airdrop promises. However, despite explosive 
growth in 2024, cracks in this Telegram gaming ecosystem have become apparent.

KEY METRICS:
- User Drop-off: 86%
- Peak Users: 300M+
- Retention Rate: 5-20% (vs. 20-30% industry standard)
- Token Collapse: 76%

================================================================================
1. GAMEPLAY DESIGN LIMITATIONS
================================================================================

KEY ISSUE: Telegram mini-games to date have largely been simple, grind-heavy 
experiences, which quickly leads to player fatigue.

• Repetitive "Tap-to-Earn" Loops
  Most popular titles rely on extremely basic mechanics with minimal skill or 
  variety. Hamster Kombat's gameplay involved mindless screen tapping – a novelty 
  at first, but one that many found "shallow and repetitive."

• Minimal Content & Progression
  These games often lack varied content, narrative, or meaningful progression 
  beyond incremental number increases. Average session length was only ~2.8 minutes 
  in early 2024.

• One-Dimensional Engagement
  Early Telegram games provided little social or strategic gameplay. Notcoin's 
  founders acknowledged that the first wave "didn't provide that social element" 
  or a "fun time with friends."

• Over-reliance on Novelty
  Many designs bank on meme themes or gimmicks to attract users, but this alone 
  can't carry long-term engagement.

================================================================================
2. MONETIZATION PITFALLS
================================================================================

CRITICAL FLAW: Monetization in these Telegram games is fundamentally flawed, 
raising concerns about economic sustainability.

• Dependence on Token Airdrops
  Rather than proven revenue models, these games lean on giveaway token airdrops 
  to attract and reward players. Once the airdrop is over, there's little 
  incentive for players to stick around.

• Unsustainable "Play-to-Earn" Economies
  The in-game economies often distribute tokens liberally for simple actions, 
  flooding the market. Hamster Kombat's $HMSTR token plunged by 76% from its 
  peak shortly after launch.

• No Effective In-App Purchases
  Most Telegram games do not offer robust in-app purchase options. Even MemeFi, 
  which reported about $5 million in ad revenue, has not demonstrated a sustainable 
  revenue model proportional to its massive user count.

• Pump-and-Dump Dynamics
  Tying monetization to token launches encourages pump-and-dump behavior. Hamster 
  Kombat's September 2024 airdrop was widely viewed as a dud – with 129 million 
  eligible players receiving only trivial rewards ($1–$10 worth for many).

================================================================================
3. USER RETENTION PROBLEMS
================================================================================

RETENTION CRISIS: These Telegram games suffer from severe retention issues, with 
users often cycling in and out in hype-driven waves.

• Abysmal Retention Rates
  Player stickiness is far below industry standards. Telegram game retention 
  rates hovered at just 5–20%, whereas traditional mobile games often achieve 
  ~20–30% retention.

• Hype-Driven Boom and Bust
  The user base trajectory typically shows a massive spike followed by a dramatic 
  fall-off. Hamster Kombat shed roughly 259 million players within three months, 
  dropping from ~300M to just 41M active users (86% collapse).

• "Farm-and-Flee" Behavior
  A significant portion of users treat these games as one-time opportunities 
  rather than communities. Notcoin's team observed that gamers would "soon [go] 
  game-hopping, moving to other games as soon as they 'farmed' what they could."

================================================================================
4. TECHNICAL CONSTRAINTS
================================================================================

• Limited Gameplay Depth
  Telegram mini-apps must remain accessible in a mobile chat context. As a result, 
  many rely on static images, basic animations, and text-based interactions.

• Botting and Cheating
  Widespread botting undermines fairness and economy. Hamster Kombat banned 2.3 
  million accounts and confiscated 6+ billion tokens. MemeFi identified and 
  banned 2.5 million suspected cheater accounts.

• Scalability Issues
  Handling millions of concurrent users presents significant technical challenges 
  that many games struggle with.

================================================================================
5. FRAGMENTATION ISSUES
================================================================================

• No Interoperability
  Progress in one game has no bearing if players try another game – they start 
  from scratch. This fragmentation prevents ecosystem synergy.

• Community Fragmentation
  Players join one game's community, then abandon it for another, resulting in 
  fragmented Discord/Telegram groups with no lasting engagement.

• No Meta-Game Layer
  There's no overarching progression system that rewards players for engaging with 
  multiple games in the ecosystem.

================================================================================
6. MISSED OPPORTUNITIES
================================================================================

• Limited Social Integration
  Despite being on a social platform, games have mostly taken users out of their 
  social context into a separate bot interface with isolated gameplay.

• Lack of Personalization
  Games don't leverage AI or data to personalize experiences or create dynamic 
  content tailored to individual players.

• No Cross-Game Features
  Features like unified wallets, shared achievements, or cross-game challenges 
  are almost nonexistent.

================================================================================
7. CASE STUDIES
================================================================================

HAMSTER KOMBAT
- Peak Users: 300M
- Current Active Users: 41M
- Token Value Drop: 76%
- Token Price: $0.01 → $0.0025

Key Issues:
• Massive user drop-off (86% collapse)
• Shallow gameplay (simple clicker mechanics)
• Token collapse after launch
• Disastrous airdrop execution (129M eligible, many received only $1–$10)
• Anti-cheat backlash (2.3M accounts banned)
• Perception of a cash-grab

NOTCOIN
- Peak Users: 27M
- Token Price: $0.06 → $0.11

Key Points:
• Pioneering tap-to-earn model
• Managed to keep some players engaged initially through social competitiveness
• Current status: Active user count has dwindled as users migrated to newer games

MEMEFI
- Peak Users: 45M
- Current Active Users: 6M DAU
- Revenue: $5M

Key Points:
• Richer gameplay with PvE boss fights, faction raids, and social tasks
• Player investment via "Keys" system
• Dual-token economy ($PWR and $MEMEFI)
• 2.5 million suspected cheater accounts banned
• Reported $5 million in advertising revenue

CATIZEN
- Peak Users: 20M+

Key Points:
• Cat-themed virtual pet game
• Dual token model ($Fish and $CATI)
• Large $CATI airdrop (150 million tokens) drove activity
• More casual design potentially better for retention

================================================================================
CONCLUSION
================================================================================

KEY FAILURES:
• Shallow gameplay leads to fast fatigue
• Overreliance on unsustainable airdrops
• Poor retention (5–20% vs. 20–30% industry standard)
• Technical constraints limit game depth
• Rampant botting and cheating
• Fragmented ecosystem with no synergy
• Missed social and personalization opportunities

PATH FORWARD:
• Design deeper, genuinely fun gameplay
• Implement fair and sustainable monetization
• Prioritize retention metrics over vanity user counts
• Build robust anti-cheat and scalable infrastructure
• Foster interoperability among games
• Infuse social/AI elements to enrich experience
• Learn from what's broken to build better

By learning from what's broken today, the Telegram gaming ecosystem can evolve 
into one that not only attracts millions of users, but actually keeps them 
engaged and delighted – turning fleeting hype into a durable, thriving platform.

================================================================================
Report Generated: ${new Date().toLocaleDateString()}
================================================================================
`
  }

  const downloadAsPDF = async () => {
    setIsDownloading(true)
    try {
      const doc = new jsPDF()
      const summary = generateSummary()
      
      // Set font and add title
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text('Strategic Diagnosis of Telegram-Based Social Games', 105, 20, { align: 'center', maxWidth: 180 })
      
      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text('Flaws and Structural Limitations in the Telegram Gaming Ecosystem', 105, 30, { align: 'center', maxWidth: 180 })
      
      // Add date
      doc.setFontSize(10)
      doc.text(`Generated: ${new Date().toLocaleDateString()}`, 105, 40, { align: 'center' })
      
      // Split text into lines that fit the page
      const lines = doc.splitTextToSize(summary, 180)
      let y = 50
      const pageHeight = doc.internal.pageSize.height
      const margin = 20
      
      lines.forEach((line: string) => {
        if (y > pageHeight - margin) {
          doc.addPage()
          y = margin
        }
        doc.setFontSize(9)
        doc.text(line, margin, y)
        y += 5
      })
      
      doc.save('Telegram-Games-Strategic-Diagnosis-Summary.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const downloadAsText = () => {
    setIsDownloading(true)
    try {
      const summary = generateSummary()
      const blob = new Blob([summary], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Telegram-Games-Strategic-Diagnosis-Summary.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating text file:', error)
      alert('Error generating text file. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <button
        onClick={downloadAsPDF}
        disabled={isDownloading}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
                   font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Generating PDF...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Download PDF Summary</span>
          </>
        )}
      </button>
      
      <button
        onClick={downloadAsText}
        disabled={isDownloading}
        className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-300 text-primary-700 rounded-xl 
                   font-semibold shadow-lg hover:bg-primary-50 hover:border-primary-400 hover:scale-105 transition-all duration-300 
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Generating...</span>
          </>
        ) : (
          <>
            <FileText className="w-5 h-5" />
            <span>Download Text Summary</span>
          </>
        )}
      </button>
    </div>
  )
}


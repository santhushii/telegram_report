'use client'

import BookReport from '@/components/BookReport'
import ReportPage from '@/components/ReportPage'
import { 
  TrendingDown, 
  Users, 
  AlertTriangle, 
  DollarSign,
  Gamepad2,
  Server,
  Network,
  Brain,
  FileText,
  CheckCircle2
} from 'lucide-react'

const tableOfContents = [
  { id: 'overview', title: 'Overview', page: 1 },
  { id: 'gameplay', title: 'Gameplay Design Limitations', page: 2 },
  { id: 'monetization', title: 'Monetization Pitfalls', page: 3 },
  { id: 'retention', title: 'User Retention Problems', page: 4 },
  { id: 'technical', title: 'Technical Constraints', page: 5 },
  { id: 'fragmentation', title: 'Fragmentation Issues', page: 6 },
  { id: 'opportunities', title: 'Missed Opportunities', page: 7 },
  { id: 'case-studies', title: 'Case Studies', page: 8 },
  { id: 'conclusion', title: 'Conclusion', page: 9 },
]

export default function BookReportPage() {
  return (
    <BookReport toc={tableOfContents}>
      {/* Page 1: Overview */}
      <ReportPage id="page-1" pageNumber={1}>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Strategic Diagnosis of Telegram-Based Social Games
          </h1>
          <p className="text-2xl text-gray-600">
            Flaws and Structural Limitations
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
            <TrendingDown className="w-8 h-8 text-red-600 mb-3" />
            <div className="text-3xl font-bold text-red-900 mb-1">86%</div>
            <div className="text-sm text-red-700">User Drop-off</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
            <Users className="w-8 h-8 text-blue-600 mb-3" />
            <div className="text-3xl font-bold text-blue-900 mb-1">300M+</div>
            <div className="text-sm text-blue-700">Peak Users</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mb-3" />
            <div className="text-3xl font-bold text-yellow-900 mb-1">5-20%</div>
            <div className="text-sm text-yellow-700">Retention Rate</div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
            <DollarSign className="w-8 h-8 text-red-600 mb-3" />
            <div className="text-3xl font-bold text-red-900 mb-1">76%</div>
            <div className="text-sm text-red-700">Token Collapse</div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Telegram's recent wave of social crypto games – exemplified by Hamster Kombat, Notcoin, 
            MemeFi, and Catizen – has drawn tens of millions of users with simple "tap-to-earn" 
            mechanics and token airdrop promises. However, despite explosive growth in 2024, cracks 
            in this Telegram gaming ecosystem have become apparent.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This report analyzes the key flaws and gaps undermining these games' long-term success, 
            spanning gameplay design, monetization, retention, technical infrastructure, community 
            dynamics, and missed opportunities. Each issue is supported by data and case studies, 
            providing a clear picture of what's broken or underperforming in current Telegram games.
          </p>
        </div>
      </ReportPage>

      {/* Page 2: Gameplay Design */}
      <ReportPage id="page-2" pageNumber={2}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-primary-600" />
            1. Gameplay Design Limitations and User Engagement Fatigue
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
            <p className="font-semibold text-yellow-900 mb-2">Key Issue</p>
            <p className="text-yellow-800">
              Telegram mini-games to date have largely been simple, grind-heavy experiences, 
              which quickly leads to player fatigue.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Repetitive "Tap-to-Earn" Loops</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Most popular titles rely on extremely basic mechanics (e.g. incessant tapping or clicking) 
            with minimal skill or variety. For example, Hamster Kombat's gameplay involved mindless 
            screen tapping to earn tokens – a novelty at first, but one that many found "shallow and 
            repetitive," causing enthusiasm to fade rapidly. This lack of depth means players exhaust 
            the fun within days, treating it like a chore rather than entertainment.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Minimal Content & Progression</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            These games often lack varied content, narrative, or meaningful progression beyond 
            incremental number increases. Once the initial curiosity wears off, there are few new 
            challenges or modes to keep players engaged. The average play session was only ~2.8 minutes 
            in early 2024, reflecting how brief and perfunctory the interactions were (though some 
            improvement to 6.7 minutes was seen by Q3 2024 as games added more features). Still, 
            compared to traditional games, the content is thin.
          </p>

          <h3 className="text-2xl font-semibold mb-4">One-Dimensional Engagement</h3>
          <p className="text-gray-700 leading-relaxed">
            Early Telegram games provided little social or strategic gameplay to enrich the experience. 
            Notcoin's founders acknowledged that the first wave of Telegram games "didn't provide that 
            social element" or a "fun time with friends," since players were focused purely on farming 
            rewards. With no multiplayer cooperation or competitive depth (beyond rudimentary leaderboards), 
            the gameplay experience fails to sustain interest over time.
          </p>
        </div>
      </ReportPage>

      {/* Page 3: Monetization */}
      <ReportPage id="page-3" pageNumber={3}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-red-600" />
            2. Monetization Pitfalls and Sustainability Issues
          </h2>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-6">
            <p className="font-semibold text-red-900 mb-2">Critical Flaw</p>
            <p className="text-red-800">
              Monetization in these Telegram games is fundamentally flawed, raising concerns about 
              economic sustainability.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Dependence on Token Airdrops</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Rather than proven revenue models, these games lean on giveaway token airdrops to attract 
            and reward players. According to Helika's analysis, airdrops have been the main driver of 
            user growth – for instance, "Catizen's 150 million token airdrop was the reason behind its 
            rising player activity in September." This strategy can spur explosive short-term growth, 
            but it's essentially buying traffic with free tokens. Once the airdrop is over, there's 
            little incentive for players to stick around or spend money, especially if the tokens have 
            no immediate value.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Unsustainable "Play-to-Earn" Economies</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The in-game economies often distribute tokens liberally for simple actions, flooding the market. 
            When millions of users all expect to "earn" value from a game without putting value in, the 
            token's price invariably collapses under sell pressure. For example, Hamster Kombat's $HMSTR 
            token plunged by 76% from its peak shortly after launch. Many Hamster Kombat players who spent 
            time grinding were dismayed to find the token rewards they earned were nearly worthless.
          </p>

          <h3 className="text-2xl font-semibold mb-4">No Effective In-App Purchases</h3>
          <p className="text-gray-700 leading-relaxed">
            Most Telegram games so far do not offer robust in-app purchase options or sinks for player 
            spending. Notcoin, for instance, included "paid" boosts to speed up progress, "but you can 
            only shell out earned Notcoin, and there's no way to buy [currency] within the game." In other 
            words, players cannot spend fiat or major crypto even if they wanted to – the economy is closed, 
            awaiting the token launch for any monetization.
          </p>
        </div>
      </ReportPage>

      {/* Page 4: Retention */}
      <ReportPage id="page-4" pageNumber={4}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-orange-600" />
            3. User Retention and Lifecycle Problems
          </h2>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded mb-6">
            <p className="font-semibold text-orange-900 mb-2">Retention Crisis</p>
            <p className="text-orange-800">
              These Telegram games suffer from severe retention issues, with users often cycling 
              in and out in hype-driven waves.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Abysmal Retention Rates</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Player stickiness is far below industry standards. A Helika report found that by late 2024, 
            Telegram game retention rates hovered at just 5–20%, whereas traditional mobile games often 
            achieve ~20–30% retention. This means the vast majority of users churn shortly after joining. 
            Many sign up for the airdrop or curiosity, use the app briefly, and never return. Such low 
            retention indicates that the games are failing to keep players engaged beyond the initial incentive.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Hype-Driven Boom and Bust</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The user base trajectory for these games typically shows a massive spike followed by a 
            dramatic fall-off. Hamster Kombat is the starkest example: it "boasted a massive 300-million-strong 
            user base back in August [2024]," then shed roughly 259 million players within three months, 
            dropping to just ~41 million active users. This 86% collapse in active user count shows how 
            quickly hype can evaporate.
          </p>

          <h3 className="text-2xl font-semibold mb-4">"Farm-and-Flee" Behavior</h3>
          <p className="text-gray-700 leading-relaxed">
            A significant portion of users treat these games as one-time opportunities rather than 
            communities to invest in. Notcoin's team observed that gamers would "soon [go] game-hopping, 
            moving to other games as soon as they 'farmed' what they could in one project." This indicates 
            zero brand loyalty or long-term attachment – users optimize for earning the maximum airdrop or 
            referral bonus, then migrate.
          </p>
        </div>
      </ReportPage>

      {/* Page 5: Technical */}
      <ReportPage id="page-5" pageNumber={5}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Server className="w-8 h-8 text-blue-600" />
            4. Technical and Infrastructure Constraints
          </h2>

          <h3 className="text-2xl font-semibold mb-4">Scalability vs. Depth Tradeoff</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Telegram games benefit from easy distribution (accessible inside a messaging app) and have 
            indeed scaled to enormous user counts (hundreds of millions of sign-ups). However, to accommodate 
            this scale, developers kept the games extremely lightweight in both client and server logic – 
            essentially tapping buttons and simple database updates. This has limited the complexity and 
            richness of gameplay. Real-time action, 3D graphics, or large persistent worlds are off the 
            table given the constraints of Telegram's platform.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Botting and Cheating Epidemic</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The ease of creating Telegram accounts and the financial incentives at play have led to rampant 
            bot farming and cheating across these games. Developers have had to scramble to implement anti-cheat 
            measures, often after the problems became large. For example, Hamster Kombat rolled out an anti-cheat 
            system post-launch and ended up banning ~2.3 million accounts and confiscating 6 billion tokens for 
            suspected cheating. Similarly, MemeFi identified and banned 2.5 million suspected cheater accounts 
            during its airdrop allocation process.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Platform Limitations (UI/UX)</h3>
          <p className="text-gray-700 leading-relaxed">
            Telegram's interface for games (either chat commands or simple web views within the app) limits 
            the user experience. The games can't leverage full-screen immersive graphics or complex controls; 
            they must remain accessible in a mobile chat context. As a result, many rely on static images, 
            basic animations, and text updates. Hamster Kombat even used AI-generated visuals for its graphics, 
            which some players found "quirky and fun initially" but ultimately "cheap-looking" and low-quality.
          </p>
        </div>
      </ReportPage>

      {/* Page 6: Fragmentation */}
      <ReportPage id="page-6" pageNumber={6}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Network className="w-8 h-8 text-purple-600" />
            5. Fragmentation of Community and Poor Cross-Game Interoperability
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
            <p className="font-semibold text-blue-900 mb-2">Ecosystem Issue</p>
            <p className="text-blue-800">
              The current Telegram gaming landscape is highly fragmented, with siloed games and 
              fleeting communities.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Isolated Game Ecosystems</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Each popular Telegram game to date has its own standalone bot, wallet integration, token, 
            and community channels. There is little to no interoperability between them. A player's 
            achievements or assets in one game (say, MemeFi) have no bearing if they try another game 
            (say, Notcoin) – they start from scratch. This fragmentation fails to leverage the network 
            effect of a shared user base.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Lack of Cross-Game Currency or Items</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Interoperability in terms of economy is also absent. For example, a Notcoin earned in the 
            Notcoin game cannot be used to buy something in Catizen; Hamster Kombat's in-game items (if any) 
            aren't NFTs you could trade or utilize in another game. This is a missed Web3 opportunity – 
            ideally, one might have expected a shared TON wallet to allow cross-game token usage or NFTs 
            that represent game skins usable across multiple Telegram mini-games.
          </p>

          <h3 className="text-2xl font-semibold mb-4">No Meta-Game or Interoperable Progression</h3>
          <p className="text-gray-700 leading-relaxed">
            In successful gaming ecosystems (like traditional consoles or platforms like Roblox), there's 
            often a meta-layer that ties experiences together – achievements, gamer score, cross-title 
            friends lists, etc. Telegram games currently offer nothing of that sort. For instance, a 
            player who mastered Notcoin doesn't carry any status or benefits when joining MemeFi; they 
            have to build reputation and progress anew.
          </p>
        </div>
      </ReportPage>

      {/* Page 7: Opportunities */}
      <ReportPage id="page-7" pageNumber={7}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-600" />
            6. Missed Opportunities in AI, Multiplayer, and Social Play
          </h2>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded mb-6">
            <p className="font-semibold text-purple-900 mb-2">Untapped Potential</p>
            <p className="text-purple-800">
              Considering Telegram is inherently a social platform, current games have underutilized 
              features and technologies that could enhance player engagement.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Limited Social Interaction</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Aside from referral competitions and leaderboards, most games offer scant ways for players to 
            genuinely interact. Real multiplayer gameplay – such as cooperative missions, PvP battles, or 
            group challenges – is almost nonexistent. MemeFi introduced "factions" or clans (meme-themed 
            camps like Pepe or Doge families) and occasional raid events, which is a step toward social play. 
            However, these are typically asynchronous (players contribute individually to a clan goal rather 
            than interacting in real time).
          </p>

          <h3 className="text-2xl font-semibold mb-4">No Personalization or Adaptive Gameplay</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            AI-driven personalization is a major trend in gaming (and apps generally), used to tailor 
            difficulty, content, or recommendations to each user. Telegram games have not employed this 
            in the player experience. Every user faces the same static tasks (tap X times, come back 
            tomorrow for Y). There's an opportunity to use AI (even simple ML) to adjust the game's 
            challenges to a player's behavior – for instance, increasing difficulty if someone is progressing 
            fast, or offering tips/quizzes if a user seems idle.
          </p>

          <h3 className="text-2xl font-semibold mb-4">No "Real" Games Yet</h3>
          <p className="text-gray-700 leading-relaxed">
            Tellingly, even insiders acknowledge the lack of substantial gameplay. One Notcoin co-founder 
            remarked that "Telegram has no 'real games' yet," with optimism that they will come in the future. 
            By "real," he likely means games that stand on their own as fun, not just token faucets. The 
            current products are more like gamified fintech apps. The focus on Web3 elements (tokens, DeFi, 
            NFTs) has overshadowed traditional game design principles like balanced challenge, storytelling, 
            and player skill mastery.
          </p>
        </div>
      </ReportPage>

      {/* Page 8: Case Studies */}
      <ReportPage id="page-8" pageNumber={8}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Case Studies: Specific Game Analyses</h2>
          <p className="text-lg text-gray-700 mb-8">
            Below we diagnose each of the highlighted games – Hamster Kombat, Notcoin, MemeFi, and Catizen – 
            to illustrate how the above issues manifest in practice.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Hamster Kombat</h3>
              <p className="text-gray-700 mb-4">
                Launched in March 2024, Hamster Kombat went viral with over 300 million sign-ups by August 2024, 
                then lost 86% of its active users by November 2024.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Token ($HMSTR) collapsed 76% from peak shortly after launch</li>
                <li>Airdrop disaster: 129M eligible players received only $1–$10 worth of tokens</li>
                <li>2.3 million accounts banned for cheating, 6 billion tokens confiscated</li>
                <li>Reputation as a "pump and dump" or cash-grab project</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Notcoin</h3>
              <p className="text-gray-700 mb-4">
                Pioneered the "cookie clicker" style game on Telegram, popularizing tap-to-earn mechanics 
                and onboarding ~27 million players.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Successfully onboarded many first-timers to create TON wallets</li>
                <li>Token launch handled more smoothly than Hamster Kombat</li>
                <li>Team acknowledged "tap-to-earn games are probably dead because they're not sustainable"</li>
                <li>Active user count dwindled as user base migrated to newer games</li>
              </ul>
            </div>
          </div>
        </div>
      </ReportPage>

      {/* Page 9: Conclusion */}
      <ReportPage id="page-9" pageNumber={9}>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
            Conclusion
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The current generation of Telegram-based social games has proven the ability to onboard massive 
            user numbers quickly, but it has simultaneously exposed critical flaws that undermine long-term 
            success.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <h3 className="font-bold text-red-900 mb-3">Key Failures</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Shallow gameplay leads to fast fatigue</li>
                <li>• Overreliance on unsustainable airdrops</li>
                <li>• Poor retention (5–20% vs. 20–30% industry standard)</li>
                <li>• Technical constraints limit game depth</li>
                <li>• Rampant botting and cheating</li>
                <li>• Fragmented ecosystem with no synergy</li>
                <li>• Missed social and personalization opportunities</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <h3 className="font-bold text-green-900 mb-3">Path Forward</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Design deeper, genuinely fun gameplay</li>
                <li>• Implement fair and sustainable monetization</li>
                <li>• Prioritize retention metrics over vanity user counts</li>
                <li>• Build robust anti-cheat and scalable infrastructure</li>
                <li>• Foster interoperability among games</li>
                <li>• Infuse social/AI elements to enrich experience</li>
                <li>• Learn from what's broken to build better</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-100 border-l-4 border-primary-600 p-6 rounded">
            <p className="text-primary-900 font-semibold text-lg leading-relaxed">
              By learning from what's broken today, the Telegram gaming ecosystem can evolve into one that not 
              only attracts millions of users, but actually keeps them engaged and delighted – turning fleeting 
              hype into a durable, thriving platform.
            </p>
          </div>
        </div>
      </ReportPage>
    </BookReport>
  )
}


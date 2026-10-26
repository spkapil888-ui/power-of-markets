import { Course, BlogPost, Webinar, TeamMember, JobOpening, MembershipPlan } from '../types';

export const FOUNDER_DATA = {
  name: 'Abhishek Upadhyay',
  role: 'Founder & CEO',
  title: 'Founder & Head Educator, Power of Markets',
  bio: 'Abhishek Upadhyay is a quantitative derivatives specialist and financial market educator dedicated to dismantling retail trading misconceptions through first-principles education. Having trained thousands of active market participants, Abhishek focuses on systematic risk management, mathematical option pricing, and disciplined trade execution rather than speculative tips.',
  credentials: [
    'Over a decade of specialized Indian derivatives & equity market experience',
    'Architect of the POM 360° Option Greeks Mathematical Framework',
    'Mentor to over 15,000+ disciplined market learners across India',
    'Regular speaker and educator on systematic risk hedging and volatility analytics'
  ],
  philosophy: 'Financial markets do not reward luck; they reward structural edge and relentless risk discipline. The moment a trader transitions from predicting direction to managing mathematical probabilities, trading changes from gambling into an institutional craft.',
  mediaQuotes: [
    {
      source: 'Financial Market Education Forum',
      quote: 'Retail option buyers fail not because they lack passion, but because they treat Theta decay as an unexpected tax rather than a known mathematical constant.'
    }
  ]
};

export const COURSES_DATA: Course[] = [
  {
    id: 'option-greeks',
    slug: 'option-greeks-masterclass',
    title: 'Option Greeks: The Mathematical Edge',
    subtitle: 'Master Delta, Gamma, Theta, Vega, and Rho for systematic options trading and non-directional execution.',
    category: 'Derivatives',
    level: 'Intermediate',
    language: 'Hinglish',
    priceINR: 4999,
    originalPriceINR: 7999,
    durationHours: 18,
    lessonsCount: 36,
    instructor: {
      name: 'Abhishek Upadhyay',
      role: 'Founder & CEO, Power of Markets'
    },
    summary: 'A deep-dive curriculum into quantitative options pricing. Understand how market makers price risk, navigate implied volatility crush, manage gamma risk on weekly expiries, and craft delta-neutral adjustment strategies.',
    description: 'Most options traders enter positions based on superficial stock charts while ignoring option pricing dynamics. In this masterclass, Abhishek Upadhyay breaks down the Black-Scholes pricing model into actionable trading frameworks. You will understand how time decay (Theta) accelerates non-linearly, how Gamma can cause rapid drawdown spikes near expiry, and how Volatility (Vega) dictates strike selection across changing market regimes.',
    whatYouWillLearn: [
      'First-principles intuition of Delta, Gamma, Theta, Vega, and Rho',
      'How to read implied volatility rank (IVR) and IV percentile (IVP)',
      'Designing Delta-neutral spreads: Iron Condors, Strangles, and Butterflies',
      'Intraday & positional adjustment mechanics when strikes are breached',
      'Managing the Gamma trap in Nifty and Bank Nifty 0DTE/weekly expiries',
      'Building automated risk matrices in Excel/Google Sheets'
    ],
    highlights: [
      '36 HD Video Modules with real execution breakdowns',
      'Downloadable Option Greeks Calculation Spreadsheets',
      'Weekly live market Q&A sessions with Abhishek Upadhyay',
      'Access to POM Private Traders Knowledge Community',
      'SEBI-compliant educational case studies without tips'
    ],
    requirements: [
      'Basic understanding of Indian equity indices (NIFTY/BANKNIFTY)',
      'Familiarity with Call and Put options terminology',
      'A spreadsheet tool (Excel or Google Sheets) for risk modeling'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Foundations of Option Pricing & Black-Scholes',
        moduleDuration: '3 Hours',
        lessons: [
          { title: 'The Anatomy of an Option Premium: Intrinsic vs Extrinsic Value', duration: '28m', type: 'video', freePreview: true },
          { title: 'Deconstructing the Black-Scholes Equation Without Complex Math', duration: '34m', type: 'video' },
          { title: 'Option Chain Architecture: OI, Volume, and Strike Interval Spreads', duration: '40m', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Delta & Gamma Dynamics',
        moduleDuration: '4 Hours',
        lessons: [
          { title: 'Delta as Probability and Directional Hedge Ratio', duration: '35m', type: 'video', freePreview: true },
          { title: 'Gamma Risk: Why 0DTE Options Expire With Violent Velocity', duration: '45m', type: 'video' },
          { title: 'Delta-Gamma Neutral Spreads and Dynamic Rebalancing', duration: '42m', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Theta Decay & Time Non-Linearity',
        moduleDuration: '3.5 Hours',
        lessons: [
          { title: 'The Theta Decay Curve: When to Sell and When to Buy', duration: '32m', type: 'video' },
          { title: 'Weekend vs Overnight Theta: Mechanics of Decay Capture', duration: '38m', type: 'video' },
          { title: 'Practical Theta Harvesting via Calendar & Diagonal Spreads', duration: '44m', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Vega, Implied Volatility & Regime Changes',
        moduleDuration: '4 Hours',
        lessons: [
          { title: 'Historical Volatility vs Implied Volatility: Identifying Mispricings', duration: '36m', type: 'video' },
          { title: 'IV Crush Around Earnings, Budgets, and RBI Policy Decisions', duration: '48m', type: 'video' },
          { title: 'Vega-Weighted Position Sizing & Portfolio Hedging', duration: '40m', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 5: Real-World Adjustments & Risk Management',
        moduleDuration: '3.5 Hours',
        lessons: [
          { title: 'Roll-Up, Roll-Down, and Inversion Techniques When Tested', duration: '45m', type: 'video' },
          { title: 'Position Sizing & Capital Allocation to Prevent Ruin', duration: '35m', type: 'video' },
          { title: 'Final Certification Capstone & Practical Risk Audit', duration: '20m', type: 'quiz' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Is this course suitable for complete stock market beginners?',
        answer: 'This course is tailored for intermediate learners who already know what calls and puts are. If you are entirely new, we recommend beginning with our Foundations of Indian Stock Markets course first.'
      },
      {
        question: 'Do you give stock tips or live trading recommendations?',
        answer: 'No. Power of Markets is strictly a financial education institute. We teach mathematical principles, risk architecture, and analytical models. We never provide buy/sell tips or advisory services.'
      },
      {
        question: 'How long do I retain access to the course content?',
        answer: 'You receive 12 months of unlimited on-demand video access, along with all downloadable spreadsheets, templates, and lifetime updates to the curriculum.'
      }
    ],
    isFeatured: true,
    portalUrl: 'https://powerofmarket.com/courses/option-greeks'
  },
  {
    id: 'market-structure-price-action',
    slug: 'market-structure-price-action',
    title: 'Price Action & Institutional Market Structure',
    subtitle: 'Decode liquidity pools, order blocks, break of structure, and institutional supply-demand zones.',
    category: 'Trading',
    level: 'Beginner',
    language: 'Hindi',
    priceINR: 3999,
    originalPriceINR: 5999,
    durationHours: 15,
    lessonsCount: 28,
    instructor: {
      name: 'Abhishek Upadhyay',
      role: 'Founder & CEO, Power of Markets'
    },
    summary: 'Learn to read naked price charts without lagging indicators. Understand where institutional algorithms accumulate orders, identify fair value gaps, and execute with disciplined stop-loss placement.',
    description: 'Technical analysis is often degraded by retail clutter: overlapping MACD, RSI, and Bollinger bands that contradict one another. This course strips away indicator noise to focus on raw price action: higher-timeframe trends, structural shifts, liquidity traps, and confirmation candles.',
    whatYouWillLearn: [
      'Multi-timeframe market structure mapping (Daily / Hourly / 5-min)',
      'Identifying Liquidity Sweeps vs True Trend Continuations',
      'Fair Value Gaps (FVG) and Order Block mitigation strategies',
      'Systematic Risk-to-Reward calculation and trade journaling'
    ],
    highlights: [
      '28 Step-by-step video case studies',
      'Live chart walkthroughs on Nifty & High-Volume F&O Stocks',
      'Downloadable Trade Journal Spreadsheet with risk metrics'
    ],
    requirements: [
      'Access to a free charting tool such as TradingView',
      'A willingness to learn chart structure without indicator reliance'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Anatomy of Market Structure',
        moduleDuration: '3 Hours',
        lessons: [
          { title: 'Higher Highs, Lower Lows and Structural Invalidation', duration: '30m', type: 'video', freePreview: true },
          { title: 'Break of Structure (BOS) vs Change of Character (CHoCH)', duration: '40m', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Institutional Liquidity & Imbalances',
        moduleDuration: '4 Hours',
        lessons: [
          { title: 'Buy-Side & Sell-Side Liquidity: Where Retail Traps Form', duration: '35m', type: 'video' },
          { title: 'Fair Value Gaps (FVG) and Immediate Rebalance Fill', duration: '45m', type: 'video' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Does this require costly paid charting tools?',
        answer: 'No. Everything taught can be applied on free charting platforms like TradingView or your broker’s free web platform.'
      }
    ],
    isFeatured: true,
    portalUrl: 'https://powerofmarket.com/courses'
  },
  {
    id: 'systematic-investing-wealth',
    slug: 'systematic-investing-wealth',
    title: 'Long-Term Investing & Fundamental Valuation',
    subtitle: 'Build robust multi-asset portfolios using balance sheet analysis, cash flow evaluation, and margin of safety.',
    category: 'Investing',
    level: 'Beginner',
    language: 'English',
    priceINR: 4499,
    originalPriceINR: 6999,
    durationHours: 14,
    lessonsCount: 24,
    instructor: {
      name: 'Abhishek Upadhyay',
      role: 'Founder & CEO, Power of Markets'
    },
    summary: 'A structured curriculum on building long-term generational wealth. Decode corporate annual reports, evaluate ROE/ROCE, understand moat longevity, and structure asset allocation.',
    description: 'Investing is not buying lottery tickets; it is acquiring fractional ownership in durable, cash-generative businesses. Learn how to screen companies with clean governance, evaluate debt cycles, and allocate capital systematically.',
    whatYouWillLearn: [
      'Reading Profit & Loss, Balance Sheets, and Cash Flow Statements',
      'Understanding ROCE, ROE, Free Cash Flow, and Working Capital Cycles',
      'Economic Moats: Pricing power, switching costs, and network effects',
      'Asset Allocation models across Indian Equities, Gold, and Fixed Income'
    ],
    highlights: [
      '24 Comprehensive Modules with real Indian balance sheet examples',
      'Pre-built Financial Model & Valuation DCF Template',
      'Checklist for forensic accounting and red flag detection'
    ],
    requirements: [
      'Basic arithmetic numeracy',
      'Curiosity about how businesses generate revenue and cash'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: The Foundations of Value Creation',
        moduleDuration: '3 Hours',
        lessons: [
          { title: 'The Difference Between Price, Value, and Market Sentiment', duration: '30m', type: 'video', freePreview: true },
          { title: 'Deconstructing the Annual Report: Reading Between the Lines', duration: '45m', type: 'video' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Do you recommend specific mutual funds or stocks?',
        answer: 'No. We provide analytical models so you can independently evaluate any company or asset with confidence.'
      }
    ],
    isFeatured: true,
    portalUrl: 'https://powerofmarket.com/courses'
  },
  {
    id: 'derivatives-hedging-risk',
    slug: 'derivatives-hedging-risk-management',
    title: 'Futures & Options Risk Hedging for Portfolios',
    subtitle: 'Institutional hedging frameworks: protect your equity equity drawdowns using index futures and puts.',
    category: 'Derivatives',
    level: 'Advanced',
    language: 'Hinglish',
    priceINR: 5999,
    originalPriceINR: 8999,
    durationHours: 20,
    lessonsCount: 32,
    instructor: {
      name: 'Abhishek Upadhyay',
      role: 'Founder & CEO, Power of Markets'
    },
    summary: 'How professional asset managers protect equity capital during market corrections. Learn Beta-weighted hedging, synthetic positions, and collar strategies.',
    description: 'When market volatility spikes, uninformed investors panic and sell at the lows. In this advanced masterclass, learn institutional hedging strategies used by funds to immunize portfolios against systemic shocks.',
    whatYouWillLearn: [
      'Calculating Portfolio Beta and Determining Required Hedge Ratios',
      'Long-dated protective Put Collars and cost-neutral structures',
      'Short Futures vs Long Puts: Capital efficiency comparison',
      'Stress-testing equity holdings under 10%, 20%, and 30% corrections'
    ],
    highlights: [
      'Institutional Hedging Calculator',
      'Stress-testing simulator model in Excel',
      'Direct case studies from past Indian market correction regimes'
    ],
    requirements: [
      'Must have completed Option Greeks Masterclass or equivalent',
      'Understanding of futures basis, roll-over, and index weightages'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Portfolio Risk Metrics & Beta Weighting',
        moduleDuration: '4 Hours',
        lessons: [
          { title: 'Measuring Systemic vs Unsystemic Portfolio Risk', duration: '35m', type: 'video', freePreview: true },
          { title: 'Calculating Portfolio Beta Against NIFTY 50 Benchmark', duration: '40m', type: 'video' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Is this meant for small retail portfolios?',
        answer: 'Hedging principles apply to any size portfolio, though derivatives hedging is most capital efficient for portfolios above ₹5 Lakhs.'
      }
    ],
    isFeatured: false,
    portalUrl: 'https://powerofmarket.com/courses'
  }
];

export const WEBINARS_DATA: Webinar[] = [
  {
    id: 'webinar-volatility-skew',
    title: 'Mastering Implied Volatility Skew & Weekly Expiries',
    instructor: 'Abhishek Upadhyay',
    date: 'Saturday, 15 Nov 2026',
    timeIST: '11:00 AM – 1:00 PM IST',
    language: 'Hinglish',
    status: 'upcoming',
    description: 'Learn why Out-of-the-Money Puts trade at higher implied volatilities than Calls (Volatility Smile & Skew), and how options traders can exploit skewed spreads safely during weekly expiries.',
    learningOutcomes: [
      'Understanding volatility smile, smirk, and institutional demand curves',
      'How market makers price catastrophic downside tail risk',
      'Structuring Broken Wing Butterflies and Ratio Spreads',
      'Live Q&A on managing rapid Delta shifts'
    ],
    seatsLeft: 34
  },
  {
    id: 'webinar-0dte-risk',
    title: 'The Reality of 0DTE (Zero Days to Expiry) Trading in India',
    instructor: 'Abhishek Upadhyay',
    date: 'Wednesday, 28 Oct 2026',
    timeIST: '7:30 PM – 9:00 PM IST',
    language: 'Hindi & English',
    status: 'upcoming',
    description: 'With daily expiries across indices, retail traders are burning capital on extreme Gamma risk. This session breaks down the mathematical reality, expected value, and slippage impact of 0DTE trading.',
    learningOutcomes: [
      'Why Gamma risk multiplies non-linearly in the final 90 minutes of trading',
      'Expected Value (EV) calculation: Why buying lottery options leads to inevitable drawdown',
      'Realistic position sizing and automated hard stop rules',
      'Interactive risk modeling spreadsheet walkthrough'
    ],
    seatsLeft: 18
  },
  {
    id: 'webinar-past-regime-shifts',
    title: 'Navigating Volatility Regimes: India VIX Dynamics',
    instructor: 'Abhishek Upadhyay',
    date: 'Sunday, 12 Sep 2026',
    timeIST: '11:00 AM – 12:30 PM IST',
    language: 'Hinglish',
    status: 'past',
    description: 'Recorded live masterclass on how changing India VIX environments impact strategy selection between straddles, iron condors, and trend-following systems.',
    learningOutcomes: [
      'Historical VIX percentiles and option pricing compression',
      'Strategy matrix based on VIX < 12, 12–16, and > 18 regimes',
      'Review of trade adjustments during unexpected geopolitical swings'
    ],
    recordingUrl: 'https://powerofmarket.com/webinars/archive'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'delta-gamma-trap-zero-dte',
    slug: 'delta-gamma-trap-zero-dte',
    title: 'The Delta-Gamma Trap: Why Weekly Expiry Options Wipe Out Retail Capital',
    excerpt: 'Understanding the mathematical curvature of Gamma as time approaches zero. Why a ₹10 option expiring today is the most dangerous instrument on Dalal Street.',
    category: 'Derivatives',
    author: {
      name: 'Abhishek Upadhyay',
      role: 'Founder & CEO, Power of Markets'
    },
    publishedDate: 'October 14, 2026',
    readTimeMinutes: 7,
    keyTakeaways: [
      'Gamma measures the rate of change of Delta per unit move in the underlying asset.',
      'As expiration nears, At-the-Money Gamma surges exponentially toward infinity.',
      'A minor index wiggle can turn a 0.50 Delta position into an extreme 0.95 or 0.05 Delta position instantly.',
      'Systematic risk control requires strict capital allocation limits (<1.5% of total capital per weekly expiry play).'
    ],
    content: [
      'Over the past three years, the Indian financial market landscape has transformed dramatically. With index expiries now spread across the trading week, retail participation in short-dated options has surged. Yet exchange data consistently highlights that over 90% of active retail derivative participants experience net capital erosion.',
      'The primary reason is not bad luck; it is a fundamental misunderstanding of the relationship between Delta and Gamma.',
      'Delta is linear; it indicates how much your option premium moves for every 1-point move in the underlying Nifty index. If Nifty trades at 25,000, an ATM 25,000 Call has a Delta of approximately 0.50. A 10-point upward move increases the option value by roughly ₹5.',
      'Gamma, however, is second-order acceleration. It tells you how quickly Delta itself changes. On a 30-day option, Gamma is soft and distributed gently across a wide bell curve. But on expiration afternoon, the bell curve sharpens into a needle. At-The-Money Gamma spikes to extreme levels.',
      'What this means in practice: when you hold a short option position near the money with 45 minutes until market close, a modest 20-point index spurt does not merely cause a 10-point loss; Gamma immediately forces your Delta from 0.50 to 0.90, magnifying subsequent losses exponentially. By the time you attempt to exit, market spread slippage and rapid acceleration create a catastrophic drawdown.',
      'To build longevity in derivatives, treat Option Greeks as the immutable laws of physics. Respect the math, size defensively, and never take unhedged gamma risk without predetermined stop-loss triggers.'
    ],
    tags: ['Option Greeks', 'Gamma Risk', 'Derivatives Education', 'Risk Management']
  },
  {
    id: 'debunking-90-percent-win-rate-myths',
    slug: 'debunking-90-percent-win-rate-myths',
    title: 'The 90% Win-Rate Mirage: Why High Accuracy Destroys Accounts Without Expectancy',
    excerpt: 'Why mathematical expectancy and asymmetric risk-reward matter infinitely more than vanity win rates sold by social media influencers.',
    category: 'Risk Management',
    author: {
      name: 'Abhishek Upadhyay',
      role: 'Founder & CEO, Power of Markets'
    },
    publishedDate: 'September 28, 2026',
    readTimeMinutes: 6,
    keyTakeaways: [
      'A 90% win rate with a negative Risk-Reward ratio (e.g. risking ₹9 to make ₹1) is an account extinction trap.',
      'A trader winning only 38% of trades with a 1:3 Risk-to-Reward ratio generates substantial positive expectancy.',
      'Focusing on maximum drawdown and expected value per trade is the institutional hallmark of a real trader.'
    ],
    content: [
      'Search social media for trading content, and you will inevitably encounter bold headlines claiming 90% or 95% winning accuracy. For novice market participants, this sounds like the ultimate holy grail.',
      'In professional quantitative finance, an isolated win rate is meaningless without its corresponding payout ratio. Consider the classic naked option selling strategy: you collect ₹10 with a 92% historical probability of keeping the premium. In 92 out of 100 trades, you win ₹10 (Total: +₹920). However, on the 8 trades where a black swan gap-down occurs, you lose ₹250 each (Total: -₹2,000). Despite a stellar 92% win rate, your net balance is negative ₹1,080.',
      'The formula for mathematical expectancy is simple: Expectancy = (Win Probability × Average Win) - (Loss Probability × Average Loss). If this value is not positive after commissions and slippage, no system will survive the test of time.',
      'At Power of Markets, we emphasize statistical expectancy above all else. When you understand your system’s distribution of returns, you cease feeling emotional anxiety over individual losing trades.'
    ],
    tags: ['Trading Psychology', 'Expectancy', 'Risk Management', 'Mathematical Edge']
  },
  {
    id: 'reading-market-structure-without-indicators',
    slug: 'reading-market-structure-without-indicators',
    title: 'Deconstructing Market Structure: Institutional Liquidity Pools Explained',
    excerpt: 'How institutional market makers view support and resistance: liquidity pools, stop-loss clusters, and true break-of-structure confirmation.',
    category: 'Market Structure',
    author: {
      name: 'Abhishek Upadhyay',
      role: 'Founder & CEO, Power of Markets'
    },
    publishedDate: 'August 19, 2026',
    readTimeMinutes: 8,
    keyTakeaways: [
      'Retail support and resistance levels are prime liquidity pools for institutional algorithmic orders.',
      'A true Break of Structure requires a decisive candle body close beyond the swing pivot.',
      'Wicks beyond swing highs are frequently liquidity sweeps designed to absorb retail breakout buyers before reversal.'
    ],
    content: [
      'Standard textbook technical analysis teaches traders that when price touches a horizontal support line for the third time, it forms a "strong floor." In reality, institutional participants and algorithmic market makers view that exact level as an ocean of clustered stop-loss orders.',
      'Large institutional orders require liquidity to fill without moving the market against themselves. Where does that liquidity exist? Exactly above swing highs where retail breakout traders place buy stops, and below swing lows where traders place protective sell stops.',
      'When you see price pierce a key swing low with a rapid wick before violently reversing back into the trading range, you are not witnessing an indicator failure; you are witnessing an institutional liquidity sweep. Understanding this distinction transforms how you time entries.'
    ],
    tags: ['Price Action', 'Liquidity Pools', 'Market Structure', 'Dalal Street']
  }
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 'abhishek-upadhyay',
    name: 'Abhishek Upadhyay',
    role: 'Founder & CEO',
    bio: 'Quantitative derivatives specialist and founder of Power of Markets. Over 10 years of Indian equity derivatives research, with deep expertise in Option Greeks mathematical modeling and risk management.',
    specialization: 'Option Greeks, Quantitative Risk Hedging, Market Regimes',
    experienceYears: 11,
    isFounder: true
  },
  {
    id: 'rajesh-verma',
    name: 'Rajesh Verma',
    role: 'Senior Market Research Analyst',
    bio: 'Specialist in Nifty & Bank Nifty market microstructure, order book dynamics, and institutional liquidity flow analysis.',
    specialization: 'Market Microstructure & Order Flow',
    experienceYears: 8
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Head of Student Learning & Curriculum',
    bio: 'Passionate about instructional design and systematic financial literacy. Manages learner assessments, mentoring programs, and syllabus sequencing.',
    specialization: 'Instructional Design & Pedagogical Architecture',
    experienceYears: 7
  },
  {
    id: 'vikram-aditya',
    name: 'Vikram Aditya',
    role: 'Quantitative Modeling & Risk Associate',
    bio: 'Focuses on Python-based volatility modeling, options backtesting, and automated risk spreadsheet engineering for students.',
    specialization: 'Volatility Backtesting & Python Modeling',
    experienceYears: 5
  }
];

export const JOB_OPENINGS_DATA: JobOpening[] = [
  {
    id: 'curriculum-researcher',
    title: 'Financial Curriculum Specialist (Derivatives & Equities)',
    department: 'Education & Content',
    location: 'Noida / Remote (India)',
    type: 'Full-time',
    experience: '3–5 Years',
    description: 'We are seeking an articulate financial market researcher to help architect deep, math-grounded educational courses on Indian stock derivatives and investing.',
    responsibilities: [
      'Design modular lesson outlines, practical spreadsheets, and case studies for options trading',
      'Fact-check market data, options formulas, and regulatory compliance guidelines',
      'Collaborate directly with Abhishek Upadhyay on live masterclass course materials',
      'Conduct learner feedback evaluations to iteratively enhance learning outcomes'
    ],
    requirements: [
      'NISM Series VIII (Equity Derivatives) certification or CFA Level 1+ preferred',
      'Strong written and spoken communication in English and Hindi',
      'Deep fluency with Indian market trading platforms and options chains'
    ]
  },
  {
    id: 'community-mentor',
    title: 'Market Mentor & Learner Success Associate',
    department: 'Student Success',
    location: 'Remote (India)',
    type: 'Full-time',
    experience: '2–4 Years',
    description: 'Support enrolled students in solving conceptual queries regarding option Greeks, trade adjustments, and charting software.',
    responsibilities: [
      'Moderate the POM student community forum and address syllabus doubts',
      'Coordinate weekly live Q&A sessions with the core faculty',
      'Facilitate mock trade journaling reviews and spreadsheet debugging'
    ],
    requirements: [
      'Clear grasp of Delta, Gamma, Theta, and basic spread strategies',
      'Empathy, patience, and strong instructional mentoring capability',
      'Strict adherence to our no-tips, education-only policy'
    ]
  }
];

export const MEMBERSHIP_PLANS_DATA: MembershipPlan[] = [
  {
    id: 'plan-explorer',
    name: 'Starter Knowledge',
    tier: 'starter',
    tagline: 'Ideal for beginners establishing core market terminology and risk awareness.',
    pricePerMonthINR: 0,
    billingPeriod: 'Forever Free',
    features: [
      'Access to Free Foundation Video Modules',
      'Weekly Market Education Newsletter',
      'Public Webinar Access (Monthly)',
      'Basic Trade Journal Spreadsheet Template',
      'POM Community Discord Public Channels'
    ],
    notIncluded: [
      'Option Greeks Advanced Modules',
      'Interactive Greek Calculator Tool',
      'Weekly Live Market Q&A with Abhishek',
      'Direct Faculty Support & Doubt Clearing'
    ]
  },
  {
    id: 'plan-pro-trader',
    name: 'POM Pro Trader',
    tier: 'pro',
    tagline: 'Comprehensive continuous education for active derivatives and equity participants.',
    pricePerMonthINR: 1999,
    billingPeriod: 'Billed Quarterly (₹5,997)',
    isPopular: true,
    features: [
      'Full Access to Option Greeks & Price Action Curriculums',
      'Exclusive POM Quantitative Risk & Greeks Calculator Spreadsheets',
      'Weekly Live Market Regimes Masterclass with Abhishek Upadhyay',
      'Private Mentorship Discord with Verified Instructors',
      'Curated Case Studies & Post-Market Analysis Breakdowns',
      'Course Completion Certificate upon Passing Assessment'
    ]
  },
  {
    id: 'plan-institutional',
    name: 'Institutional Circle',
    tier: 'institutional',
    tagline: 'Intensive 1-on-1 portfolio risk architecture and high-conviction educational cohort.',
    pricePerMonthINR: 4999,
    billingPeriod: 'Billed Annually',
    features: [
      'All POM Pro Trader Membership Benefits',
      'Quarterly 1-on-1 Portfolio Risk Audit Session with Abhishek',
      'Custom Python & Excel Backtesting Models for Option Strategies',
      'Priority Doubt Clearing with 4-Hour Response SLA',
      'In-person annual POM Financial Symposium invitation',
      'Institutional Hedging and Beta-neutral Workshop Series'
    ]
  }
];

export const FAQS_DATA = [
  {
    category: 'General',
    question: 'What is Power of Markets (POM)?',
    answer: 'Power of Markets is an institutional-grade financial education initiative founded by Abhishek Upadhyay. We provide structured learning across stock markets, derivatives, price action, and long-term investing, replacing gambling habits with mathematical discipline.'
  },
  {
    category: 'General',
    question: 'Are you registered with SEBI as an investment advisor or research analyst?',
    answer: 'No. Power of Markets is strictly an educational platform. We do not provide financial advisory services, stock tips, buy/sell calls, or guaranteed return schemes. All curriculum materials, webinars, and case studies are created strictly for educational awareness.'
  },
  {
    category: 'Courses',
    question: 'How do I access the courses after purchasing?',
    answer: 'Upon enrollment, you gain immediate access to our Student Dashboard. Your login credentials allow instant high-definition streaming on desktop, tablet, and mobile with all downloadable spreadsheets.'
  },
  {
    category: 'Courses',
    question: 'What makes the Option Greeks Masterclass unique?',
    answer: 'Unlike generic courses that simply define terms, Abhishek Upadhyay breaks down the mathematical second-order derivatives (Gamma, Vega, Theta decay curves) and demonstrates how to manage risk dynamically when market strikes are breached.'
  },
  {
    category: 'Support',
    question: 'What happens if I encounter doubts during my learning journey?',
    answer: 'Enrolled students receive dedicated doubt-clearing support via our structured community portal and weekly live interactive Q&A sessions hosted directly by Abhishek Upadhyay.'
  },
  {
    category: 'Refunds',
    question: 'What is your refund policy?',
    answer: 'Due to the immediate digital delivery of proprietary intellectual property, video lectures, and downloadable financial spreadsheets, course fees are non-refundable once content has been accessed. Please review our free previews before enrolling.'
  }
];

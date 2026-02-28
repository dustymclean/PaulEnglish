import React, { useState, useMemo } from 'react';
import { 
  Lightbulb, Calendar, MapPin, Sword, Footprints, 
  Activity, PartyPopper, Headset, BookOpen, Brain, 
  Users, HeartHandshake, Snowflake, Plane, Briefcase, 
  Moon, Shield, ShoppingCart, Gamepad2, GraduationCap, 
  Globe, Home, Heart, UserCircle, Linkedin, 
  Newspaper, Store, Target, Sparkles, PieChart, FileText, Mic,
  ArrowLeft, ExternalLink
} from 'lucide-react';

// The 30 distinct entities mapped into 4 distinct verticals, now with strict chronological timeline data
const entities = [
  // Vertical 1: Active Tech & Venture Studio (8 items) -> Left Stem of 'P'
  { 
    name: 'Xiangqi.com', vertical: 'Active Tech & Venture Studio', type: 'Chinese Chess', Icon: Sword, gradient: 'from-red-800 to-black',
    url: 'https://xiangqi.com', year: '1997 / 2020', era: 'Early Hustle', sortYear: 1997,
    description: 'The premier online platform for playing Chinese Chess (Xiangqi). Originally launched by Paul in 1997 during the early days of the internet, he re-acquired and fully relaunched the modernized platform in 2020. It now hosts thousands of games daily for players worldwide.'
  },
  { 
    name: 'GetHuman', vertical: 'Active Tech & Venture Studio', type: 'Customer Service', Icon: Headset, gradient: 'from-blue-500 to-indigo-600',
    url: 'https://gethuman.com', year: '2006', era: 'Kayak Era', sortYear: 2006,
    description: 'A massive consumer advocacy directory founded to solve the sheer frustration of automated phone trees. GetHuman provides direct phone numbers, wait times, and precise button-press strategies to reach real human representatives at thousands of major companies.'
  },
  { 
    name: 'Boston Venture Studio', vertical: 'Active Tech & Venture Studio', type: 'Venture Studio', Icon: Lightbulb, gradient: 'from-amber-400 to-orange-600', 
    url: 'https://bostonventurestudio.com', year: '2022', era: 'BVS Era', sortYear: 2022,
    description: 'A highly specialized startup incubator and venture studio founded by Paul. BVS focuses on building and launching consumer tech companies in the Boston area, providing elite design, engineering, and product support to exceptional founders.'
  },
  { 
    name: 'Supercal', vertical: 'Active Tech & Venture Studio', type: 'Calendar App', Icon: Calendar, gradient: 'from-rose-500 to-red-700',
    url: 'https://supercal.com', year: 'Jan 2024', era: 'BVS Era', sortYear: 2024.1,
    description: 'An intelligent scheduling platform designed to replace calendar chaos with AI coordination. Built for modern remote work and cross-company collaboration, Supercal offers free, frictionless booking links without frustrating paywalls.'
  },
  { 
    name: 'Steppin', vertical: 'Active Tech & Venture Studio', type: 'Screen-time App', Icon: Footprints, gradient: 'from-orange-400 to-amber-600',
    url: 'https://athletechnews.com/steppin-screen-time-app/', year: 'Mid 2024', era: 'BVS Era', sortYear: 2024.2,
    description: 'A digital wellness app that ingeniously forces users to earn their screen time by walking. By connecting to Apple Health data, Steppin blocks distracting apps like TikTok or Instagram until users meet their daily step goals, fighting the doomscrolling algorithm.'
  },
  { 
    name: 'Wellagram', vertical: 'Active Tech & Venture Studio', type: 'Health Journal', Icon: Activity, gradient: 'from-cyan-400 to-teal-600',
    url: 'https://wellagram.com', year: '2024-2025', era: 'BVS Era', sortYear: 2024.3,
    description: 'A secure health and wellness tracking journal application designed to help users track habits, medical symptoms, and lifestyle changes in a private, encrypted environment.'
  },
  { 
    name: 'Deets', vertical: 'Active Tech & Venture Studio', type: 'City Guides App', Icon: MapPin, gradient: 'from-emerald-400 to-teal-600',
    url: 'https://deets.com', year: '2024-2025', era: 'BVS Era', sortYear: 2024.4,
    description: 'A curated city guides application leveraging AI and human expertise to deliver perfect restaurant and travel recommendations. Deets matches you with local experts to discover hidden gems rather than relying on noisy, untrustworthy public reviews.'
  },
  { 
    name: 'PartyClick', vertical: 'Active Tech & Venture Studio', type: 'RSVP Tool', Icon: PartyPopper, gradient: 'from-fuchsia-500 to-purple-700',
    url: 'https://partyclick.com', year: '2024-2025', era: 'BVS Era', sortYear: 2024.5,
    description: 'A modern, radically streamlined RSVP and event management tool. Built to organize networking events, exclusive founder dinners, and social gatherings without the bloat and clutter of traditional corporate ticketing sites.'
  },
  
  // Vertical 2: Exits & Early Companies (8 items) -> Outer Loop of 'P'
  { 
    name: 'Speed Games', vertical: 'Exits & Early Companies', type: 'Game Company', Icon: Gamepad2, gradient: 'from-rose-500 to-pink-700',
    url: 'https://paulenglish.com', year: 'Early 1980s', era: 'Early Hustle', sortYear: 1980,
    description: 'The origin story: A high school video game company where a young Paul developed his earliest commercial software, programming and licensing 8-bit games during the dawn of personal computing.'
  },
  { 
    name: 'Boston Light Software', vertical: 'Exits & Early Companies', type: 'E-commerce', Icon: ShoppingCart, gradient: 'from-yellow-300 to-amber-500',
    url: 'https://paulenglish.com', year: '1997-1998', era: 'Early Hustle', sortYear: 1997,
    description: 'A pioneering e-commerce software startup founded in 1998 that created secure online storefronts, beginning with merchandise for The Boston Globe. As the dot-com boom accelerated, it was rapidly acquired by financial giant Intuit.'
  },
  { 
    name: 'Intermute', vertical: 'Exits & Early Companies', type: 'Privacy Software', Icon: Shield, gradient: 'from-slate-400 to-gray-600',
    url: 'https://en.wikipedia.org/wiki/InterMute', year: 'Late 1990s', era: 'Early Hustle', sortYear: 1998,
    description: 'An early, highly successful privacy and anti-spam software company Paul helped build and manage. It protected users from intrusive ads and malicious spyware during the wild-west days of the early internet, eventually being acquired by Trend Micro.'
  },
  { 
    name: 'Kayak', vertical: 'Exits & Early Companies', type: 'Travel Search', Icon: Plane, gradient: 'from-orange-500 to-red-600',
    url: 'https://kayak.com', year: '2004', era: 'Kayak Era', sortYear: 2004,
    description: 'The revolutionary travel search engine co-founded by Paul. Kayak fundamentally transformed how the internet generation books flights and hotels by aggregating vast amounts of real-time data. It was acquired by Priceline (Booking Holdings) for a staggering $1.8 billion.'
  },
  { 
    name: 'Lola', vertical: 'Exits & Early Companies', type: 'Travel Management', Icon: Briefcase, gradient: 'from-violet-400 to-purple-600',
    url: 'https://en.wikipedia.org/wiki/Lola.com', year: '2015', era: 'Post-Kayak Era', sortYear: 2015,
    description: 'A corporate travel management platform that pioneered combining AI chat interfaces with real human travel agents. It aimed to make booking business travel as easy as texting a friend, before being successfully acquired by Capital One.'
  },
  { 
    name: 'Moonbeam', vertical: 'Exits & Early Companies', type: 'Podcast App', Icon: Moon, gradient: 'from-slate-700 to-black',
    url: 'https://paulenglish.com', year: '2019', era: 'Post-Kayak Era', sortYear: 2019,
    description: 'A brilliantly designed podcast discovery app that helped listeners find new shows through a TikTok-style feed of curated audio snippets. Recognizing its unique discovery engine, Moonbeam was acquired by audio giant Audacy.'
  },
  { 
    name: 'Angel Portfolio', vertical: 'Exits & Early Companies', type: 'Investments', Icon: PieChart, gradient: 'from-amber-300 to-yellow-600',
    url: 'https://pitchbook.com/profiles/investor/106039-45', year: 'Ongoing', era: 'Investments', sortYear: 2026.1,
    description: 'A robust personal investment portfolio encompassing 49 unique deals and 29 successful exits across the technology ecosystem over several decades.'
  },
  { 
    name: 'Patents', vertical: 'Exits & Early Companies', type: 'Intellectual Property', Icon: FileText, gradient: 'from-slate-500 to-gray-700',
    url: 'https://patents.google.com/?inventor=paul+english', year: 'Ongoing', era: 'Investments', sortYear: 2026.2,
    description: 'A collection of over 8 technical patents credited to Paul, covering broad innovations in search technology, data caching, and customer support routing.'
  },
  
  // Vertical 3: Philanthropy & Social Impact (9 items) -> Left Stem of 'E'
  { 
    name: 'Winter Walk', vertical: 'Philanthropy & Social Impact', type: 'Homelessness Event', Icon: Snowflake, gradient: 'from-sky-300 to-blue-600',
    url: 'https://winterwalkboston.org', year: '2014 / 2017', era: 'Post-Kayak Era', sortYear: 2014,
    description: 'An annual flagship event and nonprofit organization dedicated to raising awareness and funds to end homelessness in Greater Boston. The initiative brings thousands of community members together to walk shoulder-to-shoulder with unhoused individuals in the dead of winter.'
  },
  { 
    name: 'Embrace Boston', vertical: 'Philanthropy & Social Impact', type: 'Memorial/Nonprofit', Icon: HeartHandshake, gradient: 'from-yellow-400 to-amber-600',
    url: 'https://embraceboston.org', year: '2017', era: 'Post-Kayak Era', sortYear: 2017,
    description: 'A massive racial-justice project and nonprofit that spearheaded the creation of "The Embrace"—a historic, multi-million dollar bronze memorial dedicated to Martin Luther King Jr. and Coretta Scott King, permanently installed on the Boston Common.'
  },
  { 
    name: 'Summits Education', vertical: 'Philanthropy & Social Impact', type: 'Haiti Schools', Icon: GraduationCap, gradient: 'from-emerald-500 to-green-800',
    url: 'https://summits.org', year: '2023', era: 'BVS Era', sortYear: 2023,
    description: "A vital nonprofit organization operating a network of 41 primary schools in Haiti's Central Plateau. It ensures access to quality education and fair pay for teachers for thousands of students, functioning in close partnership with the Haitian Ministry of Education."
  },
  { 
    name: 'Bipolar Social Club', vertical: 'Philanthropy & Social Impact', type: 'Peer Support', Icon: Users, gradient: 'from-purple-600 to-indigo-800',
    url: 'https://bipolarsocialclub.org', year: '2023', era: 'BVS Era', sortYear: 2023.1,
    description: 'A deeply personal peer support network and nonprofit aimed at radically destigmatizing bipolar disorder. It provides a safe community for sharing personal stories, medical information, and emotional support through online meetings and newsletters.'
  },
  { 
    name: 'BannedBooksUSA', vertical: 'Philanthropy & Social Impact', type: 'Activism', Icon: BookOpen, gradient: 'from-amber-700 to-yellow-900',
    url: 'https://bannedbooksusa.org', year: '2024-2025', era: 'BVS Era', sortYear: 2024,
    description: 'An activist initiative and nonprofit effort dedicated to providing free access to literature that has been actively banned or restricted in schools and public libraries across the United States.'
  },
  { 
    name: 'Partners In Health', vertical: 'Philanthropy & Social Impact', type: 'Board Member', Icon: Globe, gradient: 'from-blue-500 to-cyan-700',
    url: 'https://pih.org', year: 'Ongoing', era: 'Board & Advisory', sortYear: 2026.1,
    description: 'A premier global health organization where Paul serves as a board member. PIH works relentlessly to bring modern medical care, hospitals, and infrastructure to the most vulnerable, impoverished communities worldwide.'
  },
  { 
    name: 'Village Health Works', vertical: 'Philanthropy & Social Impact', type: 'Board Member', Icon: Home, gradient: 'from-green-600 to-emerald-900',
    url: 'https://villagehealthworks.org', year: 'Ongoing', era: 'Board & Advisory', sortYear: 2026.2,
    description: 'A grassroots organization operating in Burundi where Paul actively serves on the board. The organization focuses on providing deeply integrated, quality healthcare and education to communities recovering from long-term systemic violence.'
  },
  { 
    name: 'Founder Mental Health', vertical: 'Philanthropy & Social Impact', type: 'Strategic Advisor', Icon: Heart, gradient: 'from-pink-400 to-rose-500',
    url: 'https://paulenglish.com', year: 'Ongoing', era: 'Board & Advisory', sortYear: 2026.3,
    description: 'An essential advisory role where Paul leverages his own public experiences with bipolar disorder to advocate for mental health awareness, creating specialized support systems tailored specifically for the high-stress environment of startup founders.'
  },
  { 
    name: 'Tech Philanthropy', vertical: 'Philanthropy & Social Impact', type: 'General Impact', Icon: Sparkles, gradient: 'from-amber-300 to-yellow-600',
    url: 'https://paulenglish.com', year: 'Ongoing', era: 'Board & Advisory', sortYear: 2026.4,
    description: 'A broader operational umbrella encompassing Paul\'s multi-million dollar commitments to various causes. His philosophy strictly focuses on using technology-generated wealth to drive localized, immediate, and measurable global social impact.'
  },
  
  // Vertical 4: Media, Education & Personal Brand (5 items) -> Horizontal Bars of 'E'
  { 
    name: 'TEDxBoston', vertical: 'Media, Education & Personal Brand', type: 'Public Speaking', Icon: Mic, gradient: 'from-red-600 to-red-800',
    url: 'https://tedxboston.com', year: '2022', era: 'BVS Era', sortYear: 2022,
    description: 'A major public speaking engagement where Paul candidly shared insights from his decades of startup experience, discussing innovation, team building, and his journey through tech and philanthropy.'
  },
  { 
    name: 'Institute for Applied AI', vertical: 'Media, Education & Personal Brand', type: 'Education', Icon: Brain, gradient: 'from-indigo-500 to-violet-700',
    url: 'https://ai.umb.edu', year: 'Ongoing', era: 'Education', sortYear: 2026.1,
    description: 'An educational initiative and research center established at UMass Boston, funded by a $5 million commitment from Paul. The institute focuses strictly on the practical, ethical, and immediate application of artificial intelligence tools for students.'
  },
  { 
    name: 'paulenglish.com', vertical: 'Media, Education & Personal Brand', type: 'Personal Website', Icon: UserCircle, gradient: 'from-zinc-400 to-zinc-600',
    url: 'https://paulenglish.com', year: 'Ongoing', era: 'Media', sortYear: 2026.2,
    description: 'Paul\'s personal digital hub. It contains his essays, candid founder advice, curated reading lists, and a comprehensive, chronological archive of his business ventures and philanthropic efforts over a 30+ year career.'
  },
  { 
    name: 'LinkedIn', vertical: 'Media, Education & Personal Brand', type: 'Professional Profile', Icon: Linkedin, gradient: 'from-blue-600 to-blue-800',
    url: 'https://linkedin.com/in/englishpaulm', year: 'Ongoing', era: 'Media', sortYear: 2026.3,
    description: 'Paul\'s professional network presence, where he actively shares sharp insights on startup culture, product design philosophy, engineering management, and mental health in the corporate workplace.'
  },
  { 
    name: 'Substack', vertical: 'Media, Education & Personal Brand', type: 'Newsletter', Icon: Newspaper, gradient: 'from-orange-500 to-orange-800',
    url: 'https://englishpaulm.substack.com', year: 'Ongoing', era: 'Media', sortYear: 2026.4,
    description: 'An independent newsletter platform where Paul writes long-form deep dives into entrepreneurship, product strategy, and updates on his ongoing projects, choosing to engage directly and authentically with founders and tech enthusiasts.'
  }
];

// Reconstructed Grids mapping precise entities to coordinate locations
// 1 = Active Tech, 2 = Exits
const pGridMap = [
  [1, 2, 2, 2, 0],
  [1, 0, 0, 0, 2],
  [1, 0, 0, 0, 2],
  [1, 2, 2, 2, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0] // 8 rows tall
];

// 3 = Philanthropy, 4 = Media
const eGridMap = [
  [3, 4, 4, 4, 0],
  [3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [3, 4, 4, 0, 0],
  [3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [3, 3, 0, 0, 0] // 8 rows tall
];

export default function App() {
  const [hoveredEntity, setHoveredEntity] = useState(null);
  const [selectedEntity, setSelectedEntity] = useState(null);

  // Safely map specific vertical entities to exact grid coordinates AND sort them chronologically
  const pGridData = useMemo(() => {
    let i1 = 0, i2 = 0;
    const activeTech = entities.filter(e => e.vertical.includes('Active Tech')).sort((a, b) => a.sortYear - b.sortYear);
    const exits = entities.filter(e => e.vertical.includes('Exits')).sort((a, b) => a.sortYear - b.sortYear);

    return pGridMap.map((row, rIdx) => 
      row.map((cell, cIdx) => {
        let entity = null;
        if (cell === 1) entity = activeTech[i1++];
        if (cell === 2) entity = exits[i2++];
        return { cell, entity, rIdx, cIdx };
      })
    );
  }, []);

  const eGridData = useMemo(() => {
    let i3 = 0, i4 = 0;
    const philanthropy = entities.filter(e => e.vertical.includes('Philanthropy')).sort((a, b) => a.sortYear - b.sortYear);
    const media = entities.filter(e => e.vertical.includes('Media')).sort((a, b) => a.sortYear - b.sortYear);

    return eGridMap.map((row, rIdx) => 
      row.map((cell, cIdx) => {
        let entity = null;
        if (cell === 3) entity = philanthropy[i3++];
        if (cell === 4) entity = media[i4++];
        return { cell, entity, rIdx, cIdx };
      })
    );
  }, []);

  // Detailed Modal View
  if (selectedEntity) {
    const { Icon, gradient, name, vertical, type, year, era, description, url } = selectedEntity;
    return (
      <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-neutral-700 font-sans">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${gradient} opacity-[0.15] blur-[150px] pointer-events-none transition-all duration-1000`}></div>
        <div className="max-w-5xl w-full bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative z-10 animate-in fade-in zoom-in-95 duration-500 ease-out">
          <button onClick={() => setSelectedEntity(null)} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group w-fit">
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
             <span className="font-semibold tracking-wide uppercase text-sm">Back to Ecosystem Map</span>
          </button>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className={`w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 shrink-0 rounded-[22%] bg-gradient-to-br ${gradient} p-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative group`}>
              <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[22%]"></div>
              <div className="w-full h-full rounded-[22%] bg-black/40 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden border-t border-white/30 border-b border-black/80">
                 <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 pointer-events-none"></div>
                 <Icon className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] relative z-10" strokeWidth={1} />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="mb-4 flex flex-wrap gap-3 items-center">
                <span className="text-xs md:text-sm font-bold text-neutral-400 uppercase tracking-[0.2em]">
                  {vertical} <span className="text-neutral-600 mx-2">|</span> <span className="text-neutral-500 font-medium">{type}</span>
                </span>
                <span className={`px-4 py-1 bg-gradient-to-r ${gradient} bg-opacity-20 rounded-full text-xs font-bold text-white tracking-widest uppercase border border-white/20 shadow-lg`}>
                  {era} ({year})
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 mb-6 tracking-tight leading-tight">
                {name}
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-neutral-600 to-transparent mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl">
                {description}
              </p>
              <a href={url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 w-fit group`}>
                Explore Platform <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Helper to determine the color of the connecting "Stems"
  const getStemColor = (cell) => {
    switch(cell) {
      case 1: return 'bg-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]';
      case 2: return 'bg-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]';
      case 3: return 'bg-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]';
      case 4: return 'bg-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.2)]';
      default: return 'bg-white/10';
    }
  };

  const renderCell = ({ cell, entity, rIdx, cIdx }, gridMap) => {
    const sizeClasses = "w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16";

    if (cell === 0) return <div key={`${rIdx}-${cIdx}`} className={sizeClasses}></div>;
    if (!entity) return null;

    const { Icon, gradient, name } = entity;
    const stemColor = getStemColor(cell);

    return (
      <div 
        key={name}
        className={`${sizeClasses} relative group cursor-pointer z-10`}
        onMouseEnter={() => setHoveredEntity(entity)}
        onMouseLeave={() => setHoveredEntity(null)}
        onClick={() => setSelectedEntity(entity)}
      >
        {/* Continuous Connecting Stem Lines weaving through the skewed structure */}
        {rIdx < gridMap.length - 1 && gridMap[rIdx+1][cIdx] === cell && (
          <div className={`absolute top-1/2 left-1/2 w-[2px] h-[calc(100%+0.5rem)] sm:h-[calc(100%+0.75rem)] md:h-[calc(100%+1rem)] lg:h-[calc(100%+1.25rem)] ${stemColor} -z-10 -translate-x-1/2 pointer-events-none transition-colors duration-300`}></div>
        )}
        
        {cIdx < gridMap[0].length - 1 && gridMap[rIdx][cIdx+1] === cell && (
          <div className={`absolute top-1/2 left-1/2 h-[2px] w-[calc(100%+0.5rem)] sm:w-[calc(100%+0.75rem)] md:w-[calc(100%+1rem)] lg:w-[calc(100%+1.25rem)] ${stemColor} -z-10 -translate-y-1/2 pointer-events-none transition-colors duration-300`}></div>
        )}

        <div className={`absolute inset-0 skew-x-12 rounded-[22%] bg-gradient-to-br ${gradient} p-[1px] shadow-lg transition-transform duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:z-50 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}>
          <div className="w-full h-full rounded-[22%] bg-black/40 backdrop-blur-md flex items-center justify-center border-t border-white/40 border-b border-black/60 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 rounded-t-[22%] pointer-events-none"></div>
            <Icon className="text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center py-16 px-2 md:px-8 font-sans selection:bg-neutral-700 overflow-x-hidden relative">
      
      {/* Ambient Premium Lighting */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed top-1/3 left-1/3 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* Header */}
      <div className="text-center mb-16 relative z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 drop-shadow-2xl z-20">
          Paul English
        </h1>
        <p className="text-neutral-400 mt-4 max-w-xl text-xs md:text-sm tracking-widest uppercase font-semibold">
          The Chronological Mosaic
        </p>
        <div className="mt-4 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-lg flex items-center gap-2">
           <Calendar className="w-4 h-4 text-blue-400" />
           <span className="text-xs font-bold tracking-widest text-neutral-300 uppercase">Chronological Order: Early 1980s → Present</span>
        </div>
      </div>

      {/* The Master Container - Separated skewed grids with perfectly aligned dropping header nodes */}
      <div className="flex flex-col md:flex-row gap-12 sm:gap-16 md:gap-24 lg:gap-32 items-end justify-center relative z-10 -skew-x-12 mb-16 px-8">
        
        {/* Letter P Structure */}
        <div className="flex flex-col relative w-fit">
           
           {/* 'P' Header Nodes - Built as an identical overlay grid to enforce flawless column alignment */}
           <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full mb-0 relative z-20">
             
             {/* Node 1: Left Stem */}
             <div className="col-start-1 flex flex-col items-center relative overflow-visible">
                <div className="absolute bottom-full mb-2 whitespace-nowrap bg-[#0a0a0a]/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[9px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)] skew-x-12">
                   Active Tech
                </div>
                <div className="h-10 md:h-16 w-[2px] bg-gradient-to-b from-amber-500 via-amber-500/50 to-amber-500/10 rounded-full"></div>
             </div>

             {/* Node 2: Outer Loop */}
             <div className="col-start-5 flex flex-col items-center relative overflow-visible">
                <div className="absolute bottom-full mb-2 whitespace-nowrap bg-[#0a0a0a]/80 backdrop-blur-md border border-blue-500/40 text-blue-400 text-[9px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.2)] skew-x-12">
                   Exits
                </div>
                <div className="h-10 md:h-16 w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/50 to-blue-500/10 rounded-full"></div>
             </div>

           </div>

           {/* 'P' App Grid */}
           <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 relative z-10 w-fit">
              {pGridData.map((row, rIdx) => 
                 <React.Fragment key={`p-row-${rIdx}`}>
                    {row.map((cell) => renderCell(cell, pGridMap))}
                 </React.Fragment>
              )}
           </div>
        </div>

        {/* Letter E Structure */}
        <div className="flex flex-col relative w-fit">
           
           {/* 'E' Header Nodes - Identical overlay grid for perfect horizontal alignment */}
           <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full mb-0 relative z-20">
             
             {/* Node 3: Left Stem */}
             <div className="col-start-1 flex flex-col items-center relative overflow-visible">
                <div className="absolute bottom-full mb-2 whitespace-nowrap bg-[#0a0a0a]/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[9px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.2)] skew-x-12">
                   Philanthropy
                </div>
                <div className="h-10 md:h-16 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-emerald-500/10 rounded-full"></div>
             </div>

             {/* Node 4: Horizontal Bars */}
             <div className="col-start-4 flex flex-col items-center relative overflow-visible">
                <div className="absolute bottom-full mb-2 whitespace-nowrap bg-[#0a0a0a]/80 backdrop-blur-md border border-rose-500/40 text-rose-400 text-[9px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(244,63,94,0.2)] skew-x-12">
                   Media
                </div>
                <div className="h-10 md:h-16 w-[2px] bg-gradient-to-b from-rose-500 via-rose-500/50 to-rose-500/10 rounded-full"></div>
             </div>

           </div>

           {/* 'E' App Grid */}
           <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 relative z-10 w-fit">
              {eGridData.map((row, rIdx) => 
                 <React.Fragment key={`e-row-${rIdx}`}>
                    {row.map((cell) => renderCell(cell, eGridMap))}
                 </React.Fragment>
              )}
           </div>
        </div>

      </div>

      {/* Hover Info Panel placed securely underneath the ecosystem grids */}
      <div className="mt-8 w-full max-w-lg h-32 flex items-center justify-center relative z-10 px-4">
        {hoveredEntity ? (
          <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center justify-center bg-black/40 backdrop-blur-2xl border border-white/10 px-8 py-5 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] w-full text-center relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-r ${hoveredEntity.gradient} opacity-[0.15]`}></div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight relative z-10 drop-shadow-md">
              {hoveredEntity.name}
            </h2>
            <div className="flex flex-col items-center">
              <span className="text-[11px] md:text-xs font-bold text-neutral-300 uppercase tracking-[0.2em] relative z-10 mt-1">
                {hoveredEntity.vertical} <span className="text-neutral-600 mx-1">•</span> <span className="text-white drop-shadow-lg">{hoveredEntity.year}</span>
              </span>
              <span className="text-[9px] md:text-[10px] font-medium text-neutral-400 uppercase tracking-[0.15em] relative z-10 opacity-70 mt-1">
                {hoveredEntity.era} — {hoveredEntity.type}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-8 py-5 rounded-3xl w-full text-center opacity-30 transition-opacity duration-500 border border-transparent">
             <h2 className="text-lg md:text-xl font-medium text-neutral-500 mb-1 tracking-tight">Awaiting Interaction</h2>
             <span className="text-[10px] md:text-xs font-semibold text-neutral-600 uppercase tracking-[0.25em]">Hover over a node</span>
          </div>
        )}
      </div>

    </div>
  );
}
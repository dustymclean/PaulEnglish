import React, { useState } from 'react';
import { 
  Lightbulb, Calendar, MapPin, Sword, Footprints, 
  Activity, PartyPopper, Headset, BookOpen, Brain, 
  Users, HeartHandshake, Snowflake, Plane, Briefcase, 
  Moon, Shield, ShoppingCart, Gamepad2, GraduationCap, 
  Globe, Home, Heart, UserCircle, Linkedin, 
  Newspaper, Twitter, Store, Target, Sparkles,
  ArrowLeft, ExternalLink
} from 'lucide-react';

// The 30 distinct entities mapped into 4 distinct verticals
const entities = [
  // Vertical 1: Active Tech & Venture Studio
  { 
    name: 'Boston Venture Studio', vertical: 'Active Tech & Venture', type: 'Venture Studio', Icon: Lightbulb, gradient: 'from-amber-400 to-orange-600', 
    url: 'https://bostonventurestudio.com',
    description: 'A highly specialized startup incubator and venture studio founded by Paul. BVS focuses on building and launching consumer tech companies in the Boston area, providing elite design, engineering, and product support to exceptional founders.'
  },
  { 
    name: 'Supercal', vertical: 'Active Tech & Venture', type: 'Calendar App', Icon: Calendar, gradient: 'from-rose-500 to-red-700',
    url: 'https://supercal.com',
    description: 'An intelligent scheduling platform designed to replace calendar chaos with AI coordination. Built for modern remote work and cross-company collaboration, Supercal offers free, frictionless booking links without frustrating paywalls.'
  },
  { 
    name: 'Deets', vertical: 'Active Tech & Venture', type: 'City Guides App', Icon: MapPin, gradient: 'from-emerald-400 to-teal-600',
    url: 'https://deets.com',
    description: 'A curated city guides application leveraging AI and human expertise to deliver perfect restaurant and travel recommendations. Deets matches you with local experts to discover hidden gems rather than relying on noisy, untrustworthy public reviews.'
  },
  { 
    name: 'Xiangqi.com', vertical: 'Active Tech & Venture', type: 'Chinese Chess', Icon: Sword, gradient: 'from-red-800 to-black',
    url: 'https://xiangqi.com',
    description: 'The premier online platform for playing Chinese Chess (Xiangqi). Originally launched by Paul in 1997 during the early days of the internet, he re-acquired and fully relaunched the modernized platform in 2020. It now hosts thousands of games daily for players worldwide.'
  },
  { 
    name: 'Steppin', vertical: 'Active Tech & Venture', type: 'Screen-time App', Icon: Footprints, gradient: 'from-orange-400 to-amber-600',
    url: 'https://athletechnews.com/steppin-screen-time-app/',
    description: 'A digital wellness app that ingeniously forces users to earn their screen time by walking. By connecting to Apple Health data, Steppin blocks distracting apps like TikTok or Instagram until users meet their daily step goals, fighting the doomscrolling algorithm.'
  },
  { 
    name: 'Wellagram', vertical: 'Active Tech & Venture', type: 'Health Journal', Icon: Activity, gradient: 'from-cyan-400 to-teal-600',
    url: 'https://wellagram.com',
    description: 'A secure health and wellness tracking journal application designed to help users track habits, medical symptoms, and lifestyle changes in a private, encrypted environment.'
  },
  { 
    name: 'PartyClick', vertical: 'Active Tech & Venture', type: 'RSVP Tool', Icon: PartyPopper, gradient: 'from-fuchsia-500 to-purple-700',
    url: 'https://partyclick.com',
    description: 'A modern, radically streamlined RSVP and event management tool. Built to organize networking events, exclusive founder dinners, and social gatherings without the bloat and clutter of traditional corporate ticketing sites.'
  },
  { 
    name: 'GetHuman', vertical: 'Active Tech & Venture', type: 'Customer Service', Icon: Headset, gradient: 'from-blue-500 to-indigo-600',
    url: 'https://gethuman.com',
    description: 'A massive consumer advocacy directory founded to solve the sheer frustration of automated phone trees. GetHuman provides direct phone numbers, wait times, and precise button-press strategies to reach real human representatives at thousands of major companies.'
  },
  
  // Vertical 2: Exits & Early Companies
  { 
    name: 'Kayak', vertical: 'Exits & Early Companies', type: 'Travel Search', Icon: Plane, gradient: 'from-orange-500 to-red-600',
    url: 'https://kayak.com',
    description: 'The revolutionary travel search engine co-founded by Paul. Kayak fundamentally transformed how the internet generation books flights and hotels by aggregating vast amounts of real-time data. It was acquired by Priceline (Booking Holdings) for a staggering $1.8 billion.'
  },
  { 
    name: 'Lola', vertical: 'Exits & Early Companies', type: 'Travel Management', Icon: Briefcase, gradient: 'from-violet-400 to-purple-600',
    url: 'https://en.wikipedia.org/wiki/Lola.com',
    description: 'A corporate travel management platform that pioneered combining AI chat interfaces with real human travel agents. It aimed to make booking business travel as easy as texting a friend, before being successfully acquired by Capital One.'
  },
  { 
    name: 'Moonbeam', vertical: 'Exits & Early Companies', type: 'Podcast App', Icon: Moon, gradient: 'from-slate-700 to-black',
    url: 'https://paulenglish.com',
    description: 'A brilliantly designed podcast discovery app that helped listeners find new shows through a TikTok-style feed of curated audio snippets. Recognizing its unique discovery engine, Moonbeam was acquired by audio giant Audacy.'
  },
  { 
    name: 'Intermute', vertical: 'Exits & Early Companies', type: 'Privacy Software', Icon: Shield, gradient: 'from-slate-400 to-gray-600',
    url: 'https://en.wikipedia.org/wiki/InterMute',
    description: 'An early, highly successful privacy and anti-spam software company Paul helped build and manage. It protected users from intrusive ads and malicious spyware during the wild-west days of the early internet, eventually being acquired by Trend Micro.'
  },
  { 
    name: 'Boston Light Software', vertical: 'Exits & Early Companies', type: 'E-commerce', Icon: ShoppingCart, gradient: 'from-yellow-300 to-amber-500',
    url: 'https://paulenglish.com',
    description: 'A pioneering e-commerce software startup founded in 1998 that created secure online storefronts, beginning with merchandise for The Boston Globe. As the dot-com boom accelerated, it was rapidly acquired by financial giant Intuit.'
  },
  { 
    name: 'Speed Games', vertical: 'Exits & Early Companies', type: 'Game Company', Icon: Gamepad2, gradient: 'from-rose-500 to-pink-700',
    url: 'https://paulenglish.com',
    description: 'The origin story: A high school video game company where a young Paul developed his earliest commercial software, programming and licensing 8-bit games during the dawn of personal computing.'
  },
  { 
    name: 'QSHOP', vertical: 'Exits & Early Companies', type: 'Early E-commerce', Icon: Store, gradient: 'from-blue-600 to-indigo-900',
    url: 'https://paulenglish.com',
    description: 'The proprietary, secure e-commerce technology engine developed under the umbrella of Boston Light Software. It paved the way for intuitive, consumer-friendly online shopping experiences before standardized platforms existed.'
  },
  { 
    name: 'Cupid', vertical: 'Exits & Early Companies', type: 'Licensed Game', Icon: Target, gradient: 'from-pink-500 to-rose-600',
    url: 'https://paulenglish.com',
    description: 'A retro video game designed by Paul on the Commodore VIC-20. It was licensed to an external publisher for $25,000, funding his early hardware purchases (like an Apple II) and effectively launching his lifelong software development career.'
  },
  
  // Vertical 3: Philanthropy & Social Impact
  { 
    name: 'Embrace Boston', vertical: 'Philanthropy & Social Impact', type: 'Memorial/Nonprofit', Icon: HeartHandshake, gradient: 'from-yellow-400 to-amber-600',
    url: 'https://embraceboston.org',
    description: 'A massive racial-justice project and nonprofit that spearheaded the creation of "The Embrace"—a historic, multi-million dollar bronze memorial dedicated to Martin Luther King Jr. and Coretta Scott King, permanently installed on the Boston Common.'
  },
  { 
    name: 'Winter Walk', vertical: 'Philanthropy & Social Impact', type: 'Homelessness Event', Icon: Snowflake, gradient: 'from-sky-300 to-blue-600',
    url: 'https://winterwalkboston.org',
    description: 'An annual flagship event and nonprofit organization dedicated to raising awareness and funds to end homelessness in Greater Boston. The initiative brings thousands of community members together to walk shoulder-to-shoulder with unhoused individuals in the dead of winter.'
  },
  { 
    name: 'Summits Education', vertical: 'Philanthropy & Social Impact', type: 'Haiti Schools', Icon: GraduationCap, gradient: 'from-emerald-500 to-green-800',
    url: 'https://summits.org',
    description: "A vital nonprofit organization operating a network of 41 primary schools in Haiti's Central Plateau. It ensures access to quality education and fair pay for teachers for thousands of students, functioning in close partnership with the Haitian Ministry of Education."
  },
  { 
    name: 'Partners In Health', vertical: 'Philanthropy & Social Impact', type: 'Board Member', Icon: Globe, gradient: 'from-blue-500 to-cyan-700',
    url: 'https://pih.org',
    description: 'A premier global health organization where Paul serves as a board member. PIH works relentlessly to bring modern medical care, hospitals, and infrastructure to the most vulnerable, impoverished communities worldwide.'
  },
  { 
    name: 'Village Health Works', vertical: 'Philanthropy & Social Impact', type: 'Board Member', Icon: Home, gradient: 'from-green-600 to-emerald-900',
    url: 'https://villagehealthworks.org',
    description: 'A grassroots organization operating in Burundi where Paul actively serves on the board. The organization focuses on providing deeply integrated, quality healthcare and education to communities recovering from long-term systemic violence.'
  },
  { 
    name: 'Founder Mental Health', vertical: 'Philanthropy & Social Impact', type: 'Strategic Advisor', Icon: Heart, gradient: 'from-pink-400 to-rose-500',
    url: 'https://paulenglish.com',
    description: 'An essential advisory role where Paul leverages his own public experiences with bipolar disorder to advocate for mental health awareness, creating specialized support systems tailored specifically for the high-stress environment of startup founders.'
  },
  { 
    name: 'Tech Philanthropy', vertical: 'Philanthropy & Social Impact', type: 'General Impact', Icon: Sparkles, gradient: 'from-amber-300 to-yellow-600',
    url: 'https://paulenglish.com',
    description: 'A broader operational umbrella encompassing Paul\'s multi-million dollar commitments to various causes. His philosophy strictly focuses on using technology-generated wealth to drive localized, immediate, and measurable global social impact.'
  },
  { 
    name: 'BannedBooksUSA', vertical: 'Philanthropy & Social Impact', type: 'Activism', Icon: BookOpen, gradient: 'from-amber-700 to-yellow-900',
    url: 'https://bannedbooksusa.org',
    description: 'An activist initiative and nonprofit effort dedicated to providing free access to literature that has been actively banned or restricted in schools and public libraries across the United States.'
  },
  { 
    name: 'Bipolar Social Club', vertical: 'Philanthropy & Social Impact', type: 'Peer Support', Icon: Users, gradient: 'from-purple-600 to-indigo-800',
    url: 'https://bipolarsocialclub.org',
    description: 'A deeply personal peer support network and nonprofit aimed at radically destigmatizing bipolar disorder. It provides a safe community for sharing personal stories, medical information, and emotional support through online meetings and newsletters.'
  },
  
  // Vertical 4: Media, Education & Personal Brand
  { 
    name: 'Institute for Applied AI', vertical: 'Media, Edu & Brand', type: 'Education', Icon: Brain, gradient: 'from-indigo-500 to-violet-700',
    url: 'https://ai.umb.edu',
    description: 'An educational initiative and research center established at UMass Boston, funded by a $5 million commitment from Paul. The institute focuses strictly on the practical, ethical, and immediate application of artificial intelligence tools for students.'
  },
  { 
    name: 'paulenglish.com', vertical: 'Media, Edu & Brand', type: 'Personal Website', Icon: UserCircle, gradient: 'from-zinc-400 to-zinc-600',
    url: 'https://paulenglish.com',
    description: 'Paul\'s personal digital hub. It contains his essays, candid founder advice, curated reading lists, and a comprehensive, chronological archive of his business ventures and philanthropic efforts over a 30+ year career.'
  },
  { 
    name: 'LinkedIn', vertical: 'Media, Edu & Brand', type: 'Professional Profile', Icon: Linkedin, gradient: 'from-blue-600 to-blue-800',
    url: 'https://linkedin.com/in/englishpaulm',
    description: 'Paul\'s professional network presence, where he actively shares sharp insights on startup culture, product design philosophy, engineering management, and mental health in the corporate workplace.'
  },
  { 
    name: 'Substack', vertical: 'Media, Edu & Brand', type: 'Newsletter', Icon: Newspaper, gradient: 'from-orange-500 to-orange-800',
    url: 'https://englishpaulm.substack.com',
    description: 'An independent newsletter platform where Paul writes long-form deep dives into entrepreneurship, product strategy, and updates on his ongoing projects, choosing to engage directly and authentically with founders and tech enthusiasts.'
  },
  { 
    name: 'Twitter / X', vertical: 'Media, Edu & Brand', type: 'Social Media', Icon: Twitter, gradient: 'from-neutral-800 to-black',
    url: 'https://twitter.com/englishpaulm',
    description: 'Paul\'s micro-blogging feed, featuring unfiltered real-time thoughts on tech trends, Boston startups, political activism, and the occasional candid reflection on life as a serial entrepreneur.'
  }
];

// Helper to group entities by vertical
const groupedEntities = {
  'Active Tech & Venture': entities.filter(e => e.vertical === 'Active Tech & Venture'),
  'Exits & Early Companies': entities.filter(e => e.vertical === 'Exits & Early Companies'),
  'Philanthropy & Social Impact': entities.filter(e => e.vertical === 'Philanthropy & Social Impact'),
  'Media, Edu & Brand': entities.filter(e => e.vertical === 'Media, Edu & Brand'),
};

export default function App() {
  const [hoveredEntity, setHoveredEntity] = useState(null);
  const [selectedEntity, setSelectedEntity] = useState(null);

  // If an entity is clicked, render the immersive detail view
  if (selectedEntity) {
    const { Icon, gradient, name, vertical, type, description, url } = selectedEntity;
    
    return (
      <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-neutral-700 font-sans">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${gradient} opacity-[0.15] blur-[150px] pointer-events-none transition-all duration-1000`}></div>
        
        <div className="max-w-5xl w-full bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative z-10 animate-in fade-in zoom-in-95 duration-500 ease-out">
          <button 
            onClick={() => setSelectedEntity(null)} 
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group w-fit drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          >
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
             <span className="font-semibold tracking-wide uppercase text-sm">Back to PE Tree</span>
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
              <div className="mb-4">
                <span className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                  {vertical} <span className="text-neutral-600 mx-2">|</span> <span className="text-neutral-500 font-medium">{type}</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 mb-6 tracking-tight leading-tight">
                {name}
              </h1>
              
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl">
                {description}
              </p>
              
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 w-fit group`}
              >
                Explore Platform 
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VERTICAL TREE RENDERING BELOW ---

  const renderIconCard = (entity) => {
    const { Icon, gradient, name } = entity;
    const isHovered = hoveredEntity?.name === name;

    return (
      <div 
        key={name}
        className="relative group cursor-pointer flex flex-col items-center z-10"
        onMouseEnter={() => setHoveredEntity(entity)}
        onMouseLeave={() => setHoveredEntity(null)}
        onClick={() => setSelectedEntity(entity)}
      >
        {/* The App Icon Box */}
        <div className="w-14 h-14 md:w-16 md:h-16 relative transition-transform duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-1">
          <div className={`absolute inset-0 rounded-[22%] bg-gradient-to-br ${gradient} p-[1px] shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] bg-[#050505]`}>
            <div className="w-full h-full rounded-[22%] bg-black/80 backdrop-blur-md flex items-center justify-center border-t border-white/20 border-b border-black/80 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-60 rounded-t-[22%] pointer-events-none"></div>
              <Icon className="text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] relative z-10 w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Floating Label (Visible on hover inside the stem) */}
        <div className={`absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          <div className="bg-blue-900/30 backdrop-blur-xl border border-blue-500/50 px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]">
             <span className="text-blue-100 text-xs md:text-sm font-bold tracking-wide drop-shadow-md">{name}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center font-sans selection:bg-neutral-700 overflow-x-hidden relative">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* Ambient Blue Background Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Root Node: PE Logo */}
      <div className="text-center mt-12 mb-4 relative z-10 flex flex-col items-center w-full">
        <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-400 drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] z-20 leading-none pb-2">
          PE
        </h1>
      </div>

      {/* Horizontal Scrollable Container (preserves 4 columns on all devices) */}
      <div className="w-full overflow-x-auto hide-scrollbar cursor-default pb-40">
        <div className="min-w-[900px] max-w-7xl mx-auto relative px-8">
          
          {/* THE GLOWING BLUE CONNECTION LINES */}
          <div className="relative w-full h-16 z-0">
            {/* 1. Main Root Drop Line */}
            <div className="absolute top-0 left-1/2 w-[3px] h-8 bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)] -translate-x-1/2"></div>
            
            {/* 2. Horizontal Spread Bar */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-[3px] bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)]"></div>
            
            {/* 3. The 4 Stem Drops connecting into the Labels */}
            <div className="absolute top-8 left-[12.5%] w-[3px] h-8 bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)] -translate-x-1/2"></div>
            <div className="absolute top-8 left-[37.5%] w-[3px] h-8 bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)] -translate-x-1/2"></div>
            <div className="absolute top-8 left-[62.5%] w-[3px] h-8 bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)] -translate-x-1/2"></div>
            <div className="absolute top-8 left-[87.5%] w-[3px] h-8 bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.8)] -translate-x-1/2"></div>
          </div>

          {/* THE 4 STEMS GRID */}
          <div className="grid grid-cols-4 gap-4 w-full relative z-10">
            {Object.entries(groupedEntities).map(([verticalName, items]) => (
              <div key={verticalName} className="flex flex-col items-center relative h-full">
                
                {/* Glowing Blue Text Label Node */}
                <div className="bg-[#030303] border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] rounded-xl px-4 py-3 text-center min-h-[4rem] flex flex-col justify-center items-center z-20 w-11/12 mx-auto mt-0">
                  <span className="text-[10px] md:text-xs font-extrabold text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,1)] uppercase tracking-[0.2em] leading-relaxed">
                    {verticalName}
                  </span>
                </div>

                {/* The Continuous Glowing Stem Line running behind the icons */}
                <div className="absolute top-16 bottom-[-50px] left-1/2 w-[2px] bg-blue-500/50 shadow-[0_0_10px_2px_rgba(59,130,246,0.4)] -translate-x-1/2 z-0 rounded-full"></div>

                {/* The Entities flowing down the stem */}
                <div className="flex flex-col gap-12 mt-12 w-full items-center">
                  {items.map(entity => renderIconCard(entity))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Dynamic Hover Panel pinned to the bottom */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50 pointer-events-none transition-all duration-300">
        {hoveredEntity ? (
          <div className="animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col items-center justify-center bg-black/80 backdrop-blur-2xl border border-blue-500/30 px-8 py-5 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(59,130,246,0.2)] w-full text-center relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight relative z-10 drop-shadow-md">
              {hoveredEntity.name}
            </h2>
            <div className="flex flex-col items-center">
              <span className="text-[11px] md:text-xs font-bold text-blue-400 uppercase tracking-[0.2em] relative z-10 mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                {hoveredEntity.vertical}
              </span>
              <span className="text-[9px] md:text-[10px] font-medium text-neutral-400 uppercase tracking-[0.15em] relative z-10 mt-1">
                {hoveredEntity.type}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-8 py-5 rounded-3xl w-full text-center opacity-0 transition-opacity duration-500">
             <h2 className="text-lg md:text-xl font-medium text-transparent mb-1">Awaiting</h2>
          </div>
        )}
      </div>

    </div>
  );
}

to githhttps://github.com/dustymclean/PaulEnglish.git
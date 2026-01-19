"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

const companies = [
  {
    id: "ipa",
    name: "IPA",
    fullName: "Influence Public Affairs",
    description: "Government relations and policy engagement",
    color: "from-influence-red/20 to-influence-red/5",
    size: "large",
  },
  {
    id: "influence-pr",
    name: "INFLUENCE PR",
    fullName: "Influence PR",
    description: "Traditional public relations and media relations",
    color: "from-purple-500/20 to-purple-500/5",
    size: "medium",
  },
  {
    id: "influence-x",
    name: "INFLUENCE X",
    fullName: "Influence X",
    description: "Experiential marketing and events management",
    color: "from-blue-500/20 to-blue-500/5",
    size: "medium",
  },
  {
    id: "mention",
    name: "MENTION",
    fullName: "Mention",
    description: "Digital marketing, content creation, and production",
    color: "from-green-500/20 to-green-500/5",
    size: "small",
  },
  {
    id: "925",
    name: "925",
    fullName: "925 Magazine",
    description: "Online publishing platform and professional studio",
    color: "from-yellow-500/20 to-yellow-500/5",
    size: "small",
  },
  {
    id: "new",
    name: "+ NEW SECTOR",
    fullName: "Coming Soon",
    description: "The future of integrated communications",
    color: "from-white/10 to-white/5",
    size: "small",
  },
];

export function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-influence-red/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            THE <span className="text-influence-red">ECOSYSTEM</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Six specialized companies working in perfect synergy to deliver
            unprecedented results across the communications spectrum.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {companies.map((company, index) => (
            <CompanyCard
              key={company.id}
              company={company}
              variants={itemVariants}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface CompanyCardProps {
  company: (typeof companies)[0];
  variants: any;
  index: number;
}

function CompanyCard({ company, variants, index }: CompanyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const getGridClasses = () => {
    if (company.size === "large") return "md:col-span-2 md:row-span-2";
    if (index === 1 || index === 2) return "md:row-span-1";
    return "md:row-span-1";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      className={`group relative ${getGridClasses()} perspective-1000`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Card */}
      <div className="h-full glass glass-hover rounded-2xl p-8 relative overflow-hidden cursor-pointer">
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Red glow on hover */}
        <div className="absolute inset-0 bg-influence-red/0 group-hover:bg-influence-red/5 transition-colors duration-500" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-3 group-hover:text-influence-red transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {company.name}
            </motion.h3>
            <p className="text-sm text-white/50 mb-4">{company.fullName}</p>
          </div>

          <div>
            <p className="text-base text-white/70 mb-6">{company.description}</p>

            <motion.div
              className="flex items-center gap-2 text-sm font-semibold text-influence-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ x: 5 }}
            >
              <span>EXPLORE</span>
              <span>→</span>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-influence-red/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-influence-red/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

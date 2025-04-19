import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Icons } from './icons';

interface AnimatedSkillsProps {
  skills: readonly string[];
  className?: string;
}

// Custom shapes for skills
const SKILL_CONFIGS: Record<
  string,
  {
    icon: React.ComponentType<any>;
    color: string;
  }
> = {
  ReactJS: {
    icon: Icons.react,
    color:
      'bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/10 text-blue-500 dark:text-blue-400',
  },
  Vite: {
    icon: Icons.vite,
    color:
      'bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/10 text-purple-500 dark:text-purple-400',
  },
  TypeScript: {
    icon: Icons.typescript,
    color:
      'bg-gradient-to-br from-blue-600/5 to-blue-600/10 border-blue-600/10 text-blue-600 dark:text-blue-400',
  },
  'Tailwind CSS': {
    icon: Icons.tailwindcss,
    color:
      'bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 border-cyan-500/10 text-cyan-500 dark:text-cyan-400',
  },
  Redux: {
    icon: Icons.redux,
    color:
      'bg-gradient-to-br from-purple-700/5 to-purple-600/10 border-purple-600/10 text-purple-600 dark:text-purple-400',
  },
  'Node.js': {
    icon: Icons.nodejs,
    color:
      'bg-gradient-to-br from-green-600/5 to-green-500/10 border-green-500/10 text-green-600 dark:text-green-500',
  },
  'Express.js': {
    icon: Icons.expressjs,
    color:
      'bg-gradient-to-br from-gray-700/5 to-gray-700/10 border-gray-700/10 text-gray-700 dark:text-gray-300',
  },
  PostgreSQL: {
    icon: Icons.postgresql, // Temporary until we add PostgreSQL icon
    color:
      'bg-gradient-to-br from-blue-800/5 to-blue-700/10 border-blue-700/10 text-blue-700 dark:text-blue-400',
  },
  Prisma: {
    icon: Icons.prisma, // Temporary until we add Prisma icon
    color:
      'bg-gradient-to-br from-indigo-600/5 to-indigo-500/10 border-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  'Socket.io': {
    icon: Icons.socketio,
    color:
      'bg-gradient-to-br from-gray-900/5 to-gray-800/10 border-gray-800/10 text-gray-800 dark:text-gray-300',
  },
  'REST API': {
    icon: Icons.globe,
    color:
      'bg-gradient-to-br from-orange-500/5 to-orange-400/10 border-orange-400/10 text-orange-500 dark:text-orange-400',
  },
  Go: {
    icon: Icons.golang, // Temporary until we add Go icon
    color:
      'bg-gradient-to-br from-cyan-600/5 to-cyan-500/10 border-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  Docker: {
    icon: Icons.docker, // Temporary until we add Docker icon
    color:
      'bg-gradient-to-br from-blue-700/5 to-blue-600/10 border-blue-600/10 text-blue-600 dark:text-blue-400',
  },
  MariaDB: {
    icon: Icons.mariadb, // Temporary until we add MariaDB icon
    color:
      'bg-gradient-to-br from-amber-600/5 to-amber-500/10 border-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  MySQL: {
    icon: Icons.mysql, // Temporary until we add MySQL icon
    color:
      'bg-gradient-to-br from-blue-500/5 to-blue-400/10 border-blue-400/10 text-blue-500 dark:text-blue-400',
  },
  MongoDB: {
    icon: Icons.mongodb, // Temporary until we add MongoDB icon
    color:
      'bg-gradient-to-br from-green-500/5 to-green-400/10 border-green-400/10 text-green-500 dark:text-green-400',
  },
  Redis: {
    icon: Icons.redis, // Temporary until we add Redis icon
    color:
      'bg-gradient-to-br from-red-600/5 to-red-500/10 border-red-500/10 text-red-600 dark:text-red-400',
  },
  Firebase: {
    icon: Icons.firebase, // Temporary until we add Firebase icon
    color:
      'bg-gradient-to-br from-yellow-500/5 to-yellow-400/10 border-yellow-400/10 text-yellow-500 dark:text-yellow-400',
  },
  Supabase: {
    icon: Icons.supabase, // Temporary until we add Supabase icon
    color:
      'bg-gradient-to-br from-emerald-600/5 to-emerald-500/10 border-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  Cloudinary: {
    icon: Icons.cloudinary, // Temporary until we add Cloudinary icon
    color:
      'bg-gradient-to-br from-blue-400/5 to-blue-300/10 border-blue-300/10 text-blue-500 dark:text-blue-400',
  },
  AWS: {
    icon: Icons.aws, // Temporary until we add AWS icon
    color:
      'bg-gradient-to-br from-yellow-600/5 to-yellow-500/10 border-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  },
};

// Default config
const DEFAULT_CONFIG = {
  icon: Icons.framermotion,
  color:
    'bg-gradient-to-br from-gray-600/5 to-gray-500/10 border-gray-500/10 text-gray-700 dark:text-gray-300',
};

export function AnimatedSkills({ skills, className }: AnimatedSkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Group skills into categories for better organization
  const skillCategories = {
    frontend: ['ReactJS', 'Vite', 'TypeScript', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express.js', 'Socket.io', 'REST API', 'Go'],
    database: ['PostgreSQL', 'Prisma', 'MariaDB', 'MySQL', 'MongoDB', 'Redis'],
    cloud: [
      'Firebase',
      'Supabase',
      'Cloudinary',
      'Cloudflare',
      'AWS',
      'Docker',
    ],
  };

  // Filter skills into proper categories
  const categorizedSkills = Object.entries(skillCategories).map(
    ([category, categorySkills]) => ({
      category,
      skills: skills.filter((skill) => categorySkills.includes(skill)),
    })
  );

  return (
    <div ref={containerRef} className={cn('w-full space-y-10 py-6', className)}>
      {categorizedSkills.map(
        ({ category, skills: categorySkills }, categoryIndex) =>
          categorySkills.length > 0 && (
            <motion.div
              key={category}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-sm font-medium text-muted-foreground capitalize tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, index) => {
                  const config = SKILL_CONFIGS[skill] || DEFAULT_CONFIG;
                  const { icon: Icon, color } = config;

                  return (
                    <motion.div
                      key={skill}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg border backdrop-blur-sm',
                        'transition-all hover:shadow-md hover:border-opacity-50',
                        'hover:-translate-y-1 duration-300',
                        color
                      )}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + index * 0.05 + 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="text-lg">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )
      )}
    </div>
  );
}

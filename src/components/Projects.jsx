import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my full-stack capabilities and technical expertise.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-gradient-to-br from-secondary to-secondary/50 border border-gray-600/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <motion.div
                    animate={{ rotate: hoveredId === project.id ? 360 : 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity"
                  >
                    💻
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium border border-primary/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-gray-600/30">
                    <p className="text-xs text-gray-400 mb-3 font-semibold">KEY FEATURES:</p>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-primary mr-2">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <FaGithub size={16} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

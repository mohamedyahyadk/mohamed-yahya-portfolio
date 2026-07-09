import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-secondary/50 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className={`p-8 rounded-xl border transition-all hover:shadow-2xl ${
                  exp.highlight
                    ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/50 shadow-lg shadow-primary/20'
                    : 'bg-secondary border-gray-600/30 hover:border-primary/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4 flex-col md:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-primary font-semibold whitespace-nowrap mt-4 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

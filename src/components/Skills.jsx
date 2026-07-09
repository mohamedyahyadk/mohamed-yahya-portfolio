import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const categories = [
    { title: 'Frontend', skills: portfolioData.skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', skills: portfolioData.skills.backend, color: 'from-purple-500 to-pink-500' },
    { title: 'Database', skills: portfolioData.skills.database, color: 'from-green-500 to-emerald-500' },
    { title: 'DevOps', skills: portfolioData.skills.devops, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

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
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-1 rounded-lg mb-4 group-hover:shadow-lg transition-all`}>
                  <div className="bg-secondary p-4 rounded-md">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {category.title}
                    </h3>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-2"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                          <span className="text-gray-300 hover:text-white transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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

export default Skills

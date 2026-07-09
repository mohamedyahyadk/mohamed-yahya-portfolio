import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const About = () => {
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
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                {portfolioData.about.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {portfolioData.about.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="bg-primary/10 border border-primary/30 p-4 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <p className="text-primary font-semibold">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Box */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-8 rounded-xl text-center hover:border-primary/50 transition-colors"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
                <p className="text-gray-300">Years Experience</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 p-8 rounded-xl text-center hover:border-accent/50 transition-colors"
              >
                <h3 className="text-4xl font-bold text-accent mb-2">10+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-8 rounded-xl text-center hover:border-primary/50 transition-colors"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">4</h3>
                <p className="text-gray-300">Tech Stack Areas</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 p-8 rounded-xl text-center hover:border-accent/50 transition-colors"
              >
                <h3 className="text-4xl font-bold text-accent mb-2">3</h3>
                <p className="text-gray-300">Countries</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

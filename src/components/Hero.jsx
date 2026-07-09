import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { portfolioData } from '../data/portfolio'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-secondary via-secondary to-secondary/50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 z-10 text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-primary font-semibold text-lg mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm <span className="text-primary">{portfolioData.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl text-gray-300 mb-4"
        >
          {portfolioData.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 mb-2 text-lg"
        >
          {portfolioData.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.p
          variants={itemVariants}
          className="text-primary font-semibold mb-8 text-lg"
        >
          {portfolioData.heroSubtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-primary hover:bg-blue-400 text-secondary font-bold py-3 px-8 rounded-lg cursor-pointer transition-all transform hover:scale-105"
          >
            {portfolioData.cta.primaryText}
          </Link>

          <a
            href="#contact"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            {portfolioData.cta.secondaryText}
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8"
        >
          <motion.a
            href="https://github.com/mohamedyahyadk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaGithub size={32} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/mohamedyahyadk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaLinkedin size={32} />
          </motion.a>

          <motion.a
            href="mailto:mohamedyahyadk@gmail.com"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaEnvelope size={32} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-primary text-3xl">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'

const Contact = () => {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

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
              Let's <span className="text-primary">Connect</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              {/* Email */}
              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold group-hover:text-primary transition-colors">
                    {portfolioData.contact.email}
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">
                    {portfolioData.contact.phone}
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">
                    {portfolioData.contact.location}
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-600/30">
                <p className="text-gray-400 text-sm mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/mohamedyahyadk"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                  >
                    <FaGithub size={20} />
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/mohamedyahyadk"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>

                  <motion.a
                    href={`mailto:${portfolioData.contact.email}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                  >
                    <FaEnvelope size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-xl p-8 flex flex-col justify-between hover:border-primary/60 transition-colors"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to work together?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-blue-400 text-secondary font-bold py-3 px-6 rounded-lg transition-all text-center w-full"
              >
                Send me an Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 pt-8 border-t border-gray-600/30 text-center text-gray-400"
      >
        <p>© 2024 Mohamed Yahya. All rights reserved.</p>
      </motion.div>
    </section>
  )
}

export default Contact

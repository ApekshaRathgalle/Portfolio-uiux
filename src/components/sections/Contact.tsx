import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send, ExternalLink, Copy, Check } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { contactInfo } from '../../data/skills';

const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      copyValue: contactInfo.email,
      gradient: 'from-blue-500 to-blue-600',
      color: 'text-blue-500 dark:text-blue-400'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: 'Message me on WhatsApp',
      href: `https://wa.me/94702660480`, 
      gradient: 'from-green-500 to-green-600',
      color: 'text-green-500 dark:text-green-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: contactInfo.linkedin,
      gradient: 'from-blue-600 to-blue-700',
      color: 'text-blue-600 dark:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: contactInfo.github,
      gradient: 'from-gray-700 to-gray-900',
      color: 'text-gray-700 dark:text-gray-400'
    }
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const ContactMethod: React.FC<{ method: typeof contactMethods[0]; index: number }> = ({ method, index }) => {
    const IconComponent = method.icon;
    const isExternal = method.href.startsWith('http');
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          ease: [0.42, 0, 0.58, 1],
          delay: index * 0.1 + 0.2
        }}
        className="group relative"
      >
        <div className="flex items-center justify-between py-5 px-6 rounded-2xl 
                       bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                       border border-gray-200/50 dark:border-gray-700/50
                       hover:bg-white dark:hover:bg-gray-800
                       hover:border-emerald-500/30 dark:hover:border-emerald-400/30
                       transition-all duration-300
                       hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10">
          
          {/* Left side - Icon and content */}
          <div className="flex items-center space-x-4 flex-1">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient}
                         flex items-center justify-center shadow-lg
                         group-hover:shadow-xl transition-shadow duration-300`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 
                           group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                           transition-colors duration-300">
                {method.label}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {method.value}
              </p>
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center space-x-2">
            {/* Copy button (for email and phone) */}
            {method.copyValue && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleCopy(method.copyValue!, method.label)}
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700
                          hover:bg-emerald-100 dark:hover:bg-emerald-900/30
                          flex items-center justify-center
                          transition-colors duration-200"
                title="Copy to clipboard"
              >
                {copiedItem === method.label ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                )}
              </motion.button>
            )}
            
            {/* External link button */}
            <motion.a
              href={method.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-lg ${method.color}
                         bg-gray-100 dark:bg-gray-700
                         hover:bg-emerald-100 dark:hover:bg-emerald-900/30
                         flex items-center justify-center
                         transition-colors duration-200`}
              title={isExternal ? 'Open in new tab' : 'Contact'}
            >
              {isExternal ? (
                <ExternalLink className="w-4 h-4" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </motion.a>
          </div>
        </div>

        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${method.gradient} 0%, transparent 70%)`
          }}
        />
      </motion.div>
    );
  };

  return (
   <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-80 h-80 bg-emerald-900/20 
                     rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-900/10 
                     rounded-full blur-3xl" 
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delayChildren: 0.2,
            staggerChildren: 0.1
          }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Get In <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1], delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delayChildren: 0.2,
            staggerChildren: 0.1
          }}
          className="space-y-4 mb-16"
        >
          {contactMethods.map((method, index) => (
            <ContactMethod key={method.label} method={method} index={index} />
          ))}
        </motion.div>

        {/* Location & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 
                         dark:from-emerald-400/10 dark:to-emerald-500/10
                         backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center
                         border border-emerald-500/20 dark:border-emerald-400/20
                         relative overflow-hidden">
            
            {/* Location Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 bg-emerald-500 dark:bg-emerald-400 rounded-2xl 
                       flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30 dark:shadow-emerald-400/30"
            >
              <MapPin className="w-8 h-8 text-white" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Based in Malabe, Sri Lanka
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
            >
              Available for freelance projects and full-time opportunities. 
              Always excited to discuss new ideas and collaborations.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatedButton
                variant="primary"
                size="lg"
                href={`mailto:${contactInfo.email}`}
                icon={Send}
              >
                Start a Conversation
              </AnimatedButton>
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-20 h-20 bg-emerald-500/10 dark:bg-emerald-400/10 
                         rounded-full blur-2xl" 
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-4 left-4 w-16 h-16 bg-emerald-400/10 dark:bg-emerald-500/10 
                         rounded-full blur-xl" 
            />
          </div>

          {/* Success message for copy action */}
          {copiedItem && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="absolute top-4 right-4 bg-emerald-500 text-white 
                        px-4 py-2 rounded-lg shadow-lg text-sm font-medium
                        flex items-center space-x-2"
            >
              <Check className="w-4 h-4" />
              <span>{copiedItem} copied!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 
                         bg-emerald-100/50 dark:bg-emerald-900/20 
                         rounded-full text-sm text-emerald-700 dark:text-emerald-300
                         backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full" 
            />
            <span>Response within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
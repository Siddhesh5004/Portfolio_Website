import './animation.css';
import { Button } from './ui/moving-border';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Profile from "./Images/Profile.jpg";
import Resume from "./Images/Siddhesh_Bhelke_CR.pdf";

const Header = () => {
  const handleResumeClick = () => {
    const resumeUrl = Resume;
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

 
  return (
    <motion.header 
      className="max-w-6xl mx-auto mb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-[#151923] p-4 sm:p-8 rounded-lg relative overflow-hidden">
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-20 h-20 sm:w-20 sm:h-20 flex-shrink-0"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
          >
            {/* Theme background container */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#151923] p-[2px]">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-2 border-gray-700 hover:border-gray-500 transition-colors"
                />
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            className="flex flex-col items-center sm:items-start justify-center sm:flex-1 text-center sm:text-left"
            variants={childVariants}
          >
            <motion.h1 
              className="text-xl sm:text-2xl font-bold mb-1"
              variants={childVariants}
            >
              Siddhesh Bhelke
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3"
              variants={childVariants}
            >
             Cloud Developer | AWS & Azure Projects
            </motion.p>
            <motion.div 
              className="flex gap-4 sm:gap-4 mb-4 sm:mb-0"
              variants={childVariants}
            >
              <motion.a
                href="https://github.com/Siddhesh5004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/siddhesh-bhelke-831ab7237/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:bhelkesiddhesh@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            variants={childVariants}
            className="w-full sm:w-auto"
          >
            <div className="flex justify-center sm:justify-start">
              <Button
                onClick={handleResumeClick}
                borderRadius="1.5rem"
                className="w-full sm:w-auto dark:bg-slate-900 text-white border-neutral-700 dark:border-slate-900 text-sm sm:text-base py-2 px-6 sm:py-2 sm:px-4"
              >
                Resume
              </Button>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;







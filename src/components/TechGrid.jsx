import React from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const TechIcon = ({ icon, name, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.05, 0.75)}
      className='flex flex-col items-center'
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className='w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-tertiary p-2 sm:p-3 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#915EFF]/20 hover:shadow-lg hover:shadow-[#915EFF]/30 border border-[#915EFF]/10 hover:border-[#915EFF]/50'
      >
        <img
          src={icon}
          alt={name}
          title={name}
          className='w-12 h-12 sm:w-16 sm:h-16 object-contain filter hover:brightness-110 transition-all duration-300'
        />
      </motion.div>
      <p className='mt-2 text-center text-xs sm:text-sm text-secondary hover:text-white transition-colors duration-300 font-medium'>
        {name}
      </p>
    </motion.div>
  );
};

const TechGrid = () => {
  return (
    <div className='w-full'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The skills and tools I use</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.div
        className='mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
      >
        {technologies.map((technology, index) => (
          <TechIcon
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechGrid;

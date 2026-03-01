import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>

      {/* Purple Glow Effect */}
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Abhishek</span>
          </h1>
          <TypeAnimation
            sequence={[
              "I build Microservices & REST APIs", 2000,
              "I engineer Event Streaming with Kafka", 2000,
              "I develop with Java & Spring Boot", 2000,
              "I create React.js Web Applications", 2000,
              "I work with AWS & Oracle Cloud", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            className={`${styles.heroSubText} mt-2 text-[#915EFF] block`}
          />
          <p className='mt-4 text-secondary text-[16px] max-w-xl'>
            Software Engineer with 2+ years at Oracle • Bengaluru, India
          </p>

          {/* CTA Buttons */}
          <div className='mt-8 flex flex-wrap gap-4'>
            {/* Resume Download Button */}
            <a
              href='/resume.pdf'
              download='Abhishek_Kumar_Resume.pdf'
              className='flex items-center gap-2 bg-[#915EFF] hover:bg-[#7a4fd6] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#915EFF]/30 hover:shadow-[#915EFF]/60'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>

            {/* LinkedIn Button */}
            <a
              href='https://linkedin.com/in/abhishek-kumar-here'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 border-2 border-[#0077B5] hover:bg-[#0077B5] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
                className='w-5 h-5 object-contain'
              />
              LinkedIn
            </a>

            {/* GitHub Button */}
            <a
              href='https://github.com/Abhixs1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-xl transition-all duration-300'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
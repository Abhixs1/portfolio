import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { validateContactForm } from "../utils/validation";
import { sendEmail } from "../services/emailService";
import { useToast } from "../context/ToastContext";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const formRef = useRef();
  const { addToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      addToast("Please fix the errors in the form", "error");
      return;
    }

    setLoading(true);

    const result = await sendEmail(form);

    if (result.success) {
      addToast(result.message, "success");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      addToast(result.message, "error");
    }

    setLoading(false);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Quick contact info cards */}
        <div className='mt-6 mb-8'>
          <SocialLinks variant="contact" />
        </div>

        {/* Location info */}
        <div className='flex items-center gap-2 bg-tertiary px-4 py-2 rounded-xl border border-[#00CEA8]/20 w-fit mb-8'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#00CEA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className='text-white text-[13px]'>Bengaluru, India</span>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              id='name'
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 transition-all duration-300 ${
                errors.name
                  ? "focus:ring-[#FF6B6B] ring-2 ring-[#FF6B6B]/50"
                  : "focus:ring-[#915EFF]"
              }`}
            />
            {errors.name && (
              <span className='text-[#FF6B6B] text-sm mt-2'>{errors.name}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              id='email'
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 transition-all duration-300 ${
                errors.email
                  ? "focus:ring-[#FF6B6B] ring-2 ring-[#FF6B6B]/50"
                  : "focus:ring-[#915EFF]"
              }`}
            />
            {errors.email && (
              <span className='text-[#FF6B6B] text-sm mt-2'>{errors.email}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              id='message'
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 transition-all duration-300 ${
                errors.message
                  ? "focus:ring-[#FF6B6B] ring-2 ring-[#FF6B6B]/50"
                  : "focus:ring-[#915EFF]"
              }`}
            />
            {errors.message && (
              <span className='text-[#FF6B6B] text-sm mt-2'>{errors.message}</span>
            )}
          </label>

          <button
            type='submit'
            disabled={loading}
            className='flex items-center justify-center gap-2 bg-[#915EFF] hover:bg-[#7a4fd6] disabled:opacity-50 disabled:cursor-not-allowed py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915EFF]/30 hover:shadow-[#915EFF]/60 transition-all duration-300'
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
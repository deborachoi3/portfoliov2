import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>
          Who I am
        </p>
      <h2 className={styles.sectionHeadText}>&lt;About Me/&gt;</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a software developer with a strong foundation in Computer Science from UC Santa Cruz.
        My frontend toolkit includes React, TypeScript, JavaScript, HTML/CSS, and Figma. 
        On the backend, I work with Node.js, Python, Java, C/C++, SQL, and MongoDB. 
        I also bring experience with tools like Git, Docker, Linux, GitHub Actions, and project management platforms like Jira and Asana.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");

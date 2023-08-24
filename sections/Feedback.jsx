'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn,  staggerContainer, zoomIn } from '../utils/motion'




const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col lg:flex-row gap-6 `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative   '
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className='font-bold text-[26px]  sm:text-[32px] sm:leading-[40px] leading-[36px] text-white   '>Samantha</h4>
          <p className='font-normal mt-[8px] text-[12px]  sm:text-[18px] sm:leading-[22px] leading-[16px] text-white   '>
            Founder | Metavrsus
          </p>


        </div>
        <p className='font-normal mt-[22px] text-[16px]  sm:text-[26px] sm:leading-[45px] leading-[39px] text-white   '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat totam beatae odio ea optio maxime? Mollitia quisquam nobis ut tenetur vel, repellendus aperiam accusamus quasi in, labore, delectus dolorem.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex  flex-1 justify-center items-center relative  '
      >
        <img src="/planet-09.png" alt="planet-09" className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]     ' />
      </motion.div>


      <motion.div
        variants={zoomIn(0.4, 1)}
        className='lg:block hidden absolute md:left-[27%] left-[10%] top-[15%]'
      >
        <img src="/stamp.png" alt="stamp" className='w-[155px] h-[155px] object-contain ' />
      </motion.div>


    </motion.div>

  </section>
);

export default Feedback;

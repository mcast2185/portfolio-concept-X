import { motion } from 'framer-motion';
import React from 'react';

import styles from '../src/styles/transition.module.css';

const Transition = (OgComponent) => {
  return (
    <>
      {/* <OgComponent/> */}
      {OgComponent}
      <motion.div 
        className={styles.slideIn}
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 1, ease: [0.22,1,.36,1]}}
        />
      
      <motion.div className={styles.slideOut}
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 1, ease: [0.22,1,.36,1]}}/>
    </>
  )
}

export default Transition;
import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse}) => {
  return (
    <div className={`${styles.section} min-h-screen ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
      <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} ${reverse ? " fadeRightMini" : " fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
          <h1 className={`${reverse ? styles.blackText : styles.whiteText} ${styles.h1Text}`}>{title}</h1>
          <p className={`${reverse ? styles.blackText : styles.whiteText} ${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@dev_joseg/aaa?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div
          className={` flex-1 ${styles.flexCenter} p-8 sm:px-0`}
        >
          <img src={mockupImg} alt="Bosquejo" className={`${reverse ? " fadeLeftMini" : " fadeRightMini"} ${styles.sectionImg}`}/>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper
import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Descarga el codigo fuente!</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Obten el codigo completo en GitHub</p>
        </div>
        <button className={styles.btnPrimary}>Codigo Fuente</button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="Descarga_png" className={styles.fullImg} />
        </div>
      </div>
    </div>
  )
}

export default Download
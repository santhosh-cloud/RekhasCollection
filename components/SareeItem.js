import React from 'react';
import Image from 'next/image'
import styles from '../styles/Category.module.css'
export const SareeItem = () => {
  return <div>
      <div className={styles.imgcontainer}>
      <Image src="/img/1.jpg" layout='fill' objectFit='contain'/>
      </div>
      <p>Code</p>
      <p>Material</p>
      <p>Cost</p>
  </div>;
};
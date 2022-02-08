import Head from 'next/head'
import Image from 'next/image'
import { Category } from '../components/Category'
import {SareeItem } from '../components/SareeItem'
import styles from '../styles/Home.module.css'
import { BrowseBy } from '../components/BrowseBy'
export default function Home() {
  return (
    <div className={styles.container}>
      Rekha's Collection
      <BrowseBy/>
      <Category />
      <SareeItem />
    </div>
  )
}

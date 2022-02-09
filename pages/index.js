import Head from 'next/head'
import Image from 'next/image'
import {Header} from '../components/Header'
import { Category } from '../components/Category'
import {CategoryList} from '../components/CategoryList'
import {SareeItem } from '../components/SareeItem'
import styles from '../styles/Home.module.css'
import { BrowseBy } from '../components/BrowseBy'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <BrowseBy/>
      {/* <Category /> */}
      <CategoryList />
      {/* <SareeItem /> */}
    </div>
  )
}

import Head from 'next/head'
import { useState } from 'react';
import {useRouter} from 'next/router';
import styles from '../public/style/styles.module.css'

export default function Home() {
  const router = useRouter();

  
  return (
    <div className={styles.container}>

      <main>
        <div className={styles.title}>
          <p className={styles.titleName}>맥주 공방</p>
          <p>{router.query.userName}</p>
        </div>

      </main>

      <footer>
      <p className={styles.footer}>Developed By Resten</p>
      </footer>

      <style jsx global>{`body {background: #F5F5F5}`}</style>
     
    </div>
    
  )

}

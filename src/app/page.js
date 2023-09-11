'use client'
import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [name, setName] = useState("Swarup");
  const apple=() => {
    setName("Nexjs");
  }
  return (
    <main className={styles.main}>
      <h1>Home Page {name}</h1>
      <button onClick={()=>apple()}>Click Me</button>
    </main>
  )
}



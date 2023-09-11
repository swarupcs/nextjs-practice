'use client'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <button onClick={()=> alert("Hello next js")}>Click Me</button>
    </main>
  )
}



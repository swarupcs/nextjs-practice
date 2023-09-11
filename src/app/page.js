'use client'
import styles from './page.module.css'

export default function Home() {
  const apple=(item) => {
    alert(item);
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <button onClick={()=>apple("Fruit")}>Click Me</button>
    </main>
  )
}



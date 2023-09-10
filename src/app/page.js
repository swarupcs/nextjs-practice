import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <User></User>
      <h1>Home Page</h1>
    </main>
  )
}


const User=() => {
  return(
    <div>
      <h2>User name is Swarup</h2>
    </div>
  )
}

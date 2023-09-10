import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <User name = "Swarup"></User>
      <User name = "Nextjs"></User>
      <h1>Home Page</h1>
    </main>
  )
}


const User=(props) => {
  return(
    <div>
      <h2>User name is {props.name}</h2>
    </div>
  )
}

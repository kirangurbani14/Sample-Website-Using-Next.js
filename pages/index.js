import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>This is the home page of my first next js app</p>
        <p  className={styles.text}>This is a simple website</p>
        <Link href="/Friends">
            <a className={styles.btn}>Friends List</a>
        </Link>
    </div>
  )
} 

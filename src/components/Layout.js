import Nav from "./Nav"
import {useRouter } from 'next/router'
import styles from '../../styles/Layout.module.css'
import React from 'react'
import Image from 'next/image'

export default function Layout({children, counter, setCounter}){
    const route = useRouter()

    return(
        <React.Fragment>
            <main className={styles.main}>
                <p className={styles.description}>route checker: <code className={styles.code}>{route.pathname}</code></p>
                <p className={styles.description}>route counter: <code className={styles.code}>{counter}</code></p>
                <Nav counter={counter} setCounter={setCounter} />
                {children}
                <button onClick={()=> setCounter(0)}>
                clear counter
                </button>

            </main>

           
            <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
      </React.Fragment>
    )
}
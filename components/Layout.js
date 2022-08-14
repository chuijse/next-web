import Nav from "./Nav"
import React from 'react'
import Image from 'next/image'

export default function Layout({children, counter, setCounter}){
    

    return(
        <React.Fragment>
            <main >
                <Nav counter={counter} setCounter={setCounter} />
                {children}
            </main>

           
            <footer>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
      </React.Fragment>
    )
}
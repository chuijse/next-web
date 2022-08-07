import Nav from "./Nav"
import {useRouter } from 'next/router'

export default function Layout({children}){
    const route = useRouter()

    return(
        <main>
            <p>route checker: {route.pathname}</p>
            <Nav />
            {children}
        </main>
    )
}
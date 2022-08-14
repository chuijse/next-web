import Seo from "../components/Seo"
import Link from "next/link"



export default function Teaching() {

    return(
        <section>
            <Seo pageTitle="Teaching" />
            <h1 >Teaching</h1>
            <p>this is de Teaching page</p>
            <Link href='teaching/test01'>
                <a>test01</a>
            </Link>

        </section>
    )
    
}
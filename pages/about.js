import Layout from "../src/components/Layout"
import Seo from "../src/components/Seo"
import styles from "../styles/Pages.module.css"


export default function about() {

    return(
        <section>
            <Seo pageTitle="About" />
            <h1 className={styles.title}>About</h1>
            <p className={styles.description}>this is de about page</p>
        </section>
    )
    
}
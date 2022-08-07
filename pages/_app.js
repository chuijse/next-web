import '../styles/globals.css'
import Layout from '../src/components/Layout'
import React,{useState} from "react"




function MyApp({ Component, pageProps }) {
  const [counter, setCounter] = useState(0)

  return (
    <Layout counter={counter} setCounter={setCounter}>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp

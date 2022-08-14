import '../styles/index.scss'
import Layout from '../components/Layout'
import React,{useState} from "react"


// Example of diferent animation for each page
//https://codesandbox.io/s/framer-motion-animatepresence-react-router-dom-9dhyn?from-embed


function MyApp({ Component, pageProps }) {
  const [counter, setCounter] = useState(0)

  return (
    <Layout counter={counter} setCounter={setCounter}>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp

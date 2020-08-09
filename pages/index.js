import React from 'react'
import Head from 'next/head'
import Nav from '../components/common_components/navigation/navigation'
import Grid from '../components/page_components/grid/grid'

const Home = () => (
  <div className="appWrapper">
    <Head>
      <title>Home</title>
      <meta name="keywords" content="fotokopirnica beograd, fotokopiranje, koričenje, štampanje, plastične id kartice" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
    </Head>

   
   <Nav />
   <Grid />

    <style jsx>{`
     :global(body) {
       overflow-x: hidden;
       margin: 0;
       padding: 0;
     }
     .appWrapper {
       width: 100%;
       height: 100%;
     }
     
    `}</style>
  </div>
)

export default Home

import React from 'react'
import Head from 'next/head'
import Nav from '../components/common_components/navigation/navigation'
import Grid from '../components/page_components/grid/grid'

const Home = () => (
  <div className="appWrapper">
    <Head>
      <title>Home</title>
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap" rel="stylesheet"></link>
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

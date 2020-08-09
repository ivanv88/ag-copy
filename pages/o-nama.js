import React from 'react'
import Head from 'next/head'
import Nav from '../components/common_components/navigation/navigation'
import About from '../components/page_components/about/about'
const ONama = () => (
  <div className="appWrapper">
    <Head>
      <title>O Nama</title>
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
    </Head>

   
   <Nav />
  <About />
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

export default ONama

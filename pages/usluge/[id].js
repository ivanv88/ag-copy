import React from 'react'
import Head from 'next/head'
import Nav from '../../components/common_components/navigation/navigation'
import ServiceComponent from '../../components/page_components/service/service'
import ServiceNav from '../../components/common_components/servicenav/servicenav'

const Service = () => {
    
    return (
  <div className="appWrapper">
    <Head>
      <title>Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no,shrink-to-fit=no"/>
      <meta content="AG Copy, Fotokopirnica u samom Centru Beograda. Fotokopiranje, štampa, koričenje, izrada plastičnih ID kartica, štampa na majicama, šoljama, privescima." name="description"/>
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
    </Head>
    <Nav />
    <ServiceNav />
    <ServiceComponent /> 
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
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'štampanje-kopiranje-i-skeniranje' } },
      { params: { id: 'veliki-formati' } },
      { params: { id: 'vhs-u-digitalni-format' } },
      { params: { id: 'koričenje' } },
      { params: { id: 'reklamni-materijal-i-id-kartice' } }
    ],
    fallback: false // See the "fallback" section below
  };
}

export default Service
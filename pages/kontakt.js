import React from 'react'
import Head from 'next/head'
import Nav from '../components/common_components/navigation/navigation'
import Contact from '../components/page_components/contact'
const Kontakt = () => (
  <div className="appWrapper">
    <Head>
      <title>O Nama</title>
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
    </Head>

    <Nav />
   <div className={'wrapper'}>
      <div className={'spacer'}></div>
      <div className={'container'}>
        <div className={'contact'}>
          <Contact />
          <h2>Kontakt</h2>
          <p><strong>Adresa: </strong> Šajkaška 15b; Bul. Despota Stefana 68a, 11108 Beograd</p>
          <p><strong>Telefon: </strong> 011/ 3294 756; 066/ 5000 456</p>
          <p><strong>e-mail: </strong> kopirnica.ag@gmail.com</p>
          <h2>Radno vreme</h2>
          <p><strong>Radnim danima: </strong>09:00 - 17:00</p>
          <p><strong>Subotom: </strong>10:00 – 13:00</p>
          <p><strong>Nedeljom ne radimo.</strong></p>
          <p>U avgustu 2020. subotom ne radimo.</p>
        </div>
      </div>
   </div>
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
     .contact {
      width: 80%;
      min-width: 500px;
      max-width: 1000px;
      margin: 0 auto;
      text-align: center;
    }
    .spacer {
      width: 15vw;
      min-height: 100vh;
      min-width: 250px;
    }
    .wrapper {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      background-color: #e9e9e9;
      display: flex;
      box-sizing: border-box;
    }
    .container {
      width: calc(100% - 15vw);
      min-width: calc(100% - 250px);
      padding-top: 80px;
    }
    .container h2 {
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      font-style: italic;
      color: #333333;
      font-size: 3rem;
      text-align: center;
      letter-spacing: 2px;
      padding: 0 0 1rem 0;
  }
  .container p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    color: #333333;
  }
  .backgroundImage {
    width: 100%;
    height: 30vh;
    min-height: 400px;
    background-image: url('print.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  @media(max-width: 760px) {
    .spacer {
        display: none;
    }
    .container {
        width: 100%;
    }
    .contact {
        width: 90%;
    }
}
     
    `}</style>
  </div>
)

export default Kontakt

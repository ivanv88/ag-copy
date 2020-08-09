import React from 'react'

const About = () => {
  return (
    <div className={'aboutWrapper'}>
      <div className={'spacer'} ></div>
      <div className={'container'} >
        <div className={'about'}>
          <div className={'backgroundImage'}></div>
          <h2>O Nama</h2>
          <p>AG Copy je porodična fotokopirnica koja posluje od .. godine, a za svo ovo vreme smo stekli poverenje velikog broja stalnih mušterija koji nam se redovno vraćaju.</p>
        </div>
      </div>
      <style jsx>{`
       .about {
        width: 80%;
        min-width: 500px;
        max-width: 1000px;
        margin: 0 auto;
      }
      .spacer {
        width: 15vw;
        min-height: 100vh;
        min-width: 250px;
      }
      .aboutWrapper {
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
      .about {
          width: 90%;
      }
  }

      `}</style>
    </div>
  )
}

export default About

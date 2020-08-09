import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { ColorContext } from '../../context/colorcontext'
import Data from '../../data/services.json'


const tableStyle = {
    padding: "1rem 0",
    borderTop: "1px solid #b2b2b2",
    marginTop: "4rem"
}

const tableTitleStyle = {
    fontFamily: "'Poppins', sans-serif",
    color: "#333333",
    fontSize: "1.2rem",
    textAlign: "center",
    letterSpacing: "3px",
    padding: "2rem 0 1rem 0",
    textTransform: "uppercase"
}

const titleStyle = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: "600",
    fontStyle: "italic",
    color: "#333333",
    fontSize: "3rem",
    textAlign: "center",
    letterSpacing: "2px",
    padding: "0 0 1rem 0",
}

const tableDataStyle = {
    fontFamily: "'Poppins', sans-serif",
    color: "#333333",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    color: "#333333",
    letterSpacing: "1px",
    padding: "1rem 0 .4rem 1rem",
    borderBottom: "1px solid #b2b2b2"
}

const paragraphStyle = {
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.2rem",
    color: "#333333",
}

const tableNoteStyle = {
    fontFamily: "'Playfair Display', serif",
    color: "#333333",
    fontStyle: "italic"
}

const build = (body) => {
    let bodyArray = [];
    if((body !== undefined) && (body !== null)) {
        for(let i = 0; i < body.length; i++) {
            if(body[i].type === "p") {
                bodyArray.push(
                <div key={ i * 789 } style={ paragraphStyle }>    
                    <p key={ i * 89}>{ body[i].content }</p>
                </div>
                )
            } 
            if(body[i].type === "h2") {
                bodyArray.push(
                <div key={ i * 66 }>
                    <h2 style={ titleStyle } key={ i * 99}>{ body[i].content }</h2>
                </div>
                )
            } 
            if(body[i].type === "h3") {
                bodyArray.push(
                <div key={ i * 55 }>
                    <h2 style={ tableTitleStyle } key={ i * 97 }>{ body[i].content }</h2>
                </div>
                )
            } 
            if(body[i].type === "t") {
                bodyArray.push(
                <div key={ i * 71 } style={ tableStyle }>
                    <div key={i} 
                    style={{ display: "grid", gridTemplateColumns: "repeat(" + body[i].meta.width + ", 1fr)"  }}>
                        <div className="tableTitle" style={{ gridColumn: "span " + body[i].meta.width }}>
                            <h2 style={ tableTitleStyle } >{ body[i].meta.title }</h2>
                        </div>
                        { body[i].content.map((value, i) => (
                            <div key={ i * 77 } style={ tableDataStyle }>{ value }</div>
                        )) }
                    </div>
                <div style={ tableNoteStyle } >
                    <p>{body[i].meta.note}</p>
                </div>
                </div>
                )
            } 
           
        }
        return bodyArray;
    } else return null;
}
const buildTables = (tables) => {
    let tablesArray = [];
    if(tables !== undefined) {
        for(let i = 0; i < tables.lenght; i++) {
            if(tables[i].type === "p") {
                tables.push(<p key={i}>{ content[i].content }</p>)
            } 
        }
        return tablesArray;
    } else return null;
}

const Service = () => {
    const router = useRouter();
    const { color } = useContext(ColorContext);
    const data = Data;
    const title = data[router.query.id] !== undefined ? data[router.query.id].title : null;
    const coverImage = data[router.query.id] !== undefined ? data[router.query.id].coverImage : null;
    const body = build(data[router.query.id] !== undefined ? data[router.query.id].body : null);

    return (
        <div className="serviceWrapper" >
            <div className="spacer" ></div>
            <div className="container">
                <div className="service" >
                    <div className="coverImage" ></div>
                    <h1>{title}</h1>
                    { body }
                </div>
           </div>
    <style jsx>{`
        .spacer {
            width: 15vw;
            min-height: 100vh;
            min-width: 250px;
        }
        .serviceWrapper {
            width: 100%;
            height: 100%;
            background-color: ${color};
            display: flex;
            padding: 130px 0 0 0;
        }
        .container {
            width: calc(100% - 15vw);
            min-width: calc(100% - 250px);
        }
        .container h1 {
            text-align: center;
        }
        .service {
            width: 80%;
            min-width: 500px;
            max-width: 1000px;
            margin: 0 auto;
        }
        .service h1 {
            font-family: 'Playfair Display', serif;
            font-weight: 600;
            font-style: italic;
            color: #333333;
            font-size: 3rem;
            text-align: center;
            letter-spacing: 2px;
            padding: 0 0 1rem 0;
        }
        .coverImage {
            height: 20vw;
            width: 100%;
            background-image: url('${ coverImage }');
            background-size: cover;
            background-position: center;
        }
        @media(max-width: 760px) {
            .spacer {
                display: none;
            }
            .container {
                width: 100%;
            }
            .service {
                width: 90%;
            }
            .coverImage {
                height: 250px;
            }
            .serviceWrapper {
                padding-top: 70px;
            }
        }
    
    `}</style>
        </div>
    )
}

export default Service
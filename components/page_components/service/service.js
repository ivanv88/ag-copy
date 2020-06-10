import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { ColorContext } from '../../context/colorcontext'
import Data from '../../data/services.json'


const build = (body) => {
    let bodyArray = [];
    if((body !== undefined) && (body !== null)) {
        console.log(body)
        for(let i = 0; i < body.length; i++) {
            if(body[i].type === "p") {
                bodyArray.push(<p key={i}>{ body[i].content }</p>)
            } 
            if(body[i].type === "h2") {
                bodyArray.push(<h2 key={i}>{ body[i].content }</h2>)
            } 
            if(body[i].type === "t") {
                bodyArray.push(
                    <>
                    <div key={i} className="table" 
                    style={{ display: "grid", gridTemplateColumns: "repeat(" + body[i].meta.width + ", 1fr)"  }}>
                        <div clasName="tableTitle" style={{ gridColumn: "span " + body[i].meta.width }}>
                            <h1>{ body[i].meta.title }</h1>
                        </div>
                        { body[i].content.map((value, i) => (
                            <div className="tableData">{ value }</div>
                        )) }
                    </div>
                    <div className="tableNote" >
                    <p>{body[i].meta.note}</p>
                    </div>
                    </>
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
                    <h2>{title}</h2>
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
        .coverImage {
            height: 20vw;
            width: 100%;
            background-image: url('${ coverImage }');
            background-size: cover;
            background-position: center;
        }
    
    `}</style>
        </div>
    )
}

export default Service
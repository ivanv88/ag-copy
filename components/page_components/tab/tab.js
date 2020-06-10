import React, { useContext } from 'react'
import Link from 'next/link'
import { ColorContext } from '../../context/colorcontext'
import styles from './tab.scss'
import icons from "../../../styles/styles.scss";



const Tab = (props) => {
    const ico1 = props.data.icon[0];
    const ico2 = props.data.icon[1];
    const { color } = useContext(ColorContext);
    const url = "/usluge/" + props.data.link.toLowerCase().replace(/ /g, "-");
    
    return (
        <div className={` ${styles.tabWrapper} ${ "tabDynamicWrapper" } ${ props.data.class } `} >
        <Link href="/usluge/[id]" as={`${url}`} ><a onClick={()=>{ setColor(props.data.color) }}>    
            <h2 className={ styles.title }>{props.data.title}</h2>
            <span className={ styles.text }>{props.data.text}</span>
            <span className={` ${styles.text} ${styles.bold} `}>{props.data.text2}</span>
            <span className={ styles.text }>{props.data.text3}</span>
            <h2 className={ styles.link } >{ props.data.link }</h2>
            <div className={ styles.iconsWrapper } >    
            {(ico1 && ico2) && <div className={ styles.iconContainer } ><i className={`${icons[ico1]} ${icons[ico2]}`}></i></div>}
            <h3 className={ styles.subtitle } >{ props.data.subtitle }</h3>
            </div>
            </a></Link>
        <style jsx>{`
            .tabDynamicWrapper {
                grid-column: span ${props.data.spanC};
                grid-row: span ${props.data.spanR};
                background-color: ${props.data.color};
                ${props.data.image ? "background-image: url('" + props.data.image + "');" : ""}
                cursor: ${props.data.overlay === "false" ? "auto" : "pointer"}!important;
            }
            .tabDynamicWrapper:hover:after {
                display: ${props.data.overlay === "false" ? "none" : "block"}!important;
                transition: ${props.data.overlay === "false" ? "all 0s ease 0s" : "all .4s ease"}!important;
            }
            .tabDynamicWrapper h2 {
                 ${props.data.overlay === "false" ? "opacity: 1!important;" : ""}
            }
            .tabDynamicWrapper {
                pointer-events: ${props.data.overlay === "false" ? "none" : "auto"};
            }
            .large {
                padding: 40px 55px 30px 45px;  
            }
            .large span {
                font-size: 2.8vw;
            }
            .small {
                padding: 25px 30px;
            }   
            i {
                -webkit-text-stroke: 2px ${props.data.color}; 
            }        

        `}</style>
        </div>
    )
}

export default Tab
import React, { useContext } from 'react'
import Link from 'next/link'
import { ColorContext } from '../../context/colorcontext'
import { ServiceNavContext } from '../../context/servicenavcontext'
import styles from './tab.scss'
import icons from "../../../styles/styles.scss";



const Tab = (props) => {
    const ico1 = props.data.icon[0];
    const ico2 = props.data.icon[1];
    const { color, setColor } = useContext(ColorContext);
    const { setActive } = useContext(ServiceNavContext);
    const url = "/usluge/" + props.data.link.toLowerCase().replace(/ /g, "-");
    
    return (
        <div className={` ${styles.tabWrapper} ${ "tabDynamicWrapper" } ${ props.data.class } `} >
            <Link href="/usluge/[id]" as={`${url}`} >
                <a onClick={()=>{ setColor(props.data.bgColor); setActive(props.data.index) }}>
                    <h2 className={ styles.title }>{props.data.title}</h2>
                    {props.data.text ? <span className={ styles.text }>{props.data.text}</span> : ''}
                    {props.data.text2 ? <span className={` ${styles.text} ${styles.bold} `}>{props.data.text2}</span> : ''}
                    {props.data.text3 ? <span className={ styles.text }>{props.data.text3}</span> : ''}
                    {props.data.link ? <h2 className={ styles.link } >{ props.data.link }</h2> : ""}
                    {props.data.icon.length > 0 ? (<div className={ styles.iconsWrapper } >    
                    {(ico1 && ico2) && <div className={ styles.iconContainer } ><i className={`${icons[ico1]} ${icons[ico2]}`}></i></div>}
                    <h3 className={ styles.subtitle } >{ props.data.subtitle }</h3>
                    </div>) : ("")}
                </a>
            </Link>
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
            @media(max-width: 980px) {
                .large span {
                    font-size: 2.6rem;
                }
                .small {
                    padding: 25px 25px;
                }   
                .tabDynamicWrapper.small {
                    grid-column: span 1;
                }
                .tabDynamicWrapper.small:last-child {
                    grid-column: span 2;
                }
            }
            @media(max-width: 760px) {
                .large {
                    padding: 30px 35px 30px 35px;  
                }
            }
            @media(max-width: 490px) {
                .tabDynamicWrapper.small {
                    grid-column: span 1;
                }
                .tabDynamicWrapper.large {
                    grid-column: span 1;
                }
                .tabDynamicWrapper.small:last-child {
                    grid-column: span 1;
                }
                .large span {
                    word-break: break-word;
                }
            }
            

        `}</style>
        </div>
    )
}

export default Tab
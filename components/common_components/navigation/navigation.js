import React, { useState } from 'react'
import Link from 'next/link'
import styles from './navigation.scss'
import icons from "../../../styles/styles.scss";

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const links = [ "Početna", "Usluge" ,"O nama", "Kontakt" ];
    const hrefs = links.map( value  => {
        if(value.indexOf(" ") >= 0) {
            return "/" + value.replace(/ /, "-").toLocaleLowerCase();
        } else if (value.toLocaleLowerCase() === "početna") {
            return "/"
        } else if (value.toLocaleLowerCase() === "usluge") {
            return "/usluge/štampanje-kopiranje-i-skeniranje"
        } else {
            return "/" + value.toLocaleLowerCase();
        }
    });
    
    return (
        <>
        <div className={` ${ styles.overlay } ${ open ?  "overlayOpen" : "overlayClosed" }`} onClick={() => setOpen(!open)}></div>
        <div className={` ${ styles.verticalNavbarWrapper } ${ open ?  "menuOpen" : "menuClosed" }`}>
            <div className={ styles.menuButton } onClick={() => setOpen(!open)} >
                <span className={ styles.topSpan }></span>
                <span className={ styles.bottomSpan }></span>
            </div>
            <div className={ styles.verticalNavbarContainer }>
                <div className={ styles.logo }>AG Copy</div>
                <div className={ styles.menuWrapper }>
                    <div className={ styles.menuContainer }>
                        <ul className={ styles.links }>
                            { links.map((val, i) => (
                            <li key={ val } >
                            <Link href={ hrefs[i] }><a className={ styles.link } >{ val }</a></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={ styles.address }>
                    <ul className={styles.icons} >
                        <li><a href='' ><i className={`${icons.fab} ${icons['fa-facebook']}`}></i></a></li>
                        <li><a href='' ><i className={`${icons.fab} ${icons['fa-instagram']}`}></i></a></li>
                        <li><a href='https://goo.gl/maps/NX64qxvgth81Qw7x5' ><i className={`${icons.fas} ${icons['fa-map-marked-alt']}`}></i></a></li>
                    </ul>
                    <ul className={ styles.info } >
                        <li>Ulica Šajkaška 44</li>
                        <li>011/ 3294 756</li>
                        <li>066/ 5000 456</li>
                        <li><a href="mailto:kopirnica.ag@gmail.com">kopirnica.ag@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <style jsx>{`
            .menuOpen, .menuClosed {
                transform: translateX(0);
            }
            .overlayOpen, .overlayClosed {
                display: none;
            }
            @media(max-width: 760px) {
                .menuOpen {
                    transform: translateX(0);
                }
                .menuClosed {
                    transform: translateX(-250px);
                }
                .overlayOpen {
                    display: block;
                }
            }
        
        `}</style>
        </>
    )
}

export default Navigation

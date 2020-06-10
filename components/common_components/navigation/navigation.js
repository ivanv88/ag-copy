import React from 'react'
import Link from 'next/link'
import styles from './navigation.scss'
import icons from "../../../styles/styles.scss";

const Navigation = () => {
    const links = [ "Usluge", "O nama", "Radovi", "Kontakt" ];
    const hrefs = links.map( value  => {
        if(value.indexOf(" ") >= 0) {
            return "#" + value.replace(/ /, "-").toLocaleLowerCase();
        } else if (value.toLocaleLowerCase() === "usluge") {
            return "/"
        } else {
            return "#" + value.toLocaleLowerCase();
        }
    });
    
    return (
        <div className={ styles.verticalNavbarWrapper }>
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
                        <li><a href='' ><i className={`${icons.fas} ${icons['fa-map-marked-alt']}`}></i></a></li>
                    </ul>
                    <ul className={ styles.info } >
                        <li>Ulica Šajkaška 44</li>
                        <li>+381 64 333 1 222 </li>
                        <li><a href="mailto:kopirnica@gmail.com">kopirnica@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation

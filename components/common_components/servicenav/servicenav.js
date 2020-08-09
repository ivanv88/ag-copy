import React, { useContext, useState } from 'react'
import { routes, links } from '../../data/serviceroutes'
import { ColorContext } from '../../context/colorcontext'
import { ServiceNavContext } from '../../context/servicenavcontext'
import Link from 'next/link'
import styles from './servicenav.scss'

const ServiceNav = () => {

    const { color, setColor } = useContext(ColorContext);
    const { active, setActive } = useContext(ServiceNavContext);
    const [ isOpen, setOpen ] = useState(false);

    return (
        <div className={` ${ styles.navWrapper } ${ !isOpen ? 'openDrawer' : ""}`} >
            <div className={ styles.navSpacer } ></div>
            <ul className={ styles.nav } >
                {routes.map((v, i) => (
                <li key={ i * 32 } className={ active == i ? "activeLink" : "" } >
                    <Link href="/usluge/[id]" as={`/usluge/${ v }`}  >
                        <a onClick={ () => {setColor(links[i].color); setActive(i); setOpen(!isOpen) } } >{links[i].link}</a>
                    </Link>
                </li>

                ))}
                <li className={"drawer"} onClick={ () => setOpen(!isOpen) } >USLUGE</li>
            </ul>
                <style jsx>{`
                    ul {
                        background-color: ${color};
                    }
                    .activeLink a {
                        color: #d03b28;
                    }
                    .drawer {
                        border-top: 1px solid #b2b2b2;
                        cursor:pointer;
                        color: #333333;
                        font-size: 18px;
                        padding-top: 29px;
                        padding-bottom: 20px;
                        margin-top: 12px;
                    }
                    .openDrawer {
                        transform: translateY(-264px);
                    }
                    @media(min-width: 761px) {
                        .drawer {
                            display: none;
                        }
                        .openDrawer {
                            transform: translateY(0);
                        }
                    }
                `}</style>
        </div>
    )
}

export default ServiceNav

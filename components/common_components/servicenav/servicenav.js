import React, { useContext } from 'react'
import { routes, links } from '../../data/serviceroutes'
import { ColorContext } from '../../context/colorcontext'
import Link from 'next/link'
import styles from './servicenav.scss'

const ServiceNav = (props) => {

    // const routes = routes;
    // const links = links
    const { color, setColor } = useContext(ColorContext);

    return (
        <div className={ styles.navWrapper } >
            <div className={ styles.navSpacer } ></div>
            <ul className={ styles.nav } >
                {routes.map((v, i) => (
                <li key={ i * 32 } ><Link href="/usluge/[id]" as={`/usluge/${ v }`}  ><a>{links[i]}</a></Link></li>

                ))}

            </ul>
                <style jsx>{`
                    ul {
                        background-color: ${color};
                    }
                `}</style>
        </div>
    )
}

export default ServiceNav

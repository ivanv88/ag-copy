import React, { useEffect, useState, useRef } from 'react'
import Tab from '../tab/tab'
import styles from './grid.scss'

const services = [
    {
        "title": "Kopirnica",
        "text": "Mi smo AG Copy, ",
        "link": "",
        "text2": "vasa kreativna fotokopirnica! ",
        "text3": "Radno vreme: pon-pet 09-17h, vase originale mozete slati na kopirnica@gmail.com ",
        "spanC": "2",
        "spanR": "2",
        "color": "#e9e9e9",
        "class": "large",
        "icon": [],
        "overlay": "false"
    },
    {
        "title": "Digitalna stampa", 
        "subtitle": "Detalji i cene",
        "link": "Štampanje i kopiranje",
        "icon": ["far", "fa-hand-point-right"],
        "spanC": "1",
        "spanR": "1",
        "color": "#dad2d2",
        "class": "small"
    },
    {
        "title": "Portfolio", 
        "link": "",
        "spanC": "1",
        "spanR": "1",
        "color": "#bcbdbc",
        "class": "small",
        "image": "mug.jpg",       
        "icon": [],
        "overlay": "false"
    },
    {
        "title": "Stampanje", 
        "link": "Reklamni materijal",
        "subtitle": "Detalji i cene",
        "spanC": "1",
        "spanR": "1",
        "color": "#bcbdbc",
        "class": "small",
        "icon": ["far", "fa-hand-point-right"]
    },
    {
        "title": "Plotovanje", 
        "subtitle": "Detalji i cene",
        "link": "Veliki formati",
        "spanC": "1",
        "spanR": "1",
        "color": "#dad2d2",
        "class": "small",
        "icon": ["far", "fa-hand-point-right"]
    },
    {
        "title": "Stampanje", 
        "link": "Koricenje",
        "subtitle": "Detalji i cene",
        "spanC": "1",
        "spanR": "1",
        "color": "#b3c5bd",
        "class": "small",
        "icon": ["far", "fa-hand-point-right"]
    },
    {
        "title": "Stampanje", 
        "link": "",
        "spanC": "2",
        "spanR": "1",
        "color": "#e9e9e9",
        "class": "small",
        "image": "bags.jpg",
        "icon": [],
        "overlay": "false"
    },
    {
        "title": "Digitalizacija", 
        "link": "VHS u digitalni format",
        "subtitle": "Detalji i cene",
        "spanC": "1",
        "spanR": "1",
        "color": "#b3c5bd",
        "class": "small",
        "icon": ["far", "fa-hand-point-right"]
    }
   
]

const Grid = () => {
    return (
        <div className={ styles.gridWrapper } >
            <div className={ styles.spacer }></div>
            <div className={ styles.servicesWrapper }>
                {services.map((value, index) => (
                    <Tab  key={ index * 64 } data={ value } />

                ))}
            </div>
        </div>
    )
}

export default Grid

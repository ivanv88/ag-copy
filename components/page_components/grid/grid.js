import React from 'react'
import Tab from '../tab/tab'
import styles from './grid.scss'

const services = [
    {
        "title": "Kopirnica",
        "text": "Mi smo AG Copy, ",
        "link": "",
        "text2": "Vaša kreativna fotokopirnica! ",
        "text3": "Radno vreme: pon-pet 09-17h, Vaša dokumenta možete slati email-om na kopirnica.ag@gmail.com",
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
        "link": "Štampanje kopiranje i skeniranje",
        "icon": ["far", "fa-hand-point-right"],
        "spanC": "1",
        "spanR": "1",
        "color": "#dad2d2",
        "bgColor": "#e9e9e9",
        "class": "small",
        "index": "0"
    },
    {
        "title": "razno", 
        "link": "Ostale usluge",
        "subtitle": "Detalji i cene",
        "spanC": "1",
        "spanR": "1",
        "color": "#bcbdbc",
        "bgColor": "#fff2f2",
        "class": "small",
        "image": "mug.jpg",       
        "icon": ["far", "fa-hand-point-right"],
        "index": "5"
    },
    {
        "title": "Štampanje", 
        "link": "Reklamni materijal i ID kartice",
        "subtitle": "Detalji i cene",
        "spanC": "1",
        "spanR": "1",
        "color": "#bcbdbc",
        "bgColor": "#fff2f2",
        "class": "small",
        "icon": ["far", "fa-hand-point-right"],
        "index": "2"
    },
    {
        "title": "Plotovanje", 
        "subtitle": "Detalji i cene",
        "link": "Veliki formati",
        "spanC": "1",
        "spanR": "1",
        "color": "#dad2d2",
        "bgColor": "#f4f1d3",
        "class": "small",
        "icon": ["far", "fa-hand-point-right"],
        "index": "1"
    },
    {
        "title": "Štampanje", 
        "link": "Koričenje",
        "subtitle": "Detalji i cene",
        "spanC": "1",
        "spanR": "1",
        "color": "#c2d7ce",
        "bgColor": "#f4f1d3",
        "class": "small",
        "icon": ["far", "fa-hand-point-right"],
        "index": "3"
    },
    {
        "title": "Bul. Despota Stefana 68a (U Pasažu)", 
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
        "color": "#c2d7ce",
        "bgColor": "#e9e9e9", 
        "class": "small",
        "icon": ["far", "fa-hand-point-right"],
        "index": "4"
    }
   
]

const Grid = () => {
    return (
        <div className={ styles.gridWrapper } >
            <div className={ styles.spacer }></div>
            <div className={ styles.servicesWrapper }>
                {services.map((value, index) => (
                    <Tab  key={ index * 64 } data={ value }/>

                ))}
            </div>
        </div>
    )
}

export default Grid

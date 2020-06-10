export const links = ["Štampanje i kopiranje", "Veliki formati", "Reklamni materijal", "Koričenje", "Digitalizacija"]

export const routes = links.map((v, i) => v.toLocaleLowerCase().replace(/ /g, "-"))

export default {links, routes}
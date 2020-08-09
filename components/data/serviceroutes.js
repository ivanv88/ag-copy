export const links = [
  {
    link: "Štampanje kopiranje i skeniranje",
    color: "#e9e9e9"
  }, 
  {
    link: "Veliki formati",
    color: "#f4f1d3"
  }, 
  {
    link: "Reklamni materijal i id kartice",
    color: "#fff2f2"
  },
  {
    link: "Koričenje",
    color: "#f4f1d3"
  },
  {
    link: "VHS u digitalni format",
    color: "#e9e9e9" 
  }
]

export const routes = links.map((v, i) => v.link.toLocaleLowerCase().replace(/ /g, "-"))

export default {links, routes}
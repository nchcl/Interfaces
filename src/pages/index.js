import * as React from "react"

import Seo from "../components/seo"
import LayoutBasico from "../layouts/LayoutBasico"

import "../styles/global.css"

const IndexPage = () => (
  <LayoutBasico>
    <Seo title="Home" />
    <h1> Rediseño web de Supervisor/Practicante</h1>
    <p style={{marginBottom:"2rem"}}>Bienvenido a nuestra página!</p>
    <p> Suponga que usted es un supervisor de prácticas en el área informática y necesita realizar las siguientes actividades:
    </p>
    <ol className= "actividades">
      <li> Revisar el avance de la estudiante Katherine Salgado: Conocer su progreso y proyecto asignado.</li>
      <li> Terminar la evaluación de Adrián Menares: Realizar cuestionario.</li>
      <li> Contactar al ex-practicante Esteban Barrios.</li>
    </ol>

  </LayoutBasico>
)

export default IndexPage

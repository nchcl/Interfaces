import React, {useState, useEffect} from 'react'

import LayoutBasico from "../layouts/LayoutBasico"
import Seo from "../components/seo"

import Card from "../components/card"; 
import "../styles/practicantes.css"

const SecondPage = () => {
  const [agreed, setAgreed] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem('evaluado')) {
      setAgreed(true)
    }
  }, [])

  return (
      <LayoutBasico>
        <Seo title="Practicantes" />
        <h1 className="practicantes-title ">Practicantes</h1>
        <p>Lista de practicantes</p>
        
        <Card 
        Src = "nacho.png"
        Name = "Ignacio Figueroa"
        Practice = "Practica Industrial"
        Duration = "3 Meses"
        Progress = "20"
        To ="/practicante1"
        Evaluation="/cuestionario"
        />

        <Card 
        Src = "kathy.png"
        Name = "Katherine Salgado"
        Practice = "Practica Profesional"
        Duration = "2 Meses"
        Progress = "50"
        To ="/practicante2"
        Evaluation="/cuestionario"
        />

        {!agreed
        ?   
          <Card 
            Src = "adrian.png"
            Name = "Adrián Menares"
            Practice = "Practica Industrial"
            Duration = "3 Meses"
            Progress = "100"
            To ="/practicante3"
            Evaluation="/cuestionario"
          />
        : <p></p>
      }
   
    </LayoutBasico>
  )
  

}

export default SecondPage

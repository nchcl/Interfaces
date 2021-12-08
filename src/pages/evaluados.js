import React, {useState, useEffect} from 'react'

import LayoutBasico from "../layouts/LayoutBasico"
import Seo from "../components/seo"
import Img from "../components/image";
import "../styles/evaluados.css"

const SecondPage = () => {
  const [agreed, setAgreed] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem('evaluado')) {
      setAgreed(true)
    }
  }, [])


  return (
    <LayoutBasico>
      <Seo title="Evaluados" />
      <h1 className="practicantes-title">Evaluados</h1>
      <p>Practicantes evaluados</p>
      {agreed
        ?   
        <div className="container bcontent">
          <div className="card" style={{width: "50%"}}>
            <div className="row no-gutters">
              <div className="col-sm-6">
                <Img fileName ="adrian.png" className="imagen"/>
              </div>
              <div className="col-sm-6">
                <div className="card-body">
                  <h5 className="card-title">Nombre: Adrián Menares</h5>
                  <p className="card-text">Tipo Práctica: Practica Industrial</p>
                  <p className="card-text">Duración: 3 Meses</p>
                  <p className="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                    adrian.menares@sansano.usm.cl
                  </p>
                  <div className="card-nota" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className="nota-texto">96</div>
                  </div>
                  <div className="card-buttons">
                    <div className="btn btn-primary" style={{marginRight:"2rem"}}>Contactar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : <p></p>
      }
      <div className="container bcontent">
          <div className="card" style={{width: "50%"}}>
            <div className="row no-gutters">
              <div className="col-sm-6">
                <Img fileName ="esti.jpg" className="imagen"/>
              </div>
              <div className="col-sm-6">
                <div className="card-body">
                  <h5 className="card-title">Nombre: Esteban Barrios</h5>
                  <p className="card-text">Tipo Práctica: Practica Profesional</p>
                  <p className="card-text">Duración: 2 Meses</p>
                  <p className="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                    esteban.barrios@sansano.usm.cl
                  </p>
                  <div className="card-nota" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className="nota-texto">95</div>
                  </div>
                  <div className="card-buttons">
                    <div className="btn btn-primary" style={{marginRight:"2rem"}}>Contactar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </LayoutBasico>
  )
  
}
export default SecondPage

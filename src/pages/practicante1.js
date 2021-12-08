import * as React from "react"

import LayoutBasico from "../layouts/LayoutBasico"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import "../styles/practicante.css"
import {ProgressBar} from 'react-bootstrap';



const PracticantePage =() => (
    <LayoutBasico>
        <Seo title="Practicante 1" />
        
        <div className="perfil-container">
        
            <Link to="/practicantes" className="flecha-volver">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                </svg>
            </Link>
     
            <div className="foto-perfil">
                <StaticImage
                        src="../images/nacho.png"
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fixed"
                        width={140}
                        height={140}
                        />
            </div>

            <h2 className="name">Ignacio Figueroa</h2>
            <div className="iconos">
                <div className="icono-mail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                </div>

                <div className="icono-linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                </div>
            </div>
            Proyecto Asignado: Desarrollo Web "dashi.cl" <br></br>
            Progreso:
            <ProgressBar now={20} label='20%' />

        </div>
        <div>

        </div>
        <br></br>
        <br></br>
        <div className="container" style = { {width: "90%"} }>
            <div className="row">

  
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Pendiente</th>
                            <th scope="col">En progreso</th>
                            <th scope="col">Listo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Creación pagina 3</td>
                            <td>Realización de diseño</td>
                            <td>Implementación de header</td>
                            </tr>
                            <tr>
                            <td>Agregar efectos hover en el menu</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Termino de footer</td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    
        
    </LayoutBasico>
)

export default PracticantePage
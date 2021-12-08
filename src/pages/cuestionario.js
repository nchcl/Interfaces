import React, {useState, useEffect} from 'react'

import Seo from "../components/seo"
import { Link } from "gatsby"
import LayoutBasico from "../layouts/LayoutBasico"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/global.css"
import "../styles/cuestionario.css"

const CuestionarioPage = () => {
    const [, setAgreed] = useState(false)
    useEffect(() => {
        if (sessionStorage.getItem('evaluado')) {
          setAgreed(true)
        }
      }, [])

    const handleClick = () => {
        sessionStorage.setItem('evaluado', 'true')
        setAgreed(true)
    }
    
    const Evaluar = <Link to="/practicantes" className="btn btn-success finalizar" onClick={handleClick}>Finalizar</Link>
    
    return (
        <LayoutBasico>
            <Seo title="Cuestionario" />

            <div className="container-evaluacion">
     
                <Link to="/practicantes" className="flecha-volver">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                        </svg>
                </Link>

                <h1>Evaluación</h1>

            </div>
            <div className="perfil-container">
    
                <div className="foto">
                    <StaticImage
                    src="../images/adrian.png"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="fixed"
                    width={140}
                    height={140}
                    />
                </div>

                <h2 className="name">Adrián Menares</h2>
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
                Proyecto Asignado: "Aplicación mobile CNTV" <br/>

            </div>

            <div className = "comments">
                <h5>Comentarios generales</h5>
                <textarea>
                    Llega tarde los lunes.
                </textarea>
            </div>
            
            <table className="tg">
                <thead>
                <tr>
                    <th className="tg-0pky"> </th>
                    <th className="tg-0pky">1</th>
                    <th className="tg-0pky">2</th>
                    <th className="tg-0pky">3</th>
                    <th className="tg-0pky">4</th>
                    <th className="tg-0pky">5</th>
                    <th className="tg-0pky">6</th>
                    <th className="tg-0pky">7</th>
                    <th className="tg-0pky">8</th>
                    <th className="tg-0pky">9</th>
                    <th className="tg-0pky">10</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tg-0pky" rowspan="2">CAPACIDAD <br></br> Mide la agilidad mental y la facilidad para aceptar nuevas tareas.</td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="capacidad"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Necesita ayuda detallada para realizar un trabajo. </td>
                    <td className="tg-0pky" colspan="3">Necesita cantidad media de ayuda. Aprende metódicamente.</td>
                    <td className="tg-0pky" colspan="3">Necesita poca ayuda para efectuar un trabajo.</td>
                    <td className="tg-0pky" colspan="2">Aprende pronto, rara vez necesita ayuda.</td>
                </tr>
                <tr>
                    <td className="tg-0pky" rowspan="2">CONFIANZA <br></br> Mide si completa u trabajo con constancia y precisión </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="confianza"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Comúnmente termina un trabajo. Necesita vigilancia permanente para evitar errores frecuentes.</td>
                    <td className="tg-0pky" colspan="3">Generalmente completa un trabajo, necesita vigilancia para evitar uno que otro error.</td>
                    <td className="tg-0pky" colspan="3">Completa sus trabajos. Rara vez comente errores. Generalmente revisa su propio trabajo.</td>
                    <td className="tg-0pky" colspan="2">Completa sus trabajos con precisión y buen criterio. Siempre revisa su propio trabajo. </td>
                </tr>
                <tr>
                    <td className="tg-0pky" rowspan="2">APLICACIÓN O EMPEÑO <br></br> Mide la cantidad de errores y la atención que presta al trabajo.</td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="aplicacion"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Necesita supervisión permanente par que preste atención al trabajo. </td>
                    <td className="tg-0pky" colspan="3">Trabaja irregularmente. Normalmente presta atención al trabajo. </td>
                    <td className="tg-0pky" colspan="3">Generalmente pone esfuerzo y atención. </td>
                    <td className="tg-0pky" colspan="2">Siempre pone esfuerzo, contenido y muy cuidadosa atención.</td>
                </tr>
                <tr>
                    <td className="tg-0pky" rowspan="2">ADAPTABILIDAD <br></br>Mide la facultad para adaptarse a nuevas circunstancias.</td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="adaptabilidad"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Se adapta con vacilación y resistencia.</td>
                    <td className="tg-0pky" colspan="3">Generalmente se adapta pero con dificultad.</td>
                    <td className="tg-0pky" colspan="3">Se adapta a diversas circunstancias con poca dificultad. </td>
                    <td className="tg-0pky" colspan="2">Cambia fácilmente y con poco esfuerzo.</td>
                </tr>
                <tr>
                    <td className="tg-0pky" rowspan="2">INICIATIVA<br></br>Mide el trabajo que pueda hacerse sin instrucciones concretas.</td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="actitud"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Espera que le asignen trabajo y le enseñen como buscarlo.</td>
                    <td className="tg-0pky" colspan="3">Termina sus tareas pero se atiene a la ayuda ajena. </td>
                    <td className="tg-0pky" colspan="3">Emprende sus trabajos hábilmente y como se necesita.</td>
                    <td className="tg-0pky" colspan="2">Desempeña el trabajo sin preguntar y hace más de lo que comúnmente se espera.</td>
                </tr>
                <tr>
                    <td className="tg-0pky" rowspan="2">ACTITUD PARA TRABAJAR EN EQUIPO <br></br>Mide la cooperación con losdemás.</td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="iniciativa"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Rehuye responsabilidades. Es egoísta.</td>
                    <td className="tg-0pky" colspan="3">Coopera sólo cuando le conviene.</td>
                    <td className="tg-0pky" colspan="3">Generalmente coopera con los demás.</td>
                    <td className="tg-0pky" colspan="2">Siempre coopera. Se interesa por el bien de toda la organización.</td>
                </tr>
                <tr>
                    <td className="tg-0pky" rowspan="2">CONOCIMIENTO <br></br>Mide los conocimientos tecnológicos.</td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="conocimiento"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Tiene conocimientos elementales incompletos. </td>
                    <td className="tg-0pky" colspan="3">Tiene conocimientos parciales.</td>
                    <td className="tg-0pky" colspan="3">Satisfactorio, tiene base general y técnica.</td>
                    <td className="tg-0pky" colspan="2">Tiene conocimientos suficientes para desenvolverse técnica y profesionalmente.</td>
                </tr>
                <tr>
                    <td className="tg-0pky" rowspan="2">ASISTENCIA <br></br> Mide puntualidad y cumplimiento.</td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                    <td className="tg-0pky">
                        <input type="radio" name="asistencia"></input>
                    </td>
                </tr>
                <tr>
                    <td className="tg-0pky" colspan="2">Ausencia permanente. </td>
                    <td className="tg-0pky" colspan="3">Ocasionalmente ausente. Generalmente por buenas razones. </td>
                    <td className="tg-0pky" colspan="3">Muy regular. Rara vez se ausenta. </td>
                    <td className="tg-0pky" colspan="2">Registro plenamente satisfactorio.</td>
                </tr>
                </tbody>
            </table>

            <div className = "links-container">
                {Evaluar}
            </div>
        
        </LayoutBasico>
    )
}
  
  export default CuestionarioPage
  
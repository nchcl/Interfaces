import * as React from "react"

import {ProgressBar} from 'react-bootstrap';

import { Link } from "gatsby"

import Img from "./image";

import "../styles/card.css"

const Card = (props)  =>{
    var evaluateButton;
    if (props.Progress === "100") {
        evaluateButton = <Link to= {props.Evaluation} className="btn btn-success">Evaluar</Link>
    }       
    return (
    <div className="container bcontent">
        <div className="card" style={{width: "50%"}}>
            <div className="row no-gutters">
                <div className="col-sm-6">
                <Img fileName ={props.Src} className="imagen"/>
                </div>
                <div className="col-sm-6">
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {props.Name}</h5>
                        <p className="card-text">Tipo Práctica: {props.Practice}</p>
                        <p className="card-text">Duración: {props.Duration}</p>
                        <p className="card-text" >Progreso: 
                        </p>
                        <ProgressBar now={props.Progress} label={props.Progress + '%'} />
                        <div className="card-buttons">
                            <Link to= {props.To} className="btn btn-primary" style={{marginRight:"2rem"}}>Ver perfil</Link>
                            {evaluateButton}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card


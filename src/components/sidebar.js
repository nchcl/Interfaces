import * as React from "react"
import { Link } from "gatsby"

import "../styles/sidebar.css"


const Sidebar = () => (
    <div className="sidebar" style={{with:"30%"}}>
        <h1 className="sidebar-title">Menu</h1>
        <Link to="/" className="sidebar-item w3-button">Home</Link>
        <Link to="/practicantes" className="sidebar-item w3-button">Practicantes</Link>
        <Link to="/evaluados" className="sidebar-item w3-button">Evaluados</Link>
    </div>
)



export default Sidebar
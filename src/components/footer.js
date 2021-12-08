import * as React from "react"

import "../styles/footer.css"

const Footer = () => (
    <footer className = "footer">
        <div className ="footer-container">
            <h5 className= "title">
                © {new Date().getFullYear()} realizado por Grupo 8
            </h5>
        </div>
    </footer>
)

export default Footer
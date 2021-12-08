import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/header.css"

const Header = (props) => (
  <header className = "header">
    <div className="header-container">
      <Link className="site-logo" to="/"> 
      <StaticImage
      src="../images/logo_di.png"
      alt="A dinosaur"
      placeholder="blurred"
      height={80}
      className="logo"
      />
      <h3 className ="title">{props.siteTitle}</h3>
      </Link>
      <div className="user-container">
        <h1 className="user-name">Juan Valdés</h1>

        <StaticImage
          src="../images/juan.png"
          alt="A dinosaur"
          placeholder="blurred"
          height={80}
          className="logo"
        />
      </div>
    
    </div>
  </header>
)

export default Header

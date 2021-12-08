import * as React from "react"

import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

import "../styles/LayoutBasico.css";

const LayoutBasico = (props)=>{
    const {children} = props;

    return (
        <>
        <Header siteTitle="UTFSM Practicas" />
        <Sidebar/>
        <main className = "main">
            <div className = "content">
                {children}
            </div>
            <Footer/>
        </main>
        </>
    );
};


export default LayoutBasico;
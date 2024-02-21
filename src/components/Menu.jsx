import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Menu = () => {
    const [activeLink, setActiveLink] = useState("HOME");


    const linkActive = {
        borderLeft: "1px solid #8A8A8A",
        borderRight: "1px solid #8A8A8A",
        borderColor: "#8A8A8A",
        borderRadius: "0px",
        borderBottom: activeLink === "HOME" || activeLink === "STARSHIPS" ? "1px solid #ffff" : "0px solid #8A8A8A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 16px",
        fontFamily: "Helvetica",
    }
    const linkInactive = {
        borderLeft: "1px solid #8A8A8A",
        borderRight: "1px solid #8A8A8A",
        borderColor: "#8A8A8A",
        borderRadius: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 16px",
        fontFamily: "Helvetica",
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black" aria-label="Tenth navbar example">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08" style={{ paddingTop: "0", height: "41px", borderTop: "1px solid #8A8A8A", borderBottom: "1px solid #8A8A8A" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" style={activeLink === "HOME" ? linkActive : linkInactive} onClick={() => setActiveLink("HOME")}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/starships" className="nav-link" style={activeLink === "STARSHIPS" ? linkActive : linkInactive} onClick={() => setActiveLink("STARSHIPS")}>STARSHIPS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Menu;
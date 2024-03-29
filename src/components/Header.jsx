import logo from "../assets/swlogo.png";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import kids from "../assets/kids.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { apiContext } from "../context/apiContext";
import { doSignOut } from "../firebase/auth";

function Header() {
    const navigate = useNavigate()
    const { userLoggedIn } = useContext(apiContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start align-self-start" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-2">
                            <img src={tiktok} alt="" style={{ height: "20px", width: "20px" }} />
                        </li>
                        <li className="nav-item me-2">
                            <img src={instagram} alt="" style={{ height: "20px", width: "20px" }} />
                        </li>
                        <li className="nav-item me-2">
                            <img src={twitter} alt="" style={{ height: "25px", width: "25px" }} />
                        </li>
                        <li className="nav-item me-2">
                            <img src={facebook} alt="" style={{ height: "25px", width: "25px" }} />
                        </li>
                        <li className="nav-item me-2">
                            <img src={youtube} alt="" style={{ height: "25px", width: "25px" }} />
                        </li>
                        <li className="nav-item me-2">
                            <div className="d-flex" style={{ height: "30px", color: "#8A8A8A" }}>
                                <div className="vr"></div>
                            </div>
                        </li>
                        <li className="nav-item me-2">
                            <img src={kids} alt="" style={{ height: "25px", width: "40px" }} />
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand me-5" href="#">
                    <img className="img-fluid mx-auto d-block" src={logo} alt="Navbar" style={{ maxWidth: '30%' }} />
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {userLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">Welcome, {userLoggedIn.name}</span>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => { doSignOut().then(() => { navigate('/') }) }} className='nav-link'>LOG OUT</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link" >LOG IN</Link>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">|</span>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">SIGN UP</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

            </div>
        </nav>
    );
}
export default Header;
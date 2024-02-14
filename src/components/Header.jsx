import logo from "../assets/swlogo.png";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import kids from "../assets/kids.svg";

function Header() {
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
                        <li className="nav-item">
                            <a className="nav-link" href="#">LOG IN</a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">|</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SIGN UP</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Header;
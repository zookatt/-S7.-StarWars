import logo from "../assets/swlogo.png";

function Header() {
    return (
        <>
            <nav className="navbar bg-black" style={{ height: "10em" }}>
                <div className="container-fluid text-center">
                    <div className="col">
                        <span></span>
                    </div>

                    <div className="col-4">
                        <img
                            className="img-fluid navbar-brand mb-0 h1"
                            src={logo}
                            alt="Navbar"
                            style={{ maxWidth: '40%' }}
                        />
                    </div>

                    <div className="col-4 text-end">
                        <span className="me-3 fs-5" style={{ color: "#8A8A8A" }}>LOG IN // SIGN UP</span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;

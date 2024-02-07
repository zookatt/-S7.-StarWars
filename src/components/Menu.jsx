

export const Menu = () => {
    return (
        <>
            <nav className="navbar bg-black" style={{ height: "3em", borderTop: "1px solid #8A8A8A", borderBottom: "1px solid #8A8A8A" }}>
                <div className="container-fluid text-center justify-content-center">


                    <div className="col-1 mx-1">
                        <span style={{ textTransform: "uppercase", color: "#8A8A8A" }}>HOME</span>
                    </div>

                    <div className="col-1 mx-1">
                        <span style={{ textTransform: "uppercase", color: "#8A8A8A" }}>STARSHIPS</span>
                    </div>


                </div>
            </nav>
        </>
    );
}

export default Menu;

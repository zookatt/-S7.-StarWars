import { useContext } from "react";
import { apiContext } from "../context/apiContext";
import star from "../assets/star.webp"
export default function StarshipData() {

    const { starships } = useContext(apiContext);
    const firstStarship = starships[4];

    if (!starships || starships.length === 0) {
        return <div className="container"><p>Loading...</p></div>;
    }
    const fileStarshipStyle = {

        border: "1px solid #1111",
        borderLeft: "1px solid #FF5733",
        color: "#8A8A8A",
        backgroundColor: "#1D1E1F",
        padding: "10px",
        fontFamily: "'Roboto', sans-serif",
        borderRadius: "0 10px 10px 0"
    };

    const dataStyle = {
        backgroundImage: `url(${star})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",

    }

    return (
        <>
            <div className="container mt-5" >
                <div style={dataStyle}>
                    <div style={{ height: "3em", borderTop: "1px solid #8A8A8A", borderBottom: "1px solid #8A8A8A" }}>
                        <h3 className="ms-3 mt-1">STARSHIP</h3>
                    </div>
                    <div className="row mt-5">

                        <div className="col">
                            <p>IMG</p>
                        </div>


                        <div className="col" style={fileStarshipStyle}>
                            <h4>{firstStarship.name.toUpperCase()}</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laudantium deserunt quod dolor? Nostrum modi autem porro similique laboriosam id cupiditate </p>
                            <div className="row">
                                <div className="col">
                                    <p>Model:{firstStarship.model} </p>
                                    <p>Cost in credits:{firstStarship.cost_in_credits} </p>
                                    <p>Atmospheric Speed:{firstStarship.max_atmosphering_speed}</p>
                                </div>
                                <div className="col">
                                    <p>Manufacturer:{firstStarship.manufacturer} </p>
                                    <p>Length:{firstStarship.length}</p>
                                    <p>Crew: {firstStarship.crew}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};
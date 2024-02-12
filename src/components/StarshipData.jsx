import { useContext, useState, useEffect } from "react";
import { apiContext } from "../context/apiContext";
import star from "../assets/star.webp"

export default function StarshipData() {

    const { selectedStarship, imageUrl } = useContext(apiContext);


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
                        <h3 className="ms-3 mt-1" style={{ color: "#8A8A8A" }}>STARSHIP</h3>
                    </div>
                    <div className="row mt-5">

                        <div className="col">
                            <img src={imageUrl} alt="" />
                        </div>


                        <div className="col" style={fileStarshipStyle}>
                            <h4 className="fs-3">{selectedStarship && selectedStarship.name}</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laudantium deserunt quod dolor? Nostrum modi autem porro similique laboriosam id cupiditate </p>
                            <div className="row">
                                <div className="col">
                                    <p>Model: {selectedStarship.model} </p>
                                    <p>Cost in credits: {selectedStarship.cost_in_credits} </p>
                                    <p>Atmospheric Speed: {selectedStarship.max_atmosphering_speed}</p>
                                </div>
                                <div className="col">
                                    <p>Manufacturer: {selectedStarship.manufacturer} </p>
                                    <p>Length: {selectedStarship.length}</p>
                                    <p>Crew: {selectedStarship.crew}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};
import { useContext } from "react";
import { apiContext } from "../context/apiContext";


function List() {

    const { starships } = useContext(apiContext);


    const lineStarshipStyle = {
        marginBottom: "1rem",
        border: "1px solid #1111",
        color: "#8A8A8A",
        backgroundColor: "#1D1E1F",
        borderRadius: "5px",
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
    };

    return (

        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {starships && starships.map((starship, index) => (
                            <div key={index}>
                                <p style={lineStarshipStyle}>
                                    {starship.name.toUpperCase()}
                                    <br />
                                    {starship.model}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

export default List;
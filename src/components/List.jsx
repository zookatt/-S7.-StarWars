import { useContext } from "react";
import { apiContext } from "../context/apiContext";
import StarshipData from "./StarshipData";
import Button from "../utils/Button";


function List() {
    const { userLoggedIn } = useContext(apiContext);
    const { starships, handleClick, selectedStarship } = useContext(apiContext);


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

        <> {userLoggedIn}
            {selectedStarship && <StarshipData />}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {starships && starships.map((starship, index) => (
                            <div key={index} onClick={() => handleClick(starship)}>
                                <p style={lineStarshipStyle} >
                                    {starship.name.toUpperCase()}
                                    <br />
                                    {starship.model}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Button />
                </div>
            </div>

        </>

    );
}

export default List;




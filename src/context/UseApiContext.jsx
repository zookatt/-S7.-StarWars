import React, { useState, useEffect } from "react";
import { apiContext } from "./apiContext";

const UseApiContext = ({ children }) => {
    const [starships, setStarships] = useState([]);
    const [selectedStarship, setSelectedStarship] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);



    // llamada a api
    useEffect(() => {
        const callApiStarships = async () => {
            const urlStarships = "https://swapi.py4e.com/api/starships/?page=1";

            try {
                const response = await fetch(urlStarships);
                const { results } = await response.json();

                const starshipDetails = await Promise.all(
                    results.map(async (starship) => {
                        const { name, url } = starship;
                        const responseStarship = await fetch(url);
                        const { model, cost_in_credits, max_atmosphering_speed, manufacturer, length, crew } = await responseStarship.json();
                        console.log(`${name}\n${model}\n${url}`);
                        return { id: starship.url.split("/").slice(-2, -1)[0], name, model, url, cost_in_credits, max_atmosphering_speed, manufacturer, length, crew };
                    })
                );

                setStarships(starshipDetails);


            } catch (error) {
                console.log(error);
            }
        };

        callApiStarships();
    }, []);


    // handlers
    const handleClick = (starship) => {
        setSelectedStarship(starship);
        const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`;
        setImageUrl(imageUrl);
    };

    return (
        <apiContext.Provider value={{ starships, handleClick, selectedStarship, imageUrl }}>
            {children}
        </apiContext.Provider>
    );
};


export default UseApiContext;
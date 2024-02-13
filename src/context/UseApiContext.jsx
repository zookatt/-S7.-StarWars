import React, { useState, useEffect } from "react";
import { apiContext } from "./apiContext";

const UseApiContext = ({ children }) => {
    const [starships, setStarships] = useState([]);
    const [selectedStarship, setSelectedStarship] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [page, setPage] = useState(1);


    //llamar a api
    useEffect(() => {

        const callApiStarships = async () => {
            try {
                const response = await fetch(`https://swapi.py4e.com/api/starships/?page=${page}`);
                const { results } = await response.json();

                const starshipDetails = await Promise.all(
                    results.map(async (starship) => {
                        const { name, url } = starship;
                        const responseStarship = await fetch(url);
                        const { model, cost_in_credits, max_atmosphering_speed, manufacturer, length, crew } = await responseStarship.json();
                        return { id: starship.url.split("/").slice(-2, -1)[0], name, model, url, cost_in_credits, max_atmosphering_speed, manufacturer, length, crew };
                    })
                );

                if (page === 1) {
                    setStarships(starshipDetails);
                } else {
                    setStarships(prevStarships => [...prevStarships, ...starshipDetails]);
                }

            } catch (error) {
                console.log(error);
            }

        };

        callApiStarships();

    }, [page]);



    //handlers:
    //handler para imagen de nave
    const handleClick = (starship) => {
        setSelectedStarship(starship);
        const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`;
        setImageUrl(imageUrl);
    };
    //handler para siguente pagina de naves
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <apiContext.Provider value={{ starships, handleClick, selectedStarship, imageUrl, handleNextPage, page }}>
            {children}
        </apiContext.Provider>
    );
};


export default UseApiContext;

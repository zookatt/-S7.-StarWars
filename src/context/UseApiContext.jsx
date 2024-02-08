import React, { useState, useEffect } from "react";
import { apiContext } from "./apiContext";

const UseApiContext = ({ children }) => {
    const [starships, setStarships] = useState([]);

    let url = "https://swapi.py4e.com/api/starships/";

    useEffect(() => {
        const callApi = async () => {
            let goToNextPage = true;
            const fetchedStarships = [];

            while (goToNextPage) {
                try {
                    const response = await fetch(url);

                    const { results, next } = await response.json();

                    const starshipDetails = await Promise.all(
                        results.map(async (starship) => {
                            const { name, url } = starship;
                            const responseStarship = await fetch(url);
                            const { model, cost_in_credits, max_atmosphering_speed, manufacturer, length, crew } = await responseStarship.json();
                            console.log(`${name}\n${model}`);
                            return { name, model, cost_in_credits, max_atmosphering_speed, manufacturer, length, crew };
                        })
                    );

                    fetchedStarships.push(...starshipDetails);

                    if (next) {
                        url = next;
                    } else {
                        goToNextPage = false;
                    }

                } catch (error) {
                    console.log(error);
                    goToNextPage = false;
                }
            }
            setStarships(fetchedStarships);
        };

        callApi();
    }, []);



    return (
        <apiContext.Provider value={{ starships }}>
            {children}
        </apiContext.Provider>
    );
};

export default UseApiContext;
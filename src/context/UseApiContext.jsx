import React, { useState, useEffect } from "react";
import { apiContext } from "./apiContext";
import nopicture from "../assets/nopicture.png";
import { auth } from "../firebase/firebase.js"
import { onAuthStateChanged } from "firebase/auth";


const UseApiContext = ({ children }) => {
    const [starships, setStarships] = useState([]);
    const [selectedStarship, setSelectedStarship] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [page, setPage] = useState(1);
    //auth
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);



    const updateUserLoggedIn = (user) => {
        setUserLoggedIn(user);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    //llamar a api starwars
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
        const starshipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`;
        fetch(starshipImageUrl)
            .then(response => {
                if (response.ok) {
                    setImageUrl(starshipImageUrl);
                } else {
                    setImageUrl(nopicture);
                }
            })
            .catch(() => setImageUrl(nopicture));
    };
    //handler para siguente pagina de naves
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <apiContext.Provider value={{ value, starships, handleClick, selectedStarship, imageUrl, handleNextPage, page, userLoggedIn, updateUserLoggedIn }}>
            {!loading && children}
        </apiContext.Provider>
    );
};
export default UseApiContext;


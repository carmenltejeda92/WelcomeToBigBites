import React, { useState, useEffect } from 'react';

const Homepage = () => {
    const [dog, setDog] = useState([{}])
    const getDog = async()=>{
    const url = 'https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=golden%20retriever';
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '8585c97282msh92d53c3affc0d28p190d69jsn6848a6977c6c',
        'X-RapidAPI-Host': 'dogs-by-api-ninjas.p.rapidapi.com'
        }
        };

        try {
        const response = await fetch(url, options);
        const result = await response.json();
        setDog(result);
        } catch (error) {
        console.error(error);
        }
        }

    useEffect(()=>{
    getDog()
  }, [])

    console.log("DOG OBJECT: ", dog)


    return (
        <div> 
            <img src={dog[0].image_link}></img>
        </div>
    );
};

export default Homepage;
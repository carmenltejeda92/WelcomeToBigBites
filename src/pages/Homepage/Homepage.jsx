import React, { useState, useEffect } from 'react';
import NextDog from '../../components/NextDog';


const Homepage = () => {
    const dogs=[
        "German Shepherd",
        "Bulldog",
        "Chihuahua",
        "Labrador Retriever",
        "Pug",
        "Border Collie"
    ]

    const [dog, setDog] = useState([{}])
    const [counter, setCounter] = useState(0)

    const getDog = async(doggies)=>{
    const url = `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${doggies}`;
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
        let rand = Math.round(Math.random()*dogs.length)  
        console.log(dogs)
        getDog(dogs[rand])
    }, [counter])

    console.log("DOG OBJECT: ", dog)


    return (
    <div> 
        <h1>{dog[0].name}</h1>
        <h4>Life expectancy: {dog[0].max_life_expectancy}</h4>
        <h4>Max weight: {dog[0].max_weight_male}</h4>
        <img src={dog[0].image_link}></img>
        <NextDog counter={counter} setCounter={setCounter}/>
    </div>
    );
};

export default Homepage;
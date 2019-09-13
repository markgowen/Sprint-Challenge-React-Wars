import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';

export default function StarWarsList() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            const people = response.data.results;
            console.log('Star Wars SWAPI', people)
            setPeople(people);
            console.log(people)
        })
        .catch(error => {
            console.log('No Star Wars people were returned', error);
        })
    },[])

    return (
        <div className='Container'>
            <div className='CardRow'>
                {people.map(list => {
                    return (
                        <StarWarsCard key={list.id}
                        name={list.name}
                        gender={list.gender}
                        height={list.height}
                        mass={list.mass}
                        />
                    )
                })}
                
            </div>
        </div>
    )
}
import React from 'react'
import './CharacterList.css'
import { useCharacters } from '../hooks/useCharacter';

export default function CharacterList() {
    
    const {error,loading,data} = useCharacters();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div className='character'>
            {data.characters.results.map(char => {
                return (<div>
                    <img src={char.image} />
                    <h2>{char.name}</h2>
                </div>
                )
            })}
        </div>
    )
}

import React from 'react'
import { useQuery, gql } from '@apollo/client'
import './CharacterList.css'

const GET_CHARACTERS = gql`
query {
  characters {
    results {
      id
      name
      image
    }
  }
}
`;

export default function CharacterList() {
    const { error, loading, data } = useQuery(GET_CHARACTERS);
    console.log(error, loading, data);
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

import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import "./Character.css"
import { useParams } from 'react-router';

export default function Character() {
  const {id} = useParams();
  const { data, error, loading } = useCharacter(id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='character'>
      <img src={data.character.image} width={750} height={750} />
      <div className='character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='character-episode'>
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

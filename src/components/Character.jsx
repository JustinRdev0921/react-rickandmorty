import React from 'react'

function Character({character}) {
    return (
        <div className='text-center p-4'>
            <h3>{character.name}</h3>
            <img className='img-fluid rounded-pill' src={character.image} alt={character.name} />
            <p>Origen: {character.origin.name}</p>
            <p>Status: {character.status}</p>
            <p>Especie: {character.species}</p>

        </div>
    )
}

export default Character
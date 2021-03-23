import React from 'react'

export const HogarSeguro = ({titulo, imagen, descripcion}) => (
    <div className='my-4'>
        <img src={imagen} alt={titulo}/>
        <h4 className='font-extrabold text-right mr-8 text-xl my-1'>{titulo}</h4>
        <p className='text-justify mr-8 ml-10 text-base'>{descripcion}</p>
    </div>
)
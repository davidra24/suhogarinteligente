import React from 'react'

export const Producto = ({titulo, descripcion, imagen}) => (
    <div className='mt-8 mx-10'>
        <h4 className='text-2xl font-extrabold text-center'>{titulo}</h4>
        <p className='text-base text-justify'>{descripcion}</p>
        <img className='w-4/6 mx-auto object-' src={imagen} alt={titulo}/> 
    </div>
)
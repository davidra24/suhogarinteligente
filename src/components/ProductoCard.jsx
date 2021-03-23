import React from 'react'

export const ProductoCard = ({imagen, titulo, descripcion}) => (
    <div className='shadow-2xl mb-8 w-10/12 flex flex-col md:flex-row justify-center items-center'>
        <figure>
            <img className='w-full object-cover' src={imagen} alt=""/>
        </figure>
        <div className='p-4 bg-gray-300'>
            <h4 className='font-extrabold text-xl text-center pb-4'>{titulo}</h4>
            <p className='text-sm text-justify '>{descripcion}</p>
        </div>
    </div>
)
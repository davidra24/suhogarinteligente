import React from 'react'

export const ProductoCard = ({imagen, titulo, descripcion}) => (
    <div className='shadow-2xl mb-8 w-10/12 md: flex flex-col md:flex-row justify-center 
        items-center md:justify-between md:bg-gray-300 lg:w-5/12 lg:items-stretch '>
        <figure className='md:w-5/12'>
            <img className='w-full object-contain lg:object-fill h-full' src={imagen} alt=""/>
        </figure>
        <div className='p-4 bg-gray-300 h-full md:w-6/12 md:mr-8 md:pt-10'>
            <h4 className='font-extrabold text-xl text-center pb-4'>{titulo}</h4>
            <p className='text-sm text-justify '>{descripcion}</p>
        </div>
    </div>
)
import React from 'react';
import moneda from '../images/monedailu.svg'
import bombillo from '../images/bombilloilu.svg'
import casa from '../images/casitailu.svg'
import { Body } from './Body';

const beneficiosArray = [
  {
    image: moneda,
    title: 'Ahorras dinero',
    benefit: 'Bajos precios para su instalación',
  },
  {
    image: casa,
    title: 'Calidad de vida',
    benefit: 'Confort en el estar en tu hogar',
  },
  {
    image: bombillo,
    title: 'Eficiencia energética',
    benefit: 'Controlas y bajas el gasto de energía',
  },
];

export const Header = () => (
  <div className='header'>
    <div className='header__background mb-8'>
      <h1 className='font-medium text-5xl bg-gray-400 -mt-1 pt-12 md:text-right md:pr-10'>
        SU HOGAR <br />
        <strong className='font-extrabold'>INTELIGENTE</strong>
      </h1>
      <span className='line-header__title md:ml-72'></span>
      <span className='sentence-header__tech md:w-4/12'>
        <blockquote className='quote'>
          TECNOLOGÍA al alcance de tu mano
        </blockquote>
      </span>
    </div>
    <div className="flex w-screen flex-col justify-center md:flex-row md:flex-wrap lg:flex-row ">
      {beneficiosArray.map((benefit) => (
        <div className='mx-auto w-10/12 md:w-5/12 lg:w-4/12 lg:-mt-10' key={benefit.title}>
          <figure className='w-3/12 mx-auto h-3/6 lg:h-4/6 '>
            <img className='h-full' src={benefit.image} alt={benefit.title} />
          </figure>
          <div className='w-full flex mt-2 mb-4'>
            <h3 className='w-5/12 text-2xl font-bold text-right'>{benefit.title}</h3>
            <div className='w-2/12 flex justify-center'>
              <span className='header-benefit__description-line'></span>
            </div>
            <p className='w-5/12 text-lg'>{benefit.benefit}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

import React from 'react';
import { ProductoCard } from '../components/ProductoCard';
import { Producto } from '../components/Producto';
/** IMAGENES */
import conector from '../images/conector.jpg';
import cortinas from '../images/cortina.jpg';
import flecha from '../images/flechailu.svg';
import parlante from '../images/parlante.jpg';
import parlante2 from '../images/parlante2.jpg';
import parlante3 from '../images/parlante3.jpg';

import aspiradora from '../images/aspiradora.jpg';
import jabon from '../images/jabon.jpg';
import bombillo from '../images/bombillo.jpg';
import remote from '../images/Broadlink Remote 2.jpg';

import cerradura from '../images/cerradura.jpg';
import camara from '../images/camara.jpg';

export const Body = () => {
  const nuestrosProductos = [
    {
      imagen: conector,
      titulo: 'CONECTORES WIFI',
      descripcion:
        'Admite múltiples dispositivos y función de sincronización, se puede utilizar para una gama de dispositivos y aparatos, utiliza la función de temporizador de cuenta regresiva integrada para cargar móviles y portátiles y ampliar su vida útil evitando que se sobrecarguen sus baterías.',
    },
    {
      imagen: cortinas,
      titulo: 'CORTINAS',
      descripcion:
        'Motor de batería de alta calidad, inalámbrico y recargable, un cable USB incluido. Cargar una vez puede estar en espera durante 6 meses como máximo. Control remoto de 15 canales en la mayoría de 15 tonos y puede inclinar la tela cuando la tela está totalmente hacia abajo',
    },
  ];

  const algunosProductos = [
    {
      imagen: aspiradora,
      titulo: 'ROBOT ASPIRADORA',
      descripcion:
        'Es una excelente manera de comenzar a limpiar su hogar de manera más inteligente. Simplemente prográmelo para limpiar la suciedad, el polvo y los escombros diarios con la aplicación Robot HOME o su asistente de voz.',
    },
    {
      imagen: jabon,
      titulo: 'DISPENSADOR DE JABÓN AUTOMÁTICO',
      descripcion:
        'Prevenga la contaminación de gérmenes y bacterias, gracias al libre contacto con materiales. Es gel liquido, no Gel Grumoso o sólido. Hacerle limpieza eventualmente para evitar que se tapen las válvulas.',
    },
    {
      imagen: bombillo,
      titulo: 'BOMBILLO LED WIFI',
      descripcion:
        'Con los bombillos inteligentes puedes iluminar tus espacios de increíbles formas, puedes utilizarlo para una gran variedad de colores y luminosidad, ponerlo a funcionar al ritmo de la música y puedes personalizar tus escenarios y temporizar sus funcionalidades.',
    },
    {
      imagen: remote,
      titulo: 'BROADLINK REMOTE',
      descripcion:
        'Mini control remoto universal Broadlink Bestcon RM4C Mini, nueva tecnología Fastcon, concentrador de control WiFi + IR para vida doméstica inteligente, compatible con Alexa y Google Home, para todos los dispositivos domésticos controlados por infrarrojos por Broadlink.',
    },
  ];

  const hogarSeguro = [
    {
      imagen: cerradura,
      titulo: 'CERRADURA INGELIGENTE',
      descripcion:
        'Ya no tendrás que llevar llaves ahorra tiempo al abrir la puerta con tu huella clave o tarjeta en menos de 0.3 segundos, puedes envirale a la persona que desees una clave temporal con tiempo limitado por medio de la aplicación móvil.',
    },
    {
      imagen: camara,
      titulo: 'CÁMARAS DE SEGURIDAD',
      descripcion:
        'Con tecnología avanzada de conexión WiFi, después de conectar la cámara con wifi en casa y puedes ver la transmisión en directo grabación remota a velocidad de transmisión WiFi sin problemas, no importa dónde estés en la oficina o en el centro comercial, sin límites de distancia.',
    },
  ];

  return (
    <div className='w-screen'>
      <article className='w-full flex items-end justify-center md:mb-10'>
        <h2 className='text-3xl w-10/12 font-extrabold text-center lg:mt-12'>
          ENCUENTRA NUESTROS PRODUCTOS
        </h2>
        <figure className='w-1/12'>
          <img
            className='w-full md:w-4/12 -ml-10 lg:-ml-32'
            src={flecha}
            alt='flecha-productos'
          />
        </figure>
      </article>
      <article className='flex justify-center flex-wrap lg:justify-evenly w-full'>
        {nuestrosProductos.map((producto) => (
          <ProductoCard key={producto.titulo} {...producto} />
        ))}
      </article>
      <div className='bg-blue-500 ml-10 mr-2 z-10 relative md:w-8/12 md:ml-4'>
        <h3 className='font-extrabold text-2xl text-white py-5 pl-4 pr-20'>
          ASISTENTES VIRTUALES <br /> PARA TU HOGAR
        </h3>
      </div>
      <div className='-mt-10 z-0 relative md:flex md:flex-wrap md:items-baseline md:justify-between lg:items-baseline'>
        <figure className='md:w-5/12 lg:w-4/12 lg:order-2'>
          <img className='lg:object-fill' src={parlante2} alt='parlante 1' />
        </figure>
        <figure className='md:w-7/12 lg:w-4/12 lg:order-3'>
          <img className='lg:object-fill' src={parlante} alt='parlante 2' />
        </figure>
          <figure className='md:mt-2 lg:w-4/12 lg:order-1'>
            <img className='lg:object-fill md:object-cover lg:h-48'  src={parlante3} alt='parlante 3' />
          </figure>
          <div className='p-6 m-4 shadow-2xl rounded-xl lg:order-4 lg:py-10 lg:px-20'>
            <h5 className='text-blue-600 text-2xl text-center mb-2 font-extrabold'>
              PARLANTES INTELIGENTES
            </h5>
            <p className='text-sm text-justify'>
              Los parlantes inteligentes presentan un diseño elegante y compacto
              ofrece voces nítidas y bajos equilibrados, para un sonido completo
              que puede disfrutar en cualquier parte del hogar. Pídele que te
              cuente un chiste, reproduzca música, contestes preguntas, ponga
              las noticias, configure alarmas y más
            </p>
        </div>
      </div>
      <div>
        <h2 className='font-extrabold text-3xl text-center mt-4'>
          ALGUNOS PRODUCTOS
        </h2>
        <section className='mx-10 md:flex md:flex-wrap md:mx-auto md:justify-around md:items-baseline'>
          {algunosProductos.map((algunProducto) => (
            <Producto key={algunProducto.titulo} {...algunProducto} />
          ))}
        </section>
      </div>
      <section className='flex justify-center flex-col'>
        <h2 className='text-3xl w-full font-extrabold text-center text-blue-600 mt-4'>
          <div className='flex justify-center flex-col md:flex-row '>
            <span className='-ml-20 md:mx-2'>HOGAR SEGURO</span>
            <span className='ml-20 md:mx-2'>HOGAR SERENO</span>
          </div>
        </h2>
        <section>
          <article className='my-4 md:flex md:w-full'>
            <img
              className='md:w-6/12'
              src={hogarSeguro[0].imagen}
              alt={hogarSeguro[0].titulo}
            />
            <div className='lg:mt-20'>
              <h4 className='font-extrabold text-right mr-8 text-xl my-1'>
                {hogarSeguro[0].titulo}
              </h4>
              <p className='text-justify mr-8 ml-8 text-base'>
                {hogarSeguro[0].descripcion}
              </p>
            </div>
          </article>
          <article className='my-4 md:flex md:w-full md:mt-10'>
            <img
              className='md:w-6/12 md:order-2'
              src={hogarSeguro[1].imagen}
              alt={hogarSeguro[1].titulo}
            />
            <div className='md:order-1 lg:mt-20'>
              <h4 className='font-extrabold text-left ml-8 text-xl my-1'>
                {hogarSeguro[1].titulo}
              </h4>
              <p className='text-justify mr-8 ml-8 text-base'>
                {hogarSeguro[1].descripcion}
              </p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

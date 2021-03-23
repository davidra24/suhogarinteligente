import React from 'react';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export const Whatsapp = () => (
  <div className='w-screen h-screen flex z-50 justify-end items-center fixed'>
    <WhatsAppWidget
      phoneNumber='+573024291183'
      textReplyTime='Normalmente contesta el mismo día'
      message='Bienvenido, ¿Estás listo para empezar a vivir en el futuro?'
      companyName='Su hogar inteligente'
      sendButton='Enviar'
    />
  </div>
);

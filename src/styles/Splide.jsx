import  '@splidejs/splide/dist/css/splide.min.css';
import  { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
 
import React from 'react'
import Carrossel from '../components/carrossel';

export default function splide() {
    const Splide = new Splide( '.splide' ).mount( { AutoScroll } );

  return (
   <Carrossel/>
  )
}


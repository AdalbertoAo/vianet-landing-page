import React from 'react'
import Layout from './Layout'
import NavBar from './UI/NavBar.jsx';
import Text from "./UI/Text.jsx"
import Button from './UI/Button.jsx';

export default function Header() {
  return (
    <div className='bg-[#0F172A] h-auto w-full rounded-br-[150px]'>
        <Layout >
          <NavBar />
          <div className='flex flex-col md:flex-row justify-between my-10 items-center'>

            <div className='flex flex-col max-w-full md:gap-5 gap-8  '>
              
            <Text 
            tag='h1' 
            className='leading-20'>
              Conectamos Empresas ao futuro
              </Text>

              <Text 
              tag='p' 
              className={`max-w-[30.6875rem] w-full text-pretty overflow-hidden break-words`}>
                Do desenvolvimento à formação,
                oferecemos soluções digitais que
                impulsionam a produtividade e
                transformam a forma como sua
                empresa atua.
              </Text>

              <Button 
              variant='secundary' 
              className="md:w-[30rem] ">
                Saber Mais
              </Button>
            </div>
            <img src="/assets/programador.svg" alt="" className="w-dvh hidden md:block" />
          </div>
            
        </Layout>
    </div>
    
   
  )
}



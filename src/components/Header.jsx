import React from 'react'
import Layout from './Layout'
import NavBar from './UI/NavBar.jsx';
import Text from "./UI/Text.jsx"
import Button from './UI/Button.jsx';

export default function Header() {
  return (
    <div className='bg-[#0F172A] h-full overflow-y-hidden rounded-br-[150px]'>
        <Layout>
          <NavBar />
          <div className='flex justify-between mt-12 items-center'>

            <div className='flex flex-col gap-5 x-xl'>
            <Text tag='h1' className='leading-20'>
              Conectamos Empresas ao futuro
              </Text>

              <Text tag='p' className='w-[491px]'>
                Do desenvolvimento à formação, 
                oferecemos soluções digitais que 
                impulsionam a produtividade e 
                transformam a forma como sua 
                empresa atua.
              </Text>

              <Button variant='secundary' w="137px">Saber Mais</Button>
            </div>
            <img src="/assets/programador.svg" alt="" />
          </div>
            
        </Layout>
    </div>
    
   
  )
}



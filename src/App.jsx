
import Carrossel from "./components/UI/Carrossel.jsx"
import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"

function App() {

  return (

       
    <div className="bg-blue-950">
      <Header/>
    <Carrossel/>
          <section className=" bg-blue-900 h-200px w-200px flex flex-row space-x-10 rounded-tl-4xl rounded-br-4xl box-border p-24">
         <Card
         className={"  text-blue-950 bg-white rounded-xl p-7 "}>
          <img src="public\assets\code 1.svg" className=" h-fit max-w-10" />
               <h1 className="font-bold"> Soluções Web </h1>
           <h4 className="box-border p-6">
            Desenvolvemos websites
             profissionais,
           asseguramos registo 
           de domínios,
           hospedagem confiável
            e disponibilizamos
             soluções de IT 
           através da nossa plataforma
            de e-commerce.
            </h4>
           <a href="" className="p-1 text-black font-bold has-hover:to-blue-700 right-3">Ler mais</a>
         </Card>
          <Card        
         className={" w-300px h-100px text-blue-950 bg-white rounded-xl  p-3 "}>
           
           <img src="public\assets\handshake 1.svg" className="h-fit max-w-10"/>
            <h1 className="font-bold"> Consultoria de TI</h1>
           <h4 className="box-border p-6">
            Desenvolvemos websites 
            profissionais,
           Formação prática
            e especializada em áreas
             essenciais: 
          Marketing Digital, 
          Linux (básico e avançado),
           Lógica de Programação,
           Web Design e
            Administração de Sistemas.
            </h4>
           <a href="" className="p-1 text-black font-bold ">Ler mais</a>
         </Card>
          <Card     
         className={"  w-300px h-200px text-blue-950 bg-white rounded-xl  p-3 "}>
           <img src="public\assets\graduation-cap 2.svg" className="h-fit max-w-10  "/>
           <h1 className="font-bold ">Academia de TI</h1>
           <h4 className="box-border p-6 ">
            Planeamento e implementação 
            de soluções de TI:
           redes estruturadas,
           virtualização,
           sistemas de telefonia VoIP 
           e gestão documental para ...
            </h4>
          <a href="" className="p-1 text-black font-bold">Ler mais</a>
         </Card>
      </section>
    </div>



  )
}

export default App
 
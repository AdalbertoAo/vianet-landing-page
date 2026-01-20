export default function NavBar (){
  return (
    <div className="bg-gray-800 flex items-center justify-center gap-30">
       <img
      src="public\assets\logo2.svg" 
      className=" " /> 

      <ul className="w-[23rem] h-[1.5rem] flex gap-[30px] text-white font-normal text-lg ">
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Serviços</li>
        <li>Academia</li>

      </ul>
      
    </div>
  );
}
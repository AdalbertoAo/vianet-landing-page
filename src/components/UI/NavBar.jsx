import Button from "./Button";

export default function NavBar (){
  return (

    <div className=" flex items-center justify-between">
      <div className="flex gap-14 items-center">
        <img src="public\assets\logo2.svg"  /> 
        <ul className="flex text-white font-normal gap-7.5 text-lg ">

          <li className="hover:text-[#0693e3]"><a href="#">Home</a></li>
          <li className="hover:text-[#0693e3]"><a href="">Sobre nós</a></li>
          <li className="hover:text-[#0693e3]"><a href="">Serviços</a></li>
          <li className="hover:text-[#0693e3]"><a href="">Academia</a></li>
        </ul> 
      </div>

      <div className="flex gap-10.5 items-center ">
        <a href="#"
        className="text-xl text-white font-bold hover:text-[#0693e3]"
        >
          Login
          </a>
        <Button>Academia</Button>
      </div>
      
      
    </div>
  );
}
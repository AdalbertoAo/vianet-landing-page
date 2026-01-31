import Button from "./Button";
import { useState } from 'react';
import { TextAlignJustify, X } from 'lucide-react';
export default function NavBar (){

  const [isOpen, setOpen] = useState(false);

  return (

    <div className=" flex items-center justify-between relative p-4 md:p-0">
      <div className="flex gap-14 items-center">
        <img src="public\assets\logo2.svg"  /> 
        <nav className="">
          <ul 
          className={`
          ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row flex-col left-0
          w-full md:w-auto bg-[#0693e3] md:bg-transparent p-6 md:p-0 text-white
           font-normal gap-7.5 text-lg z-40 absolute top-full md:static
            transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none md:pointer-events-auto'}
            md:opacity-100 md:translate-y-0  rounded-md
           `}>

            <li className="hover:text-[#0693e3]"><a href="#">Home</a></li>
            <li className="hover:text-[#0693e3]"><a href="">Sobre nós</a></li>
            <li className="hover:text-[#0693e3]"><a href="">Serviços</a></li>
            <li className="hover:text-[#0693e3]"><a href="">Academia</a></li>
            <Button variant={"secundary"} className="md:hidden block">Academia</Button>
        </ul>
        </nav>
         
      </div>

        <Button className="hidden md:block">Academia</Button>

        <button 
        onClick={() => setOpen(!isOpen)}
        className="block focus:outline-none md:hidden cursor-pointer text-white z-50">
          {
            <div className=" inset-0 transition-all duration-300 transform">
          {isOpen ? (
            <X size={32} className="rotate-0 scale-100 transition-transform duration-300" />
          ) : (
            <TextAlignJustify size={32} className="rotate-0 scale-100 transition-transform duration-300" />
          )}
        </div>
          }
           
        </button>

    </div>
  );
}
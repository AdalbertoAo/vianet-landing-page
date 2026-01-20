export default function NavBar (){
  return (
    <>
       <img
      src="public\assets\logo.png" 
      className="w-[6.625rem] h-[2.313rem] left-[7.063rem] top-[4rem] color: "
      /> 
      
      <ul className="w-[26.9375rem] h-[1.5rem] left-[17.1875rem] top-[4.4375rem] flex gap-8 text-color: #ECFAFF;
    font-normal text-lg display:inline-flex items-center h-">
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Serviços</li>
        <li>Academia</li>

      </ul>
      
    </>
  );
}
const variant = {
    primary: "bg-[#0693e3] text-white w-full h-",
    secundary: "bg-gray-500 text-white",
  }

function Button({children, variant}) {
  
  return (
    <button className={`${variant == 'primary' ? variant.primary : variant.secundary} `}>

      {children}
      </button>
  )
}

export default Button

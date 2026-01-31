import clsx from "clsx"

const style = {
    primary: clsx("bg-[#0693e3]"),
    secundary: clsx("border border- bg-none")
  }

function Button({children, variant = 'primary', w='', h='', className=''}) {

  
  return (
    <button className={`${variant == 'primary' ? style.primary : style.secundary} 
    cursor-pointer px-6 py-3 font-semibold text-base rounded-lg text-white w-[${w}] h-[${h}] ${className}`} >

      {children}
      </button>
  )
}

export default Button

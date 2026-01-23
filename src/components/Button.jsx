<<<<<<< HEAD
const variant = {
    primary: "bg-[#0693e3] text-white w-full h-",
    secundary: "bg-gray-500 text-white",
  }

function Button({children, variant}) {
  
  return (
    <button className={`${variant == 'primary' ? variant.primary : variant.secundary} `}>
=======
import clsx from "clsx"

const style = {
    primary: clsx("bg-[#0693e3]"),
    secundary: clsx("border border- bg-none")
  }

function Button({children, variant = 'primary'}) {

  return (
    <button className={`${variant == 'primary' ? style.primary : style.secundary} 
    cursor-pointer px-6 py-3 font-semibold text-base rounded-lg text-white`}>
>>>>>>> parent of 190da64 (finalizado o navbar)

      {children}
      </button>
  )
}

export default Button

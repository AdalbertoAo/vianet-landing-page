import React from 'react'
import clsx from 'clsx';

const textStyles = {
  h1: clsx("text-[80px] font-bold leading-tight text-[#ECFAFF] "),
 
  p: clsx("text-xl font-normal leading-relaxed text-[#ECFAFF] "),
  span: "text-base",
  a: "text-base text-blue-600 underline hover:text-blue-800",
  div: "text-base",
};


export default function Text({
  tag = "p",
  children,
  className = "",
  ...props
}){

    const Tag = tag;
    const baseClass = textStyles[tag] || "";

  return (
    <Tag className={`${baseClass} ${className}`} {...props} >
        {children}
        
    </Tag>
  )
}

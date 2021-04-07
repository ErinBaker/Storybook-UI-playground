import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css"

const buttonClasses = size =>
  classNames({
    'px-10 py-5 text-2xl': !size || size === 'xl',
    'px-8 py-4 text-lg': size === 'lg',
    'px-6 py-3 text-md': size === 'md',
    'px-5 py-2 text-sm': size === 'sm'
  })



const Button = ({ size }) => {
  return (  
    <button className={buttonClasses(size) + ' ' + 'bg-blue-500 hover:bg-blue-600 text-white rounded-md'}>
      
    </button>
  
    // <button className={buttonClasses(size)}></button>
  )

}

Button.protoTypes = {
  size: PropTypes.string,
}

export default Button;
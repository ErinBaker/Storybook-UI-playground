import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css"

const buttonClasses = size =>
  classNames({
    'px-10 py-5': !size || size === 'xl',
    'px-8 py-4': size === 'lg',
    'px-6 py-3': size === 'md',
    'px-5 py-2': size === 'sm'
  })


const Button = ({ size }) => {
  return (  
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  
 //   <button className={buttonClasses(size)}></button>
  )
  
}

Button.protoTypes = {
  size: PropTypes.string,
}

export default Button;
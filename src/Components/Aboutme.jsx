import React from 'react'
import Aboutmeitem from './Aboutmeitem'
import { useSpring, animated } from '@react-spring/web'

const Aboutme = () =>{
  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl border-b-2 border-gray-200">
      <h3 className="text-xl text-gray-700 font-medium">My Heading Title</h3>
      <p className="mt-3 max-w-4xl text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias id quis hic tempora explicabo provident, iure quae praesentium accusantium laborum ab expedita, veniam error, nemo eius! Officiis, cum reiciendis.</p>
    </div>
  )
}

export default Aboutme
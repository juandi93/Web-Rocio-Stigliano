import React from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
import {FaInstagram,
FaTwitter,
FaBars
} from 'react-icons/fa'
import {useState, useEffect} from 'react'

const Navbar = () => {

    const[nav, setNav] = useState(false)
    const handlenav = () => {
        setNav(!nav)
    }


  return (
    <div className='w-full  min-h[50px] flex justify-between items-center absolute z-10 text-white bg-[#3d0103]  '>
        <h1>Rocio Stigliano</h1>
        <ul className='hidden sm:flex px-4 '>
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#aboutme">Sobre mi</a>
            </li>
            <li>
                <a href="#">Mis Libros</a>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
        </ul>
        <div className='flex justify-between'>
            <FaInstagram className='mx-4 fill-[#bf9c40]'/>
            <FaTwitter className='mx-4 fill-[#bf9c40]'/>
        </div>
        {/* Hamburguer Icon */}
        <div  onClick={handlenav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer fill-[#bf9c40]'/>
        </div>
        {/*Mobile Menu*/}
        <div onClick={handlenav} 
        className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-[#3d0103]/90 px-4 py-7 flex flex-col w-full': 'absolute top-0 h-screen left-[-100%] ease in duration-500'}>
            <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-7 hover:text-[#e0cc9b] duration-500'>
                <a href="#">Inicio</a>
            </li>
            <li className='text-2xl py-8 hover:text-[#e0cc9b] duration-500'>
                <a href="#">Sobre mi</a>
            </li>
            <li className='text-2xl py-8 hover:text-[#e0cc9b] duration-500 '>
                <a href="#">Mis Libros</a>
            </li>
            <li className='text-2xl py-8 hover:text-[#e0cc9b] duration-500'>
                <a href="#">Contacto</a>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
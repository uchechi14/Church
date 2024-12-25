import React, { useState, useRef, useEffect } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import logo from "../assets/logo.jpg"
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const openRef = useRef(null)

    const toggleMenu = () =>{
        setIsOpen((prev) => !prev)
    }

    const handleClickOutside = (event) =>{
        if (openRef.current && !openRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }
    console.log(isOpen)

    useEffect(() =>{
        if(isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else{
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

  return (
    <div className="w-full flex justify-center h-[100vh] bg-[url('/src/assets/hero2.avif')] bg-center bg-no-repeat bg-cover">
        <div className='w-[90%] flex  flex-col items-center'>
            {/* <div className='bg-black opacity-10 absolute top-0 left-0 right-0 bottom-0'></div> */}
            <div className='w-full flex justify-between h-[90px] items-center'>
                <div className='text-white'>
                    <img src={logo} className='w-[100px] h-[90px] mt-4 rounded-md'/>
                </div>
                <div className='flex justify-between gap-8 tablet:hidden'>
                    <nav className='text-white font-medium'>New Member</nav>
                    <nav className='text-white font-medium'>Get Connected</nav>
                    <nav className='text-white font-medium'>Ministries</nav>
                    <nav className='text-white font-medium'>Sermons</nav>
                    <nav className='text-white font-medium'>Events</nav>
                    <nav className='text-white font-medium'>Give</nav>
                </div>
                <div className='text-white text-[30px] hidden tablet:flex' onClick={toggleMenu}><RiMenu3Fill /></div>
            </div>
            {isOpen && (
            <div className='fixed flex-col flex items-center transform md:hidden w-[70%] left-0 h-[100vh]  bg-white rounded-sm shadow-2xl py-6 z-50 '  ref={openRef}>
                <div className='flex justify-between w-[80%] '>
                    <p className='font-medium text-[20px]'>Menu</p>
                    <div className='text-[25px]' onClick={toggleMenu}><GrClose /></div>
                </div>
                <div className='w-full border-b border-black mt-3'></div>
               <div className='w-[80%]'>
               <nav className='text-black font-medium mt-5'>New Member</nav>
                    <nav className='text-black font-medium mt-5'>Get Connected</nav>
                    <nav className='text-black font-medium mt-5'>Ministries</nav>
                    <nav className='text-black font-medium mt-5'>Sermons</nav>
                    <nav className='text-black font-medium mt-5'>Events</nav>
                    <nav className='text-black font-medium mt-5'>Give</nav>
                </div>
            </div>
            
        ) }
            <div className='w-full flex justify-center flex-col items-center m-32 '>
                <h1 className="text-white font-medium text-responsiveText text-center ">WE CAN'T WAIT TO MEET YOU</h1>
                <p className='text-white w-[50%] text-[20px] tablet:text-[15px] tablet:w-full text-center mt-8'>We are excited to welcome you as part of our church family. Below are the details we hope will put you at ease and make your experience an inviting one. it's absolutely awesome that you're here!</p>
                <div className='flex gap-6 mt-8'>
                    <button className='px-4 py-3 font-italic text-[#0E205C] font-semibold bg-white rounded-md'>Service Times</button>
                    <button className='px-4 py-3 font-italic text-[#0E205C] font-semibold bg-white rounded-md'>Location</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
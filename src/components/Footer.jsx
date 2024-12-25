import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col bg-[white] py-4'>
        <div className='w-[75%] justify-between py-9 flex flex-wrap '>
            <div className=''>
                <div>
                    <h1 className='font-bold'>JOIN US</h1>
                    <p>Every Sundays at 8:00am and 9:30am</p>
                </div>
                <div className='flex gap-3 mt-4 flex-col '>
                <h1 className='font-bold'>SOCIAL NETWORKS</h1>
                    <div className='flex gap-3 mt-1'>
                    <p className='text-[30px]'><FaFacebook /></p>
                    <p className='text-[30px]'><FaInstagram /></p>
                    <p className='text-[30px]'><FaTwitter /></p>
                    <p className='text-[30px]'><FaLinkedin /></p>
                    </div>
                </div>
            </div>
                <div className='tablet:mt-4'>
                    <h1 className='font-bold'>GET CONNECTED</h1>
                    <p className='mt-1'>Join a department</p>
                    <p className='mt-1'>Lead a Fellowship</p>
                    <p className='mt-1'>Contact Us</p>
                </div>
                <div className='tablet:mt-4'>
                    <h1 className='font-bold'>News Letter</h1>
                    <p>Prayer Requets</p>
                    <p className='mt-1'>Give</p>
                    <p className='mt-1'>Connection</p>
                </div>
                <div className='tablet:mt-4'>
                    <h1 className='font-bold'>DEPARMENTS</h1>
                    <p>Choir</p>
                    <p className='mt-1'>Ushering</p>
                    <p className='mt-1'>Drama</p>
                    <p className='mt-1'>Sanctuary</p>
                    <p className='mt-1'>Prayer Warriors</p>
                    <p className='mt-1'>Sunday School Teachers</p>
                </div>
               
        </div>
        <div className='border-t-[0.5px] border-[#5a5858] w-full flex justify-center py-4 flex-col items-center'>
            <div className='text-white'>
                <img src={logo} className='w-[100px] h-[90px] mt-4 rounded-md'/>
                    </div>
                    <p>78 Marine Road GRA Apapa</p>
        <p className="copyright text-center">Copyright {new Date().getFullYear()}@The Redeemed Christian Church Of God(Tree of Life Parish). All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
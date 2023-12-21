import React from 'react'
import { FaList } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import {FaTimes, FaBars} from 'react-icons/fa'

import {FaRegHourglassHalf} from "react-icons/fa6"
import {MdOutlineCorporateFare} from  "react-icons/md"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashSideBar = ({ show }) => {
    const [dash, setDash] = useState(true)
    const [tick, setTick] = useState(false)
    const [profile, setProfile] = useState(false)
    const [sign, setSign] = useState(false)

    const navigate = useNavigate()

    const onDash = () => {
        setDash(true)
        tick ? setTick(false) : ""
        profile ? setProfile(false) : ""
        sign ? setSign(false) : ""
        navigate("/dashboard")
    }

    const onTick = () => {
        setTick(true)
        dash ? setDash(false) : ""
        profile ? setProfile(false) : ""
        sign ? setSign(false) : ""
        navigate("/dash_event")
    }

    const onProfile = () => {
        setProfile(true)
        dash ? setDash(false) : ""
        tick ? setTick(false) : ""
        sign ? setSign(false) : ""
    }

    const onSign = () => {
        setSign(true)
        dash ? setDash(false) : ""
        tick ? setTick(false) : ""
        profile ? setProfile(false) : ""
    }
  return (
    <div>
        <div className="">

            <div className="hidden lg:block rounded border p-4 bg-white border-x-2 border-y-2">
                <div onClick={onDash} className={`${dash ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaHome color='' size={30} className={`${dash ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Dashboard</p>
                </div>

                <div onClick={onTick} className={`${tick ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center  mb-5`}>
                    <IoTicket  size={30} className={`${tick ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Ticket</p>
                </div>

                <div onClick={onProfile} className={`${profile ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <RxAvatar  size={30} className={`${profile ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Profile</p>
                </div>

                <div onClick={onSign} className={`${sign ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaSignOutAlt  size={30} className={`${sign ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Sign Out</p>
                </div>


            </div>

            {/**Small Screens */}

            <div className="relative">
            {show && <div className="absolute lg:hidden rounded border p-4 bg-white border-x-2 border-y-2">
                <div onClick={onDash} className={`${dash ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaHome color='' size={30} className={`${dash ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Dashboard</p>
                </div>

                <div onClick={onTick} className={`${tick ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center  mb-5`}>
                    <IoTicket  size={30} className={`${tick ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Ticket</p>
                </div>

                <div onClick={onProfile} className={`${profile ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <RxAvatar  size={30} className={`${profile ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Profile</p>
                </div>

                <div onClick={onSign} className={`${sign ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaSignOutAlt  size={30} className={`${sign ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Sign Out</p>
                </div>


            </div>}

                
            </div>
            
            

        </div>
        
    </div>
  )
}

export default DashSideBar
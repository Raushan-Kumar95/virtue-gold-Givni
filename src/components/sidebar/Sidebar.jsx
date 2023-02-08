import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import SearchBar from '../search/SearchBar'
import { Menu, NavMainData } from "./sidebarData"
import logo from "/vietue_logo_2.png"


const Sidebar = () => {

    const [open, setOpen] = useState(false)

    let navopenState = "md:absolute  md:-left-[300px]"

    let navcloseState = "hidden"


    return (
        <div className='flex w-full absolute z-20 relative'>
            <div className={`w-screen h-screen bg-white opacity-30 absolute md:hidden ${open ? "block":  "hidden"}`}></div>
            <div className={`fixed overflow-y-scroll h-full overflow-x-none  md:flex shadow-xl top-0 left-0 bg-red-200  flex flex-col gap-8 h-screen px-12 py-12 md:block ${open ? navopenState : navcloseState}`}>
                <header className=' flex flex-col gap-2 justify-center w-full'>
            

                    <div className='flex flex-col gap-2 justify-center'>
                        <img width={100} src={logo} alt="logo-vietue" srcset="" />
                        <p className='text-sm w-32'>Virtue Gold Pvt. Ltd.</p>
                    </div>


                </header>
                
                <hr />
                <div className='flex flex-col gap-3'>
                    <h1 className='uppercase font-bold text-gray-500'>Menu</h1>

                    <div className='flex flex-col gap-2'>
                        <ul className='flex items-center gap-4' >
                            <li onClick={() => setOpen(false)} className='flex gap-3 items-center' >
                                <i className="w-5"></i>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='flex flex-col gap-3'>

                    <h1 className='uppercase font-bold text-gray-500'>Components</h1>

                    <ul className='flex flex-col gap-4'>

                        {NavMainData.map((data) => {
                            return (
                                <li onClick={() => setOpen(false)} className='flex gap-3 items-center' >
                                    <i className={`${data?.icon} w-5`}></i>

                                    <NavLink to={`${data?.path}`}>{data.title}</NavLink>

                                </li>
                                
                            )
                        })}

                    </ul>
                </div>
            </div>
            <button onClick={() => setOpen(!open)} className={`md:hidden z-20 md:left-64 md:top-4 absolute ${open ? "left-64 top-4 ":"left-4 top-4  "}`}>
               {!open ? <OpenNav /> : <CloseNav/> } 
            </button>
            <button onClick={() => setOpen(!open)} className={`hidden md:block z-20 md:left-60 md:top-4 absolute ${open ? "left-64 top-4 ":"left-4 top-4  "}`}>
               {/* {!open ? <OpenNav /> : <CloseNav/> }  */}
               <OpenNav/>
            </button>

        </div>


    )
}

export default Sidebar



export const OpenNav = () => {
    return (
        <button className=''>
            <ul className='flex flex-col gap-1'>
                <li className='w-8 h-1 bg-black'></li>
                <li className='w-6 h-1 bg-black'></li>
                <li className='w-8 h-1 bg-black'></li>
                <li className='w-6 h-1 bg-black'></li>
            </ul>
        </button>
    )
}



export const CloseNav = () => {
    return (
        <button className='w-8 h-8 bg-red-100 border-2 border-dashed'>
            <ul className='flex flex-col gap-1 bg-red-400'>
                <li className='w-8 absolute rotate-45 h-1 bg-black'></li>
                <li className='w-8 absolute -rotate-45 h-1 bg-black'></li>
            </ul>
        </button>
    )
}

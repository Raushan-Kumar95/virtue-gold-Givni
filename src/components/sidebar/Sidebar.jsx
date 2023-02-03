import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../search/SearchBar'
import { Menu, NavMainData } from "./sidebarData"
import logo from "/vietue_logo_2.png"


const Sidebar = () => {

    const [open, setOpen] = useState(false)

    let navopenState = "absolute  -left-24"

    let navcloseState = "w-48"

    console.log(open)

    return (
        <div className='flex w-full absolute z-20'>

            <div className={`fixed overflow-y-scroll h-full overflow-x-none  md:flex shadow-xl top-0 left-0 bg-red-200  flex flex-col gap-8 h-screen px-12 py-12  ${open ?  navopenState : navcloseState}`}>
                <header className=' flex flex-col gap-2 justify-center w-full'>

                    {open ?
                        <div className='hidden flex flex-col gap-2 justify-center'>
                            <img width={40} src={logo} alt="logo-vietue" srcset="" />
                            <p className='text-sm  text-center '>Gold</p>
                        </div>
                        :
                        <div className='flex flex-col gap-2 justify-center'>
                            <img width={100} src={logo} alt="logo-vietue" srcset="" />
                            <p className='text-sm w-32'>Virtue Gold Pvt. Ltd.</p>
                        </div>
                    }

                </header>
                <hr />
                <div className='flex flex-col gap-3'>
                    {open ? "" : <h1 className='uppercase font-bold text-gray-500'>Menu</h1>}

                    <div className='flex flex-col gap-2'>
                        <ul className='flex items-center gap-4' >
                            {Menu.map((data) => {
                                return (

                                    <li className='flex gap-3 items-center' >
                                        {open ? <i className={`${data.icon} w-5  text-2xl hidden`}></i> : <i className={`${data.icon} w-5`}></i>}

                                        {open ? "" : <h1>{data.name}</h1>}
                                    </li>


                                )
                            })}
                        </ul>
                    </div>
                </div>


                <div className='flex flex-col gap-3'>

                    {open ? "" : <h1 className='uppercase font-bold text-gray-500'>Components</h1>}

                    <ul className='flex flex-col gap-4'>

                        {NavMainData.map((data) => {
                            return (
                                <li className='flex gap-3 items-center' >
                                    {/* {open ? <i className={`${data.icon} w-5  text-2xl hidden`}></i> : <i className={`${data.icon} w-5`}></i>} */}

                                    {open ? "" : <NavLink to="">{data.title}</NavLink>}

                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>


            <SearchBar open={open} setOpen={setOpen} />
        </div>


    )
}

export default Sidebar







export const CloseNav = () => {
    return (
        <div className='absolute right-0 -mr-20'>
            <ul className='flex flex-col gap-1'>
                <li className='w-8 absolute rotate-45 h-1 bg-black'></li>
                <li className='w-8 absolute -rotate-45 h-1 bg-black'></li>

            </ul>
        </div>
    )
}

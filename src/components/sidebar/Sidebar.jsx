import React from 'react'
import { useState } from 'react'
import { Menu, Components } from "./sidebarData"
import logo from "/vietue_logo_2.png"


const Sidebar = () => {

    const [open, setOpen] = useState(false)

    let navopenState = " px-12 py-12 "

    let navcloseState = " px-8 py-12 "

    console.log(open)

    return (
        <div className=''>

            <div className={`fixed shadow-xl top-0 left-0 bg-red-200  flex flex-col gap-8 h-screen ${open ? navcloseState : navopenState}`}>
                <header className='relative flex flex-col gap-2 justify-center'>

                    {open ?
                        <div className='flex flex-col gap-2 justify-center'>
                            <img width={40} src={logo} alt="logo-vietue" srcset="" />
                            <p className='text-sm hidden'>Virtue Gold Pvt. Ltd.</p>
                        </div>
                        :
                        <div className='flex flex-col gap-2 justify-center'>
                            <img width={100} src={logo} alt="logo-vietue" srcset="" />
                            <p className='text-sm'>Virtue Gold Pvt. Ltd.</p>
                        </div>
                    }


                    <button onClick={() => setOpen(!open)} className='absolute right-0 -mr-28'>
                        <OpenNav />
                    </button>

                    {/* <CloseNav/> */}

                </header>
                <hr />

                {/* <h1>{Menu.title}</h1> */}
                <div className='flex flex-col gap-3'>
                    {open ? "Menu" : <h1 className='uppercase font-bold text-gray-500'>Menu</h1>}

                    <div className='flex flex-col gap-2'>
                        <ul className='flex items-center gap-4' >
                            {Menu.map((data) => {
                                return (

                                    <li className='flex gap-3 items-center' >
                                        {open ? <i className={`${data.icon} w-5  text-2xl`}></i> : <i className={`${data.icon} w-5`}></i>}
                                        
                                        {open ? "" : <h1>{data.name}</h1>}
                                    </li>


                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>

                    {open ? "Other" : <h1 className='uppercase font-bold text-gray-500'>Components</h1>}

                    <ul className='flex flex-col gap-4'>

                        {Components.map((data) => {
                            return (
                                <li className='flex gap-3 items-center' >
                                        {open ? <i className={`${data.icon} w-5  text-2xl`}></i> : <i className={`${data.icon} w-5`}></i>}
                                    
                                    {open ? "" : <h1>{data.name}</h1>}

                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
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
        <div className='absolute right-0 -mr-20'>
            <ul className='flex flex-col gap-1'>
                <li className='w-8 absolute rotate-45 h-1 bg-black'></li>
                <li className='w-8 absolute -rotate-45 h-1 bg-black'></li>

            </ul>
        </div>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'

const ProfileDashboard = () => {
    return (
        <>
            <div className=" m-8 text-[14px] sm:text-lg md:text-xl  lg:m-32 ">
                
                <div className=" pl-2 p-6 flex flex-col md:flex-row   justify-center items-center shadow-2xl bg-blue-100">
                    <div className=" w-1/2 flex flex-col justify-center items-center">
                        <img className="w-1/2 " src="images/profile.jpg" alt="" />
                        <Link to="/uploadImage" className="bg-blue-300 text-white font-bold p-2 m-2  flex justify-center items-center w-1/2 rounded-md cursor-pointer"> <i className="fa fa-pencil mr-2"/>Edit</Link>
                    </div>

                    <div className=" w-1/2 flex flex-col gap-5 border-t-2 md:border-2 border-blue-300 pt-4 md:p-8 ">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="font-bold">User Name:</div>
                            <div className="">Rajesh</div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="font-bold">Email:</div>
                            <div className="">abc@gmail.com</div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="font-bold">Mobile No:</div>
                            <div className="">9989898652</div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="font-bold">D.O.B:</div>
                            <div className="">13/09/1980</div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="font-bold">Password:</div>
                            <div className="">********</div>
                        </div>

                        <div className="">
                        <Link to="/editProfileData" className="bg-blue-300 text-white font-bold p-2 m-2  flex justify-center items-center w-1/2 rounded-md cursor-pointer"> <i className="fa fa-pencil mr-2"/>Edit</Link>
                    </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default ProfileDashboard
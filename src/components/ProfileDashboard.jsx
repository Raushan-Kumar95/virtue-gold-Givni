import React from 'react'

const ProfileDashboard = () => {
    return (
        <>
            <div className="flex flex-col">

                <div className="font-bold text-2xl uppercase text-sky-300 underline">Profile :</div>
                
                <div className="mx-16 p-6 flex flex-col md:flex-row gap-10 md:gap-20 justify-center  shadow-lg md:w-1/2 bg-gray-200">
                    <div className="md:w-1/4 flex flex-col justify-center items-center ">
                        <img className="w-full " src="images/profile.jpg" alt="" />
                        <div className="bg-blue-400 p-4 m-2  flex justify-center items-center w-1/2 rounded-md">Edit</div>
                    </div>

                    <div className=" flex flex-col gap-5 border-t-2 md:border-l-2 border-gray-300 pt-4 md:pl-4 ">
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
                        <div className="">Edit</div>
                    </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default ProfileDashboard
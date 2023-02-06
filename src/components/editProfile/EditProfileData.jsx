import React from 'react'
import TextField from '@mui/material/TextField';

const EditProfileData = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-screen -z-30  bg-gradient-to-r from-orange-200 to-orange-100 h-screen flex flex-cols justify-center items-center">




                {/* content data blow */}
                <div className=" m-16  shadow-xl rounded-md p-8 bg-gradient-to-t from-orange-200 to-orange-100">
                    <div className="sm:p-4 bg-white">

                        <div className="border-2 border-dashed p-4 rounded-md flex flex-col gap-5 bg-white ">
                            <div className="">
                                <i className="fa-solid fa-user border-2 p-2  text-xl my-[9px] mr-2 bg-white" /> <TextField id="outlined-basic" label="User Name" variant="outlined" defaultValue="Rakesh" />
                            </div>
                            <div className="">
                                <i className="fa-solid fa-envelope border-2 p-2  text-xl my-[9px] mr-2 bg-white" /><TextField id="outlined-basic" label="Email" variant="outlined" defaultValue="abc@gmail.com" />
                            </div>
                            <div className="">
                                <i className="fa-solid fa-mobile border-2 p-2  text-xl my-[9px] mr-2 bg-white" /><TextField id="outlined-basic" label="Mobile No" variant="outlined" defaultValue="998989862" />
                            </div>
                            <div className="">
                                <i className="fa-solid fa-lock border-2 p-2  text-xl my-[9px] mr-2 bg-white" /><TextField id="outlined-basic" type="password" label="Password" variant="outlined" defaultValue="********" />
                            </div>
                            <div className="bg-blue-300  text-white font-bold p-2 m-2  flex justify-center items-center w-1/2 rounded-md cursor-pointer"> <i className="fa fa-pencil mr-2" />Save</div>


                        </div>
                    </div>
                </div>
                {/* content code above */}

                <div className="fixed right-[10%] bottom-[20%] hidden md:block  -z-20 p-8 bg-orange-200 bg-opacity-80 backdrop:blur-lg rounded-full">
                    <div className="p-16 bg-opacity-30 rounded-full bg-orange-400"></div>
                </div>

                <div className="fixed w-full -z-10 hidden md:block">
                <i class="fixed text-[96px] hidden lg:block text-orange-100 fa-solid fa-cloud -z-10 left-[30%]"></i>
                <i class="fixed text-[80px] text-orange-200 fa-solid fa-cloud -z-10 top-[20%] left-[80%] "></i>
                </div>

                <div className=" fixed w-full -z-10 hidden md:block">

                <div class=" fixed hidden xl:block left-[88%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[280px] border-b-orange-200 
                            border-r-[100px] border-r-transparent
                         "></div>
                <div class=" fixed left-[80%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[250px] border-b-orange-200 
                             border-r-[100px] border-r-transparent
                         "></div>
                 <div class=" fixed  left-[70%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[200px] border-b-orange-300 
                             border-r-[80px] border-r-transparent
                             "></div>
                
                <div class=" fixed left-[60%] hidden xl:block bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[250px] border-b-orange-200 
                             border-r-[100px] border-r-transparent
                             "></div>


                 <div class=" fixed hidden lg:block left-[52%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[250px] border-b-orange-300 
                            border-r-[100px] border-r-transparent
                            "></div>
                 <div class=" fixed left-[42%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[250px] border-b-orange-200 
                             border-r-[100px] border-r-transparent
                         "></div>
                
               
                <div class=" fixed left-[20%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[350px] border-b-orange-200 
                            border-r-[100px] border-r-transparent
                         "></div>
                 <div class=" fixed hidden lg:block left-[26%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[230px] border-b-orange-300 
                            border-r-[100px] border-r-transparent
                            "></div>
                
                <div class=" fixed left-[10%]  bottom-0 -z-10 w-0 h-0 border-l-[100px] border-l-transparent
                            border-b-[250px] border-b-orange-300 
                            border-r-[100px] border-r-transparent
                            "></div>

                </div>
            </div>

        </>
    )
}

export default EditProfileData
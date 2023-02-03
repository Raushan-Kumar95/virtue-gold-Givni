import React from 'react'
import TextField from '@mui/material/TextField';

const EditProfileData = () => {
    return (
        <>
            <div className="border-2 p-4  flex flex-col gap-5">
                <div className="">
                    <i className="fa-solid fa-user border-2 p-2 text-xl my-[9px] mr-2 bg-white" /> <TextField id="outlined-basic" label="User Name" variant="outlined" defaultValue="Rakesh" />
                </div>
                <div className="">
                <i className="fa-solid fa-envelope border-2 p-2 text-xl my-[9px] mr-2 bg-white" /><TextField id="outlined-basic" label="Email" variant="outlined" defaultValue="abc@gmail.com" />
                </div>
                <div className="">
                <i className="fa-solid fa-mobile border-2 p-2 text-xl my-[9px] mr-2 bg-white" /><TextField id="outlined-basic" label="Mobile No" InputLabelProps={{ shrink: true }} variant="outlined" defaultValue="998989862" />
                </div>
                <div className="">
                <i className="fa-solid fa-lock border-2 p-2 text-xl my-[9px] mr-2 bg-white" /><TextField id="outlined-basic" type="password" label="Password" InputLabelProps={{ shrink: true }} variant="outlined" defaultValue="********" />
                </div>
                <div className="bg-blue-300  text-white font-bold p-2 m-2  flex justify-center items-center w-1/2 rounded-md cursor-pointer"> <i className="fa fa-pencil mr-2" />Save</div>


            </div>

        </>
    )
}

export default EditProfileData
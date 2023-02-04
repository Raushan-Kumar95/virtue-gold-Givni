import React from "react";
import BuyCoin from "./coins/BuyCoin";

const Coins= ()=>{

    return (    
    <>
    <div className=" flex flex-col md:ml-[20vh] h-[80vh] md:min-h-[80vh]  items-center">

        <div className="">

            <div className=" flex gap-10">
                <div className="border-b-2 border-b-red-600">Buy Gold</div>
                <div className="">Buy Silver</div>
                <div className="">Sell Gold</div>
                <div className="">Sell Gold</div>
            </div>
            <hr className=' ' />
        </div>

        


        <BuyCoin />
    </div>
</>
    )
}

export default Coins

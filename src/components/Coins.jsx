import React, { useState } from "react";
import BuyCoin from "./coins/BuyCoin";
import BuySilver from "./coins/BuySilver";

const Coins= ()=>{
    

    const [product,setProduct]=useState(["Gold","Buy"])

    const[active,setActive]=useState(0);

     


    
    

    return (    
    <>
    <div className=" flex flex-col md:ml-[20vh] h-[80vh] md:min-h-[80vh]  items-center">

        <div className="">

            <div className=" flex gap-10">
                <div className={active==0?"cursor-pointer border-b-2 border-b-red-600":"cursor-pointer"} onClick={()=>{setProduct(['Gold', "Buy"]); setActive(0)}} >Buy Gold</div>
                <div className={active==1?"cursor-pointer border-b-2 border-b-red-600":"cursor-pointer"} onClick={()=>{setProduct(['Silver', "Buy"]); setActive(1)}}>Buy Silver</div>
                <div className={active==2?"cursor-pointer border-b-2 border-b-red-600":"cursor-pointer"} onClick={()=>{setProduct(['Gold',"Sell"]); setActive(2)}}>Sell Gold</div>
                <div className={active==3?"cursor-pointer border-b-2 border-b-red-600":"cursor-pointer"} onClick={()=>{setProduct(['Silver','Sell']); setActive(3)}}>Sell Silver</div>
            </div>
            <hr className=' ' />
        </div>

        


        {/* <BuyCoin /> */}
        <BuyCoin p_name={product[0]} buy_sell={product[1]} />
    </div>
</>
    )
}

export default Coins

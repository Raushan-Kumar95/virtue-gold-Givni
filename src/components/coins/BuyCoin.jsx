import React from 'react'

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { purple, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const BuyCoin = (props) => {
    return (
        <>

<div className='flex flex-col relative -left-[20%] top-10 '>

<div className="flex   gap-10">
    <i className={props.p_name==="Gold"?"text-yellow-400 text-4xl fa-solid fa-coins":"text-gray-400 text-4xl fa-solid fa-coins" }/>
    <div className="">
        <div className="text-2xl"><span className='text-red-600'> Live</span> {props.buy_sell} {props.p_name} Price</div>
        <div className="text-gray-400"><i class="fa-sharp fa-solid fa-indian-rupee-sign" /> 5812.8/gm</div>
    </div>
</div>

<div className="flex flex-col mt-10 gap-5 ">
    <div className="text-2xl border-b-4 md:w-1/2 border-red-600">Quick {props.buy_sell}</div>
    <div className="p-4 bg-red-700 ">
        <div className='flex gap-4 justify-center items-center text-white '>

            <div className="">
                <FormControl fullWidth sx={{ m: 1 }}  variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount"  ><span className='text-white'>{props.but_sell} {props.p_name} Worth </span> </InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        
                        startAdornment={<InputAdornment position="start"><i className="fa-sharp text-white fa-solid fa-indian-rupee-sign" /></InputAdornment>}
                    />
                </FormControl>
            </div>
            <div>Or</div>
            <div className="">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount"><span className='text-white'>{props.but_sell} {props.p_name} Weight </span></InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        
                        startAdornment={<InputAdornment position="start"><i className="text-white fa-sharp fa-solid fa-indian-rupee-sign" /></InputAdornment>}
                    />


                    
                </FormControl>
            </div>



        </div>

        <div className="text-lg py-2 px-2 text-white bg-yellow-500 w-1/3 flex justify-center items-center rounded-full cursor-pointer">{props.buy_sell} Now</div>

    </div>
</div>

</div>
    
    
    </>
    )
}

export default BuyCoin
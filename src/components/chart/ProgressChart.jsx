import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


const ProgressChart = ( {progress, year, userGain, userLost} ) => {

  // let {progress} = dat

  // console.log(Data);

  return (
    <div className='flex justify-center gap-6 outline outline-1 px-4 py-4'>
      <ul>
        <li>Year: {year}</li>
        <li>Gain: {userGain}</li>
        <li>Lost: {userLost}</li>
      </ul>
          <CircularProgress variant="determinate" value={progress} />
    </div>
  )
}

export default ProgressChart
import React from 'react'

const SearchBar = () => {


  return (
    <div className='w-full '>
      <div className='bg-yellow-200 w-full min-h-[10vh] flex items-center md:pl-48'>
        <div className='pl-24 pr-8 py-6 flex justify-between w-full gap-8 items-center'>
          <input className='px-2 py-2' type="text" name="search" id="" placeholder='Search' />
          <div className='flex gap-4 justify-center items-center'>
            <i className='fa fa-bell'></i>
          <button className='uppercase'>Givni</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar



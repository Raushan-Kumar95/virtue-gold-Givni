import React from 'react'

const SearchBar = () => {


  return (
    <div className='w-full '>
      <div className='bg-yellow-200 w-full h- flex items-center md:pl-48'>
        <div className='pl-24 py-6 flex gap-8 items-center'>
          <input className='px-2 py-2' type="text" name="search" id="" placeholder='Search' />
        </div>
      </div>
    </div>
  )
}

export default SearchBar



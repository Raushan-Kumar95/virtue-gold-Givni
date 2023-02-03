import React from 'react'

const SearchBar = ({open, setOpen}) => {
console.log(open)

  return (
    <div className='w-full '>
      <div className='bg-yellow-200 w-full h- flex items-center md:pl-48'>
        <div className='pl-24 py-6 flex gap-8 items-center'>
        <button onClick={() => setOpen(!open)} className='md:flex hidden  '>
            <OpenNav />
          </button>
          <input className='px-2 py-2' type="text" name="search" id="" placeholder='search' />
          <button onClick={() => setOpen(!open)} className='flex md:hidden '>
            <OpenNav />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar


export const OpenNav = () => {
  return (
    <button className=''>
      <ul className='flex flex-col gap-1'>
        <li className='w-8 h-1 bg-black'></li>
        <li className='w-6 h-1 bg-black'></li>
        <li className='w-8 h-1 bg-black'></li>
        <li className='w-6 h-1 bg-black'></li>
      </ul>
    </button>
  )
}
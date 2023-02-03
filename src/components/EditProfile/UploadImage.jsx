import React from 'react'

const UploadImage = () => {
  return (
    <>
        <div className="md:mx-64 md:my-96 ">
             <h1 className="">Upload Your Image</h1>
             <h3 className="">PNG, JPG and GIF files are allowed</h3>
             <input type="file" name="images" className="file border-2 p-4 file:w-96 file:h-64 file:bg-white file:border-dashed file:border-gray-300" />
        </div>
    </>
  )
}

export default UploadImage
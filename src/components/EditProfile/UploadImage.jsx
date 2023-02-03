import React,{useState} from 'react'

const UploadImage = () => {

  const [dragActive, setDragActive] = React.useState(false);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };


  return (
    <>
        <div className=" flex flex-col md:ml-[20vh] h-[80vh] md:min-h-[80vh] justify-center items-center">
            <div className="flex flex-col mb-4 justify-center items-center ">

             <h1 className="">Upload Your Image</h1>
             <h3 className="">PNG, JPG and GIF files are allowed</h3>
            </div>

             <form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col justify-center gap-10">
             <label for="file_upload" className={dragActive ? "drag-active" : "" }>
              <div className='w-96 h-64 border-2 p-4 cursor-pointer bg-gray-100'>
                  <div className="border-2 w-full h-full border-dashed flex flex-col items-center gap-2 justify-center p-2">
                         <i className='fa fa-image text-blue-400 text-5xl'></i>
                         <div className="">Upload Image</div>
                         <div className="">or</div>
                         <div className="px-4 py-2 bg-violet-400 rounded-lg">Choose Image</div>
                    </div>
                </div>
             </label>
             <input type="file" name="images" id="file_upload" className="hidden" />
             <input type="submit"  className="px-6 py-2 bg-green-400  rounded-lg" value="Submit"/>
            </div>
             </form>
        </div>
    </>
  )
}

export default UploadImage
import React from 'react'
import note from "../../public/images/notification.svg"

function Search() {
  return (
    <div>
      <div className="flex justify-end items-center h-[5vh]">
        <input className='mt-2 px-4 py-1 text-lg rounded-2xl' type="text" placeholder='Search for Internships' />
        <div className="mt-2 mx-3 w-8">
          <img src={note.src} alt="" className="w-5" />
        </div>
      </div>
    </div>
  )
}

export default Search
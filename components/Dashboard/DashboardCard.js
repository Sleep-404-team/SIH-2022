import React from 'react'
import Link from 'next/link'

function DashboardCard(props) {
  return (
    <div className='rounded-lg bg-white'>
       
      <div className="">
        
          <img src={props.img} alt="" />
        
      </div>
      <Link href="/internships">
        <a className="text-3xl text-[#1e214d] font-medium flex justify-center">
          {props.title}
        </a>
      </Link>
      
    </div>
  )
}

export default DashboardCard
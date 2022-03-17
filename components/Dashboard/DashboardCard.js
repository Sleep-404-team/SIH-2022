import React from 'react'

function DashboardCard(props) {
  return (
    <div className='border border-black rounded-lg bg-white'>
      <div className="">
        <img src={props.img} alt="" />
      </div>
      <div className="text-3xl text-[#1e214d] font-medium text-center">
        {props.title}
      </div>
    </div>
  )
}

export default DashboardCard
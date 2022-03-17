import React from 'react'


function NotificationCard(props) {
  return (
    <div>
      <div className="grid grid-rows-3 text-[#1e214d] rounded-2xl bg-white px-5 ">
        <div className="flex items-center">
          <div className=" text-3xl font-medium">{props.title}</div>
          <div className="ml-auto">11-03-2022 ; 11:45 IST</div>
        </div>
        <div className="my-1">
          {props.desc}
        </div>
        <div className="flex ml-auto">
          <div className="mr-4">mark as {props.status} <img src={props.img} alt="" className='inline'/></div>
          <div className="">View More &gt;</div>
        </div>
      </div>
    </div>
  )
}

export default NotificationCard
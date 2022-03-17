import React from 'react'
import NotificationCard from './NotificationCard'
import mark from "../../public/images/notification/mark.svg"
import unread from "../../public/images/notification/unread.svg"

function Notification() {
  return (
    <div className='grid grid-cols-1 gap-4'>
      <NotificationCard img={mark.src} status="Read" title="Interview" desc="Hi John, we would like to have an interview with you. Lets fix a time !"/>
      <NotificationCard img={mark.src} status="Read" title="Internsip Completed" desc="Hello, we are pleased to inform you that we had a great time having you as an intern in our company. You can always contact us for any quesries!"/>
      <NotificationCard img={unread.src} status="Unread" title="Update your resume" desc="John! we observed that you've updated your skills set, would you like to update your resume?"/>
    </div>
  )
}

export default Notification
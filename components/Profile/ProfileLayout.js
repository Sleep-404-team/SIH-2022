import React from 'react'
import ExperienceCard from './ExperienceCard'
import ProfileCard from './ProfileCard'

function ProfileLayout() {
  return (
    <div className='ml-[10vw] mr-[5vw] mt-[7vh] grid grid-cols-1 gap-6'>
      <ProfileCard/>
      <ExperienceCard/>
    </div>
  )
}

export default ProfileLayout
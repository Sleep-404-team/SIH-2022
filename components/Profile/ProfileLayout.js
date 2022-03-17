import React from 'react'
import EducationCard from './EducationCard'
import ExperienceCard from './ExperienceCard'
import ProfileCard from './ProfileCard'

function ProfileLayout() {
  return (
    <div className='ml-[10vw] mr-[5vw] pt-[7vh] pb-[5vh] grid grid-cols-1 gap-6'>
      <ProfileCard/>
      <ExperienceCard/>
      <EducationCard/>
    </div>
  )
}

export default ProfileLayout
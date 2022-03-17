import React from 'react'

function SkillsCard(props) {
  return (
    <div className='bg-[#edecec] rounded-md px-3 py-1 text-center font-medium'>
      {props.title}
    </div>
  )
}

export default SkillsCard
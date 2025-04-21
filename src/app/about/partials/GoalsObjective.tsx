import React from 'react'
import GoalAnimation from './GoalAnimation'

const GoalsObjective = () => {
   return (
      <div className='mt-20'>
         <p className='typography-h3-bold text-text-500'>Strategic Goals and Objectives</p>

         <div className='mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
            <GoalAnimation />
            <GoalAnimation />
            <GoalAnimation />
            <GoalAnimation />
         </div>
      </div>
   )
}

export default GoalsObjective
import React from 'react'
import { Skeleton } from './ui/skeleton'

const WelcomeMsgFallbackUI = () => {
  return (
    <div className='flex w-full mb-12'>
      <h1 className="text-4xl font-bold">
        <Skeleton className='w-[150px] h-[36px] mb-2'/>
        <Skeleton className='w-[200px] h-[36px]'/>
      </h1>
    </div>
  )
}

export default WelcomeMsgFallbackUI
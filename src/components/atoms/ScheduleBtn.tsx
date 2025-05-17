import { ReactNode } from 'react'

type PropsType = {
  children: ReactNode
}

export const ScheduleBtn = ({children}: PropsType) => {
  return (
    <button className='block bg-lime-800 text-white rounded-sm w-[94%] px-2'>
      {children}
    </button>
  )
}

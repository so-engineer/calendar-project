import { ReactNode } from 'react'

type PropsType = {
  children: ReactNode
  onClick: () => void
}

export const ScheduleBtn = ({children, onClick}: PropsType) => {
  return (
    <button className='block bg-lime-800 text-white rounded-sm w-[94%] px-2' onClick={onClick}>
      {children}
    </button>
  )
}

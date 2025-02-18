import React from 'react'
import bullet from '../../assets/bullet.svg'

export default function Tags({name}) {
  return (
    <div className='flex gap-3 items-center justify-center rounded-xl p-[15px] bg-[#1c1c1c]'>
        <img src={bullet} alt="bullet" />
        <p className='text-[18px] opacity-65'>{name}</p>
    </div>
  )
}

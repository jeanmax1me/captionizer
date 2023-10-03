import React from 'react'
import Sparkles from './sparkles'

const DemoSection = () => {
  return (
    <div className="flex gap-10 items-center">
    <div className="bg-slate-600 w-[240px] h-[480px] rounded-xl"></div>
    <Sparkles />
    <div className="bg-slate-600 w-[240px] h-[480px] rounded-xl"></div>
  </div>
  )
}

export default DemoSection
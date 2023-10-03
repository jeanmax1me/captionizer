import React from 'react'
import PageHeaders from '../components/PageHeaders'

const Pricing = () => {
  return (
    <>
   <PageHeaders
 h1Text={'We have a pricing system you will like'}
 h2Text={'Free today'}
    />

    <div className="bg-white/90 text-slate-700 rounded-lg max-w-sm mx-auto p-4 text-center">

    <h3 className="text-3xl font-bold">Free tomorrow</h3>
    <h4>Just fucking free</h4>
    </div>
  </>
  )
  
}

export default Pricing
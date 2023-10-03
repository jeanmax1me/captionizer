import React from 'react'

const PageHeaders = ({
    h1Text = '',
    h2Text = '',
}) => {
  return (
    <div className="text-center mt-32 mb-10">
    <h1 className="text-3xl text-white text-shadow">{h1Text}</h1>
    <h2 className="text-white/80">{h2Text}</h2>
  </div>
  )
}

export default PageHeaders
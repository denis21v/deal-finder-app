import React from 'react'
import { BiLoader } from 'react-icons/bi'
function LoadingIcon({ iconSize }) {
  return (
    <div className='loadingIconContainer'>
      <BiLoader
        size={iconSize}
        color='#e0e0e2'
        className='iconScaling loadingIcon'
      />
    </div>
  )
}

export default LoadingIcon

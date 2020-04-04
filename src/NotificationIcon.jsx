import React from 'react'

const NotificationIcon = ({ isActive }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 389.33 393.84"
      style={{
        position: 'absolute',
        width: '30px',
        marginLeft: '3px',
        marginTop: '3px',
        fill: isActive ? '#ff977c' : '#a8afb5',
      }}
    >
      <path d="M327.72,20H61.62A41.61,41.61,0,0,0,20,61.62V261.69a41.61,41.61,0,0,0,41.62,41.62h86l37.57,65.07a10.9,10.9,0,0,0,18.89,0l37.58-65.07h86a41.61,41.61,0,0,0,41.61-41.62V61.62A41.61,41.61,0,0,0,327.72,20Z" />
      <path d="M194.67,393.84a31,31,0,0,1-26.77-15.46l-31.8-55.07H61.62A61.69,61.69,0,0,1,0,261.69V61.62A61.69,61.69,0,0,1,61.62,0h266.1a61.68,61.68,0,0,1,61.61,61.62V261.69a61.68,61.68,0,0,1-61.61,61.62H253.23l-31.8,55.07A31,31,0,0,1,194.67,393.84ZM61.62,40A21.65,21.65,0,0,0,40,61.62V261.69a21.65,21.65,0,0,0,21.62,21.62H159.2l35.47,61.44,35.47-61.44h97.58a21.64,21.64,0,0,0,21.61-21.62V61.62A21.64,21.64,0,0,0,327.72,40Z" />
    </svg>
  )
}

export default NotificationIcon

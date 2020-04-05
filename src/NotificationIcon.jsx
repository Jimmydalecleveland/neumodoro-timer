import React from 'react'

const NotificationIcon = ({ isActive }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 473.1 418.4"
      style={{
        position: 'absolute',
        width: '30px',
        fill: isActive ? '#ff977c' : '#a8afb5',
        transform: 'translate(1px, 2px)',
      }}
    >
      <path d="M236.55,418.4a36.46,36.46,0,0,1-31.48-18.18l-32.86-56.91H69A69.13,69.13,0,0,1,0,274.26V69A69.12,69.12,0,0,1,69,0h335a69.12,69.12,0,0,1,69,69V274.26a69.13,69.13,0,0,1-69,69.05H300.89L268,400.22A36.45,36.45,0,0,1,236.55,418.4ZM69,60a9.06,9.06,0,0,0-9,9V274.26a9.06,9.06,0,0,0,9,9.05H206.85l29.7,51.44,29.7-51.44H404.06a9.06,9.06,0,0,0,9-9.05V69a9.06,9.06,0,0,0-9-9Z" />
    </svg>
  )
}

export default NotificationIcon

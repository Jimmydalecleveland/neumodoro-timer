import React from 'react'

const NotificationIcon = ({ isActive }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="comment-alt"
      className="svg-inline--fa fa-comment-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 450.04"
      style={{
        position: 'absolute',
        width: '30px',
        marginLeft: '3px',
        marginTop: '3px',
        fill: isActive ? 'tomato' : '#a8afb5',
      }}
    >
      <path d="M164.37,450a48.8,48.8,0,0,1-48.74-48.71V380.62H86.25A86.35,86.35,0,0,1,0,294.37V86.25A86.35,86.35,0,0,1,86.25,0h277.5A86.35,86.35,0,0,1,450,86.25V294.37a86.35,86.35,0,0,1-86.25,86.25H273l-79.92,60A48.47,48.47,0,0,1,164.37,450ZM86.25,80A6.25,6.25,0,0,0,80,86.25V294.37a6.25,6.25,0,0,0,6.25,6.25H195.63v38.06l50.72-38.06h117.4a6.25,6.25,0,0,0,6.25-6.25V86.25A6.25,6.25,0,0,0,363.75,80Z" />
    </svg>
  )
}

export default NotificationIcon

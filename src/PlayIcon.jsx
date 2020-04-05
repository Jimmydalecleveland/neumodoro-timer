import React from 'react'

function PlayIcon({ isActive }) {
  return (
    <svg
      viewBox="0 0 433.98 484.57"
      style={{
        position: 'absolute',
        width: '25px',
        marginLeft: '5px',
        fill: isActive ? '#ff977c' : '#a8afb5',
        transform: 'translate(-2px, 0px)',
      }}
    >
      <title>play-outline</title>
      <g data-name="Layer 2">
        <path d="M77.92,484.57A78,78,0,0,1,39.3,474.36,77,77,0,0,1,0,406.67V77.88c0-28.5,14.35-53.71,38.38-67.42a79,79,0,0,1,79.18.35L395.67,175.23a77.89,77.89,0,0,1,0,134.18L117.56,473.74A77.74,77.74,0,0,1,77.92,484.57ZM80,81.54V403L351.94,242.32Zm0-4.27h0Z" />
      </g>
    </svg>
  )
}

export default PlayIcon

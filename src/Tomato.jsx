import React from 'react'
import { motion } from 'framer-motion'
import AnimateSeed from './Seed'

const tweenTransition = {
  type: 'tween',
  duration: 0.3,
  ease: [0.9, 0.2, 0.1, 0.1],
}

const Tomato = ({ seeds, pomo }) => {
  return (
    <motion.svg viewBox="0 0 318.34 318.34">
      <defs>
        <radialGradient
          id="radial-gradient"
          cx={159.17}
          cy={159.17}
          r={160.63}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.87} stopOpacity={0.2} />
          <stop offset={0.98} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx={176.66}
          cy={175.51}
          r={189.19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.75} stopOpacity={0} />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="radial-gradient-3"
          cx={146.21}
          cy={142.22}
          r={161.29}
          gradientTransform="matrix(.66692 .74513 -.68552 .61357 145.67 -53.52)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.94} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-4"
          cx={152.59}
          cy={145.75}
          fx={130.949}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 159.38 -61.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.86} stopColor="#ff6138" />
          <stop offset={0.86} stopColor="#ff6138" />
          <stop offset={1} stopColor="#e54225" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-5"
          cx={128.21}
          cy={126.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 154.37 -62.75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.63} stopColor="#e54225" stopOpacity={0} />
          <stop offset={1} stopColor="#e54225" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-6"
          cx={110.12}
          cy={85.19}
          r={82.03}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff8b61" />
          <stop offset={1} stopColor="#ff8b61" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="radial-gradient-7"
          cx={152.59}
          cy={144.75}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 158.65 -62.33)"
          xlinkHref="#radial-gradient-4"
        />
        <radialGradient
          id="radial-gradient-8"
          cx={128.21}
          cy={125.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 153.51 -63.03)"
          xlinkHref="#radial-gradient-5"
        />
        <radialGradient
          id="radial-gradient-9"
          cx={110.12}
          cy={84.19}
          r={82.03}
          xlinkHref="#radial-gradient-6"
        />
        <radialGradient
          id="radial-gradient-10"
          cx={151.59}
          cy={144.75}
          fx={129.949}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 158.3 -61.57)"
          xlinkHref="#radial-gradient-4"
        />
        <radialGradient
          id="radial-gradient-11"
          cx={127.21}
          cy={125.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 153.15 -62.26)"
          xlinkHref="#radial-gradient-5"
        />
        <radialGradient
          id="radial-gradient-12"
          cx={109.12}
          cy={84.19}
          r={82.03}
          xlinkHref="#radial-gradient-6"
        />
        <radialGradient
          id="radial-gradient-13"
          cx={151.59}
          cy={145.75}
          fx={129.949}
          r={130.23}
          gradientTransform="matrix(.65 .76 -.73 .63 159.03 -61.21)"
          xlinkHref="#radial-gradient-4"
        />
        <radialGradient
          id="radial-gradient-14"
          cx={127.21}
          cy={126.09}
          r={140.38}
          gradientTransform="matrix(.64078 .76772 -.85985 .71767 154.01 -61.98)"
          xlinkHref="#radial-gradient-5"
        />
        <radialGradient
          id="radial-gradient-15"
          cx={109.12}
          cy={85.19}
          r={82.03}
          xlinkHref="#radial-gradient-6"
        />
        <clipPath id="clip-path">
          <path className="cls-1" d="M31.34 31.14h128v128h-128z" />
        </clipPath>
        <clipPath id="clip-path-2">
          <path className="cls-1" d="M31.34 158.14h128v128h-128z" />
        </clipPath>
        <clipPath id="clip-path-3">
          <path className="cls-1" d="M158.34 158.14h128v128h-128z" />
        </clipPath>
        <clipPath id="clip-path-4">
          <path className="cls-1" d="M158.34 31.14h128v128h-128z" />
        </clipPath>
        <style>
          {'.cls-1{fill:none}.cls-7{fill:#aa2f1f}.cls-8{fill:#f4e39a}'}
        </style>
      </defs>
      <title>tomato9</title>
      <g id="Layer_2" data-name="Layer 2">
        <circle
          cx={159.17}
          cy={159.17}
          r={159.17}
          opacity={0.5}
          fill="url(#radial-gradient)"
          id="outside_shadow_copy"
          data-name="outside shadow copy"
        />
        <circle
          cx={159.17}
          cy={159.17}
          r={140}
          fill="#d8d8d8"
          id="inset_background"
          data-name="inset background"
        />
        <circle
          cx={159.17}
          cy={159.17}
          r={140.03}
          fill="url(#radial-gradient-2)"
          id="inset_shadow"
          data-name="inset shadow"
        />
        <circle
          cx={159.17}
          cy={159.17}
          r={140}
          fill="url(#radial-gradient-3)"
          id="inset_highlight"
          data-name="inset highlight"
        />
        <circle
          cx={159.34}
          cy={159.14}
          r={127.5}
          fill="#d84b35"
          id="tomato_inside"
          data-name="tomato inside"
        />
        <path
          className="cls-7"
          d="M212 180.74c-7.1 26.06-9.27 22.62-33.66 35.4-21 11-12.85 53.33 25.83 39.59 24.55-8.71 44-27.61 52.67-60.46 9.84-37.07-36.67-44.54-44.84-14.53z"
          id="seed_quarter_1"
          data-name="seed quarter 1"
        />
        <path
          className="cls-7"
          d="M138.34 212.14c-26.06-7.1-30-16-37-36-8.17-23.35-51.42-14.33-37.69 24.36 8.71 24.54 28.85 46.92 61.69 55.64 37.07 9.86 43.01-35.83 13-44z"
          id="seed_quarter_2"
          data-name="seed quarter 2"
        />
        <path
          className="cls-7"
          d="M112 137.89c7.1-26.06 18.35-29.75 34.35-34.75 19.28-6 12.16-54-26.52-40.24-24.55 8.72-43.95 27.62-52.67 60.46-9.85 37.07 36.66 44.54 44.84 14.53z"
          id="seed_quarter_3"
          data-name="seed quarter 3"
        />
        <path
          className="cls-7"
          d="M181.34 106.14c26.06 7.1 24.58 13 38 37 9.84 17.63 50.73 11.68 37-27-8.71-24.55-27.61-43.95-60.46-52.67-37.07-9.84-44.55 34.53-14.54 42.67z"
          id="seed_quarter_4"
          data-name="seed quarter 4"
        />

        <g id="seeds_1" data-name="seeds 1">
          <AnimateSeed
            isShown={seeds >= 20}
            id="seed20"
            coords={{ x: -30, y: -70 }}
            className="cls-8"
            d="M147.05 75.7c.53 2.54-.93 8.65-2.29 13.45a3.71 3.71 0 01-6.46 1.34c-3.16-3.86-6.93-8.88-7.45-11.42a8.27 8.27 0 1116.2-3.37z"
          />
          <AnimateSeed
            isShown={seeds >= 19}
            id="seed19"
            coords={{ x: -40, y: -60 }}
            className="cls-8"
            d="M126 82.05c1.12 2.34 1.16 8.61 1 13.6a3.73 3.73 0 01-6 2.85c-4-3-8.85-7-10-9.32a8.28 8.28 0 0115-7.13z"
          />
          <AnimateSeed
            isShown={seeds >= 18}
            id="seed18"
            coords={{ x: -60, y: -60 }}
            className="cls-8"
            d="M106.35 93.77c1.83 1.84 4 7.74 5.46 12.5a3.72 3.72 0 01-4.67 4.67c-4.76-1.5-10.66-3.63-12.5-5.47a8.28 8.28 0 0111.71-11.7z"
          />
          <AnimateSeed
            isShown={seeds >= 17}
            id="seed17"
            coords={{ x: -60, y: -20 }}
            className="cls-8"
            d="M92.25 112c2.43.91 6.82 5.4 10.15 9.12a3.72 3.72 0 01-2.31 6.18c-5 .61-11.21 1.11-13.64.2a8.27 8.27 0 115.8-15.5z"
          />
          <AnimateSeed
            isShown={seeds >= 16}
            id="seed16"
            coords={{ x: -70, y: 0 }}
            className="cls-8"
            d="M85.44 132.62c2.59 0 8.28 2.67 12.7 5a3.73 3.73 0 010 6.61c-4.42 2.3-10.11 5-12.7 5a8.28 8.28 0 110-16.55z"
          />
        </g>
        <g id="seeds_2" data-name="seeds 2">
          <AnimateSeed
            isShown={seeds >= 15}
            id="seed15"
            coords={{ x: -70, y: 10 }}
            className="cls-8"
            d="M74.73 173.25c2.54-.53 8.64.93 13.45 2.29a3.72 3.72 0 011.34 6.46c-3.87 3.16-8.89 6.93-11.43 7.46a8.28 8.28 0 01-3.36-16.21z"
          />
          <AnimateSeed
            isShown={seeds >= 14}
            id="seed14"
            coords={{ x: -60, y: 20 }}
            className="cls-8"
            d="M81.07 194.36c2.34-1.12 8.62-1.17 13.61-1a3.71 3.71 0 012.84 5.95c-3 4-7 8.85-9.31 10a8.27 8.27 0 11-7.14-14.93z"
          />
          <AnimateSeed
            isShown={seeds >= 13}
            id="seed13"
            coords={{ x: -60, y: 60 }}
            className="cls-8"
            d="M93.8 215c1.83-1.84 7.73-4 12.49-5.47a3.72 3.72 0 014.67 4.67c-1.5 4.76-3.63 10.67-5.46 12.5A8.27 8.27 0 0193.8 215z"
          />
          <AnimateSeed
            isShown={seeds >= 12}
            id="seed12"
            coords={{ x: -40, y: 60 }}
            className="cls-8"
            d="M110 230.05c.91-2.43 5.4-6.82 9.11-10.15a3.71 3.71 0 016.18 2.31c.61 5 1.12 11.21.21 13.64a8.27 8.27 0 01-15.5-5.8z"
          />
          <AnimateSeed
            isShown={seeds >= 11}
            id="seed11"
            coords={{ x: 0, y: 70 }}
            className="cls-8"
            d="M130.64 239.86c0-2.59 2.67-8.27 5-12.7a3.72 3.72 0 016.6 0c2.31 4.43 5 10.11 5 12.7a8.28 8.28 0 01-16.56 0z"
          />
        </g>
        <g id="seeds_3" data-name="seeds 3">
          <AnimateSeed
            isShown={seeds >= 10}
            id="seed10"
            coords={{ x: 10, y: 70 }}
            className="cls-8"
            d="M176.27 243.58c-.52-2.55.93-8.65 2.29-13.45a3.73 3.73 0 016.47-1.35c3.16 3.87 6.92 8.89 7.45 11.43a8.28 8.28 0 01-16.21 3.37z"
          />
          <AnimateSeed
            isShown={seeds >= 9}
            id="seed9"
            coords={{ x: 40, y: 60 }}
            className="cls-8"
            d="M197.38 237.23c-1.12-2.34-1.16-8.62-1-13.61a3.72 3.72 0 016-2.84c4 3 8.84 7 10 9.31a8.27 8.27 0 11-14.93 7.14z"
          />
          <AnimateSeed
            isShown={seeds >= 8}
            id="seed8"
            coords={{ x: 60, y: 60 }}
            className="cls-8"
            d="M219.32 227c-2.1-1.52-5.15-7-7.38-11.47a3.72 3.72 0 013.86-5.35c4.94.72 11.11 1.89 13.21 3.41a8.27 8.27 0 11-9.69 13.41z"
          />
          <AnimateSeed
            isShown={seeds >= 7}
            id="seed7"
            coords={{ x: 60, y: 20 }}
            className="cls-8"
            d="M232.08 208.33c-2.44-.91-6.82-5.41-10.16-9.12a3.72 3.72 0 012.32-6.18c4.95-.61 11.21-1.12 13.64-.21a8.28 8.28 0 01-5.8 15.51z"
          />
          <AnimateSeed
            isShown={seeds >= 6}
            id="seed6"
            coords={{ x: 70, y: 0 }}
            className="cls-8"
            d="M240.89 186.66c-2.6 0-8.28-2.67-12.7-5a3.71 3.71 0 010-6.6c4.42-2.3 10.1-5 12.7-5a8.28 8.28 0 010 16.55z"
          />
        </g>
        <g id="seeds_4" data-name="seeds 4">
          <AnimateSeed
            isShown={seeds >= 5}
            id="seed5"
            coords={{ x: 70, y: -10 }}
            className="cls-8"
            d="M244.92 144.43c-2.58.3-8.53-1.7-13.19-3.48a3.71 3.71 0 01-.77-6.55c4.13-2.81 9.47-6.11 12-6.41a8.28 8.28 0 011.91 16.44z"
          />
          <AnimateSeed
            isShown={seeds >= 4}
            id="seed4"
            coords={{ x: 60, y: -20 }}
            className="cls-8"
            d="M239.26 123.92c-2.35 1.12-8.62 1.16-13.61 1a3.72 3.72 0 01-2.85-6c3-4 7-8.84 9.32-10a8.27 8.27 0 017.14 14.93z"
          />
          <AnimateSeed
            isShown={seeds >= 3}
            id="seed3"
            coords={{ x: 60, y: -60 }}
            className="cls-8"
            d="M228.53 102.32c-1.83 1.84-7.74 4-12.5 5.47a3.73 3.73 0 01-4.67-4.67c1.5-4.76 3.63-10.67 5.47-12.5a8.27 8.27 0 0111.7 11.7z"
          />
          <AnimateSeed
            isShown={seeds >= 2}
            id="seed2"
            coords={{ x: 40, y: -60 }}
            className="cls-8"
            d="M211.35 88.23c-.91 2.43-5.4 6.81-9.11 10.15a3.73 3.73 0 01-6.19-2.32c-.6-5-1.11-11.21-.2-13.64a8.28 8.28 0 0115.5 5.81z"
          />
          <AnimateSeed
            isShown={seeds >= 1}
            id="seed1"
            coords={{ x: 0, y: -70 }}
            className="cls-8"
            d="M189.68 79.41c0 2.6-2.66 8.28-5 12.71a3.72 3.72 0 01-6.6 0c-2.31-4.43-5-10.11-5-12.71a8.28 8.28 0 0116.55 0z"
          />
        </g>

        <motion.g
          clipPath="url(#clip-path)"
          id="quarter_1"
          data-name="quarter 1"
          initial={{ opacity: 1, scale: 1 }}
          animate={pomo < 1 ? 'start' : 'finish'}
          variants={{
            start: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
            finish: { opacity: 0, scale: 0.8, x: -60, y: -60, rotate: -20 },
          }}
          transition={tweenTransition}
        >
          <circle
            cx={159}
            cy={159.2}
            r={127.83}
            fill="url(#radial-gradient-4)"
          />
          <circle
            cx={159}
            cy={159.2}
            r={127.83}
            fill="url(#radial-gradient-5)"
          />
          <circle
            cx={159}
            cy={159.2}
            r={127.83}
            fill="url(#radial-gradient-6)"
          />
        </motion.g>
        <motion.g
          clipPath="url(#clip-path-2)"
          id="quarter_2"
          data-name="quarter 2"
          initial={{ opacity: 1, scale: 1 }}
          animate={pomo < 2 ? 'start' : 'finish'}
          variants={{
            start: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
            finish: { opacity: 0, scale: 0.8, x: -60, y: 60, rotate: -20 },
          }}
          transition={tweenTransition}
        >
          <circle
            cx={159}
            cy={158.2}
            r={127.83}
            fill="url(#radial-gradient-7)"
          />
          <circle
            cx={159}
            cy={158.2}
            r={127.83}
            fill="url(#radial-gradient-8)"
          />
          <circle
            cx={159}
            cy={158.2}
            r={127.83}
            fill="url(#radial-gradient-9)"
          />
        </motion.g>
        <motion.g
          clipPath="url(#clip-path-3)"
          id="quarter_3"
          data-name="quarter 3"
          initial={{ opacity: 1, scale: 1 }}
          animate={pomo < 3 ? 'start' : 'finish'}
          variants={{
            start: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
            finish: { opacity: 0, scale: 0.8, x: 60, y: 60, rotate: -20 },
          }}
          transition={tweenTransition}
        >
          <circle
            cx={158}
            cy={158.2}
            r={127.83}
            fill="url(#radial-gradient-10)"
          />
          <circle
            cx={158}
            cy={158.2}
            r={127.83}
            fill="url(#radial-gradient-11)"
          />
          <circle
            cx={158}
            cy={158.2}
            r={127.83}
            fill="url(#radial-gradient-12)"
          />
        </motion.g>
        <motion.g
          clipPath="url(#clip-path-4)"
          id="quarter_4"
          data-name="quarter 4"
          initial={{ opacity: 1, scale: 1 }}
          animate={pomo < 4 ? 'start' : 'finish'}
          variants={{
            start: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
            finish: { opacity: 0, scale: 0.8, x: 60, y: -60, rotate: -20 },
          }}
          transition={tweenTransition}
        >
          <circle
            cx={158}
            cy={159.2}
            r={127.83}
            fill="url(#radial-gradient-13)"
          />
          <circle
            cx={158}
            cy={159.2}
            r={127.83}
            fill="url(#radial-gradient-14)"
          />
          <circle
            cx={158}
            cy={159.2}
            r={127.83}
            fill="url(#radial-gradient-15)"
          />
        </motion.g>
      </g>
    </motion.svg>
  )
}

export default Tomato

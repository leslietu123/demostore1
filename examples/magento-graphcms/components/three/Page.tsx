/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { GlobalStyles } from '@mui/material'
import { MotionConfig, motion, m } from 'framer-motion'
import { Suspense, useState } from 'react'
import { Scene } from './Scene'
import { transition } from './settings'

export function Page() {
  const [isFullscreen, setFullscreen] = useState(false)

  return (
    <>
      <GlobalStyles
        styles={
          /* css */ `


.container {
  width: 200px;
  height: 200px;
  z-index: 0;
  background: #cc0f4e;
}

canvas {
  cursor: pointer;
}

[data-is-fullscreen="true"] .container {
  position: fixed;
  inset: 0;
  width: auto;
  height: auto;
}

h1 {
  z-index: 1;
  display: block;
  position: relative;
  font-size: 24px;
  line-height: 1;
  white-space: nowrap;
}

[data-is-fullscreen="true"] h1 {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 18px;
}
`
        }
      />
      <MotionConfig transition={transition}>
        <div data-is-fullscreen={isFullscreen} onClick={() => setFullscreen(!isFullscreen)}>
          <m.div className='container' layout>
            <Suspense fallback={null}>
              <Scene isFullscreen={isFullscreen} />
            </Suspense>
          </m.div>
        </div>
      </MotionConfig>
    </>
  )
}

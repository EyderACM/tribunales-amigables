import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
            font-family: 'Acme';
            src: url('/fonts/Acme-Regular.ttf');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        }

        @font-face {
            font-family: 'Tajawal';
            src: url('/fonts/Tajawal-Regular.ttf');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        }
        `}
    />
  )
}

export default Fonts

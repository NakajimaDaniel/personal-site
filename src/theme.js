
import { extendTheme } from '@chakra-ui/react'

const colors = {
  black: {
    "900": "#1F1F1F",
  },
  yellow: {
    "500": "#FFC700",
  },
  gray: {
    "700": "#505050",
    "500": "#A8A8A8",
    "400": "#D1D1D1",
  },

  blue: {
    "transparent": "rgba(26, 32, 44, 0.9)",
    "800": "#1F2531",
  },

  white: {
    "transparent": "rgba(255, 255, 255, 0.9)",
    "700": "#F9F9F9",
  }

  
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}


export const theme = extendTheme({ colors, config })


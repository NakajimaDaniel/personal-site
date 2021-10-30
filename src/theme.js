
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
    "800": "#1F2531",
  },

  
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}


export const theme = extendTheme({ colors, config })


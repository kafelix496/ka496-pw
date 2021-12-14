import { useMemo } from 'react'

import { createTheme } from '@mui/material'
import { indigo, grey } from '@mui/material/colors'

import type { Theme } from '@mui/material'
import type { PaletteModeType } from '@/redux-types/theme'

export default function useCustomizedTheme({
  paletteMode
}: {
  paletteMode: PaletteModeType
}): {
  theme: Theme
} {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
          primary: { main: paletteMode === 'dark' ? indigo[400] : indigo[600] },
          secondary: { main: paletteMode === 'dark' ? grey[300] : grey[700] },
          bgHoverDim:
            paletteMode === 'dark'
              ? 'rgba(255, 255, 255, 0.08)'
              : 'rgba(0, 0, 0, 0.04)'
        },
        typography: {
          fontFamily: 'Lato'
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 420,
            md: 768,
            lg: 1080,
            xl: 1536
          }
        }
      }),
    [paletteMode]
  )

  return { theme }
}

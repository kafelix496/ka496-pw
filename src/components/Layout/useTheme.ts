import { useMemo } from 'react'

import { createTheme } from '@mui/material'
import type { Theme } from '@mui/material'
import { indigo, grey } from '@mui/material/colors'

const useDinoTheme = ({
  isDarkMode
}: {
  isDarkMode: boolean
}): { theme: Theme } => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: { main: isDarkMode ? indigo[400] : indigo[600] },
          secondary: { main: isDarkMode ? grey[300] : grey[700] }
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
    [isDarkMode]
  )

  return { theme }
}

export default useDinoTheme

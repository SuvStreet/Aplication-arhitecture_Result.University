import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'

export const MantineStyleProvider = ({ children }) => {
  return <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
}

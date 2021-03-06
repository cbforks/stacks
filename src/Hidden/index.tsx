import React from 'react'
import { View, ViewProps } from 'react-native'

import { useBreakpoint } from '../context'
import { isCurrentBreakpointBelow, isCurrentBreakpointAbove, Breakpoint } from '../utils'

export interface Props {
  children: React.ReactNode
  below?: Exclude<Breakpoint, 'mobile'>
  above?: Exclude<Breakpoint, 'desktop'>
  style?: ViewProps['style']
}

export const Hidden = (props: Props) => {
  const { children, below, above, style } = props
  const { currentBreakpoint } = useBreakpoint()

  if (typeof below === 'undefined' && typeof above === 'undefined') {
    return null
  }

  return isCurrentBreakpointBelow(currentBreakpoint, below) ||
    isCurrentBreakpointAbove(currentBreakpoint, above) ? null : (
    <View style={style}>{children}</View>
  )
}

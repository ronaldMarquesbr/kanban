import { styled } from '@/styles'
import * as Progress from '@radix-ui/react-progress'

export const ProgressBarContainer = styled(Progress.Root, {
  width: '100%',
  height: '1rem',
  overflow: 'hidden',
  borderRadius: '9999px',
  backgroundColor: 'rgba(0,0,0,.2)',
  padding: '.18rem',
  display: 'flex',
  justifyContent: 'flex-start',
  alignContent: 'center',
})

export const ProgressBarIndicator = styled(Progress.Indicator, {
  backgroundColor: '$gray900',
  borderRadius: 'inherit',
  height: '100%',
})

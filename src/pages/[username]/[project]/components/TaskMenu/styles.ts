import { keyframes, styled } from '@/styles'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const MenuTrigger = styled(DropdownMenu.Trigger, {
  all: 'unset',
  borderRadius: '100%',
  lineHeight: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const MenuContainer = styled(DropdownMenu.Content, {
  background: '$white',
  boxShadow: '0 2px 8px 3px rgba(0,0,0,0.15)',
  borderRadius: 8,
  padding: '.5rem .5rem',
  animation: `${slideUpAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const ItemsGroup = styled(DropdownMenu.Group, {
  display: 'flex',
  flexDirection: 'column',
})

export const MenuItem = styled(DropdownMenu.Item, {
  padding: '.3rem .8rem',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '3rem',
  fontSize: '$xs',
  color: '$gray800',
  cursor: 'pointer',
  outline: '0',
  transition: 'background .2s',

  '&:focus': {
    background: '$gray200',
  },
})

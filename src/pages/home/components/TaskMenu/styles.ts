import { styled } from '@/styles'
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

export const MenuContainer = styled(DropdownMenu.Content, {
  background: '$white',
  boxShadow: '0 2px 8px 3px rgba(0,0,0,0.15)',
  borderRadius: 8,
  padding: '.5rem .5rem',
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

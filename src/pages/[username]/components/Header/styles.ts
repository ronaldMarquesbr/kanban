import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1rem 3rem',
})

export const Greetings = styled('strong', {
  fontSize: '$2xl',
  fontWeight: '600',
})

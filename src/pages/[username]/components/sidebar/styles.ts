import { styled } from '@/styles'
import Image from 'next/image'

export const SidebarContainer = styled('aside', {
  width: '19rem',
  height: '100vh',
  padding: '3rem 1.25rem',
  borderEndEndRadius: 8,
  borderStartEndRadius: 8,
  backgroundColor: '$gray900',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
})

export const SidebarContent = styled('div', {
  width: '100%',
})

export const ProfileImage = styled(Image, {
  borderRadius: '100%',
  objectFit: 'cover',
  minWidth: 70,
  maxWidth: 70,
})

export const ProfileGrid = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    '& span:nth-child(1)': {
      color: '$gray300',
      fontSize: '$xs',
    },

    '& span:nth-child(2)': {
      color: '$gray100',
      fontSize: '$lg',
    },
  },
})

export const Menu = styled('ul', {
  '& > span': {
    color: '$gray200',
    display: 'block',
    margin: '3rem 0 3.5rem',
    fontSize: '$md',
  },
  '& > li': {
    color: '$gray100',
    fontSize: '$s',
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',

    '& ~ &': {
      marginTop: '1.5rem',
    },
  },
})

export const ProjectList = styled('ul', {
  li: {
    fontSize: '$s',
    color: '$gray400',
    'li ~ li': {
      marginTop: '.2rem',
    },
  },
})

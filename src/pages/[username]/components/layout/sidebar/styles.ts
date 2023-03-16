import { styled } from '@/styles'

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

export const ProfileGrid = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  marginBottom: '10rem',

  span: {
    color: '$gray100',
    fontSize: '$lg',
    textTransform: 'capitalize',
  },
})

export const Menu = styled('ul', {
  '& > li': {
    color: '$gray100',
    fontSize: '$s',
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
    position: 'relative',

    '& ~ &': {
      marginTop: '1.5rem',
    },
  },
})

export const ProjectList = styled('ul', {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  listStyleType: 'none',
  marginTop: '1.25rem',
  marginLeft: 'calc(32px + 0.75rem)',
})

export const ProjectListItem = styled('li', {
  fontSize: '$s',
  color: '$gray400',
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',

  '& ~ li': {
    marginTop: '1rem',
  },

  variants: {
    active: {
      true: {
        color: '$white',
        svg: {
          borderRadius: 9999,
          background: 'white',
        },
      },
    },
  },
})

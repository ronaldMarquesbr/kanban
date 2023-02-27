import { styled } from '@/styles'

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100vh - $headerHeight)',
  padding: '2.75rem 2rem',
})

export const ProjectTitle = styled('h1', {
  fontSize: '3rem',
  fontWeight: '700',
  marginBottom: '2rem',
})

export const CardsGrid = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',
})

export const TasksCard = styled('div', {
  backgroundColor: 'rgba(0,0,0,.05)',
  borderRadius: 12,
  fontWeight: '500',
  width: '22.5rem',
  padding: '1rem 1.25rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    fontSize: '$md',
    fontWeight: '500',
    paddingBottom: '1rem',

    span: {
      fontSize: '2rem',
      lineHeight: '0',
    },
  },

  variants: {
    category: {
      'to-do': {
        header: {
          borderBottom: '3px solid $blue700',

          span: {
            color: '$blue700',
          },
        },
      },
      'on-progress': {
        header: {
          borderBottom: '3px solid $yellow300',

          span: {
            color: '$yellow300',
          },
        },
      },
      done: {
        header: {
          borderBottom: '3px solid $green300',

          span: {
            color: '$green300',
          },
        },
      },
    },
  },
})

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
  height: 'fit-content',
  width: '22.5rem',
  padding: '1rem 1.25rem',

  '& > header': {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    fontSize: '$md',
    fontWeight: '600',
    paddingBottom: '1rem',
    marginBottom: '1.75rem',
    color: '$gray800',

    span: {
      fontSize: '2rem',
      lineHeight: '0',
    },
  },

  variants: {
    category: {
      'to-do': {
        '& > header': {
          borderBottom: '3px solid $blue700',

          span: {
            color: '$blue700',
          },
        },
      },
      'on-progress': {
        '& > header': {
          borderBottom: '3px solid $yellow300',

          span: {
            color: '$yellow300',
          },
        },
      },
      done: {
        '& > header': {
          borderBottom: '3px solid $green300',

          span: {
            color: '$green300',
          },
        },
      },
    },
  },
})

export const TaskCard = styled('div', {
  width: '100%',
  background: '$white',
  padding: '1rem',
  borderRadius: 12,

  '& ~ &': {
    marginTop: '1rem',
  },

  footer: {
    marginTop: '1.25rem',
  },

  p: {
    color: '$gray600',
    fontSize: '$xs',
    fontWeight: '500',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.375rem',
    marginBottom: '.385rem',

    strong: {
      fontSize: '$lg',
      color: '$gray800',
    },

    'div:nth-child(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
})

export const PriorityLabel = styled('span', {
  display: 'inline-block',
  padding: '.25rem .5rem',
  fontSize: '$xs',
  fontWeight: '600',
  borderRadius: 6,

  variants: {
    priority: {
      low: {
        background: 'rgba(255, 160, 92, .3)',
        color: '$yellow200',
      },

      high: {
        background: 'rgba(233, 73, 87, .3)',
        color: '$red400',
      },
    },
  },
})

export const NoTaskIndicator = styled('span', {
  width: '100%',
  fontSize: '$s',
  color: '$gray600',
  display: 'block',
  textAlign: 'center',
})

import { FieldCore } from '@/pages/[username]/components/NewItemModal/styles'
import { styled } from '@/styles'

export const NewTaskButton = styled('button', {
  all: 'unset',
  height: '2.8rem',
  fontWeight: 'bold',
  backgroundColor: '$green300',
  padding: '0 1.5rem',
  borderRadius: 14,
  boxShadow: '0 3px 12px 1px rgba(0,0,0,.28)',
  cursor: 'pointer',
  transition: 'background ease-out .3s, color ease-out .3s',

  '&:hover': {
    background: 'transparent',
    color: '$green300',
  },
})

export const SubTaskContainer = styled(FieldCore, {
  'div ~ div': {
    marginTop: '1rem',
  },
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    input: {
      width: '100%',
    },
  },
  '& > button': {
    all: 'unset',

    width: '100%',
    height: '2.75rem',

    color: '$gray100',
    backgroundColor: '$blue700',
    fontWeight: '500',
    borderRadius: 10,
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '.5rem',

    marginTop: '.75rem',

    '&:hover': {
      filter: 'grayscale(.25)',
    },
  },
})

export const DeleteSubTaskButton = styled('button', {
  all: 'unset',
  lineHeight: '0',
  cursor: 'pointer',

  svg: {
    transition: 'color .3s',
    '&:hover': {
      color: '$red500',
    },
  },
})

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DotsThree, Eye, PencilSimple, Trash } from 'phosphor-react'
import { ItemsGroup, MenuContainer, MenuItem, MenuTrigger } from './styles'

export function TaskMenu() {
  return (
    <DropdownMenu.Root>
      <MenuTrigger>
        <DotsThree size={28} />
      </MenuTrigger>

      <DropdownMenu.Portal>
        <MenuContainer>
          <ItemsGroup>
            <MenuItem>
              <span>Abrir</span>
              <Eye size={18} color="#01258A" />
            </MenuItem>{' '}
            <MenuItem>
              <span>Editar</span>
              <PencilSimple size={18} color="#FF9447" />
            </MenuItem>{' '}
            <MenuItem>
              <span>Remover</span>
              <Trash size={18} color="#E63946" />
            </MenuItem>
          </ItemsGroup>
          <DropdownMenu.Arrow style={{ fill: 'white' }} />
        </MenuContainer>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

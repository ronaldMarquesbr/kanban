import { SquareHalf, SquaresFour } from 'phosphor-react'

import {
  Menu,
  ProfileGrid,
  ProfileImage,
  SidebarContainer,
  SidebarContent,
} from './styles'

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarContent>
        <ProfileGrid>
          <ProfileImage
            width={70}
            height={70}
            alt=""
            src={
              'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=100'
            }
          />
          <div>
            <span>Desenvolvedor Frontend</span>
            <span>Luciana Damasceno</span>
          </div>
        </ProfileGrid>
        <Menu>
          <span>MAIN</span>
          <li>
            <SquaresFour size={32} />
            Dashboard
          </li>
          <li>
            <SquareHalf size={32} />
            Projetos
          </li>
        </Menu>
      </SidebarContent>
    </SidebarContainer>
  )
}

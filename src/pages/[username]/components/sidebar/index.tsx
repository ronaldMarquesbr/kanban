import { UserDataContext } from '@/context/userContext'
import { SquareHalf, SquaresFour } from 'phosphor-react'
import { useContext } from 'react'

import {
  Menu,
  ProfileGrid,
  ProfileImage,
  ProjectList,
  SidebarContainer,
  SidebarContent,
} from './styles'

export default function Sidebar() {
  const {
    userData: { name, projects },
  } = useContext(UserDataContext)
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
            <span>{name}</span>
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
            {projects.length > 0 ? (
              <ProjectList>
                {projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ProjectList>
            ) : (
              <></>
            )}
          </li>
        </Menu>
      </SidebarContent>
    </SidebarContainer>
  )
}

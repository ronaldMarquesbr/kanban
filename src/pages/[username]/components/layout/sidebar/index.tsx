// import { UserDataContext } from '@/context/userContext'
import { Circle, SquareHalf, SquaresFour } from 'phosphor-react'
// import { useContext } from 'react'

import {
  Menu,
  ProfileGrid,
  ProjectList,
  ProjectListItem,
  SidebarContainer,
  SidebarContent,
} from './styles'

export default function Sidebar() {
  // const {
  //   userData: { name, projects },
  // } = useContext(UserDataContext)
  const name = 'ronald'
  // const projects = ['Mobile App', 'Site da empresa', 'UX/UI Design']

  return (
    <SidebarContainer>
      <SidebarContent>
        <ProfileGrid>
          <span>{name || ''}</span>
        </ProfileGrid>
        <Menu>
          <li>
            <SquaresFour size={32} />
            Dashboard
          </li>
          <li>
            <SquareHalf size={32} />
            Projetos
            {/* {projects.length > 0 ? (
              <ProjectList>
                {projects.map((project) => (
                  <ProjectListItem key={project}>
                    <Circle size={12} />
                    {project}
                  </ProjectListItem>
                ))}
              </ProjectList>
            ) : (
              <></>
            )} */}
            <ProjectList>
              <ProjectListItem active>
                <Circle size={12} />
                Mobile App
              </ProjectListItem>
              <ProjectListItem>
                <Circle size={12} />
                Site da empresa
              </ProjectListItem>
              <ProjectListItem>
                <Circle size={12} />
                UX/UI Design
              </ProjectListItem>
            </ProjectList>
          </li>
        </Menu>
      </SidebarContent>
    </SidebarContainer>
  )
}

import React, { createContext, ReactNode, useState } from 'react'

interface UserDataType {
  username: string
  name: string
  projects: string[] | []
}

interface UserDataContextType {
  userData: UserDataType
  setUserData: React.Dispatch<React.SetStateAction<UserDataType>>
}

interface UserContextProps {
  children: ReactNode
}

const defaultUserDataValues = { name: '', username: '', projects: [] }

export const UserDataContext = createContext<UserDataContextType>({
  userData: defaultUserDataValues,
  setUserData: () => {},
})

export function UserContext({ children }: UserContextProps) {
  const [userData, setUserData] = useState<UserDataType>(defaultUserDataValues)

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  )
}

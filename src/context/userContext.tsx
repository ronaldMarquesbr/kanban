import React, { createContext, ReactNode, useState } from 'react'

interface UserDataType {
  username: string | undefined
  name: string | undefined
  projects: string[] | []
}

interface UserDataContextType {
  userData: UserDataType
  updateUserData: (newUserData: UserDataType) => void
}

interface UserContextProps {
  children: ReactNode
}

const defaultUserDataValues = {
  name: undefined,
  username: undefined,
  projects: [],
}

export const UserDataContext = createContext<UserDataContextType>({
  userData: defaultUserDataValues,
  updateUserData: () => {},
})

export function UserContext({ children }: UserContextProps) {
  const [userData, setUserData] = useState<UserDataType>(defaultUserDataValues)

  function updateUserData(newUserData: UserDataType) {
    setUserData(newUserData)
  }

  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  )
}

import 'iron-session'

declare module 'iron-session' {
  // eslint-disable-next-line no-unused-vars
  interface IronSessionData {
    user?: {
      id: string
      admin?: boolean
    }
  }
}

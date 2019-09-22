export interface AuthJwtPayload {
  id: string
  email: string
  active: boolean
  roles: string[]
}

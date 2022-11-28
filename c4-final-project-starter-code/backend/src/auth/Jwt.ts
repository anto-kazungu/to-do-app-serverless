import { JwtPayload } from './JwtPayload'
import { JwtHeader } from 'jsonwebtoken'

/**
 * Interface representing a JWT token
 */
export interface Jwt {
  [x: string]: any
  header: JwtHeader
  payload: JwtPayload
}

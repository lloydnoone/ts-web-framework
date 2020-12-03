import { View } from './View'
import { User, UserProps } from '../models/User'

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User Detail</h1>
      <duv>User Name: ${this.model.get('name')}</div>
      <duv>User Age: ${this.model.get('age')}</div>
    </div>
    `
  }
}
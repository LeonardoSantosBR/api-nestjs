/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';
export class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public typeUser: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = randomUUID();
    }
  }
}

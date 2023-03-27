import { randomUUID } from 'crypto';
export class Admin {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public typeUser: string;

  constructor(props: Omit<Admin, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = randomUUID();
    }
  }
}

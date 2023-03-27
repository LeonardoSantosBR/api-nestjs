import { Injectable } from '@nestjs/common';

import { UsersService } from 'src/controllers/users/users.service';
import { AdminService } from 'src/controllers/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private adminService: AdminService,
  ) {}

  async findUser(id: string) {
    const user = await this.usersService.findOne(id);
    return user;
  }

  async findAdmin(id: string) {
    const admin = await this.adminService.findOne(id);
    return admin;
  }
}

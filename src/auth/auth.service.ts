import { Injectable } from '@nestjs/common';

import { UsersService } from 'src/controllers/users/users.service';
import { AdminService } from 'src/controllers/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private adminService: AdminService,
  ) {}

  async findUser(username, password) {
    const user = await this.usersService.findUser(username, password);
    return user;
  }

  async findAdmin(username, password) {
    const admin = await this.adminService.findAdmin(username, password);
    return admin;
  }
}

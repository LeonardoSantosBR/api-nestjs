import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async create(User: CreateUserDto) {
    try {
    } catch (error) {}
  }

  async findAll() {
    try {
    } catch (error) {}
  }

  async findOne(id: string) {
    try {
    } catch (error) {}
  }

  /*findUser(username: string, password: string) {
    return `This action returns a #${username} user with password ${password}`;
  }*/

  async update(id: string) {
    try {
    } catch (error) {}
  }

  async remove(id: string) {
    try {
    } catch (error) {}
  }
}

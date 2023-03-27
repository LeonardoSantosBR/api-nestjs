import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaClient: PrismaService) {}

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
      return id;
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

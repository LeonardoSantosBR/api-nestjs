import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly prismaClient: PrismaService) {}

  async create(Admin: CreateAdminDto) {
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

  /*async findAdmin(username: string, password: string) {
    try {
    } catch (error) {}
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

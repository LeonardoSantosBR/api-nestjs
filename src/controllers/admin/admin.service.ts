import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly prismaClient: PrismaClient) {}

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

  async remove(id: number) {
    try {
    } catch (error) {}
  }
}

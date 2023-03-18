/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class DeleteMembersService {
  constructor(private readonly prisma: PrismaService) {}

  async deleteMember(id) {
    try {
      const deletedMember = await this.prisma.teamMembers.delete({
        where: { id: id },
      });
      return deletedMember
    } catch (error) {
      return error;
    }
  }
  async GetMemberById(id: string) {
    try {
      const member = await this.prisma.teamMembers.findUnique({
        where: { id: id },
      });
      return member;
    } catch (error) {
      return error;
    }
  }
}

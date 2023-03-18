import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class PutMembersService {
  constructor(private readonly prisma: PrismaService) {}
  async PutMember(member: any, newname: string) {
    try {
      const updatedMember = await this.prisma.teamMembers.update({
        where: {
          id: member.id,
        },
        data: {
          name: newname,
        },
      });
      return updatedMember;
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

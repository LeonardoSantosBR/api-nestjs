import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { MembersDTO } from './members.dto';

@Injectable()
export class PostMembersService {
  constructor(private readonly prisma: PrismaService) {}

  async CreateMembers(data: MembersDTO) {
    try {
      const NewMember = await this.prisma.teamMembers.create({
        data: {
          id: randomUUID(),
          userRegistration: data.userRegistration,
          name: data.name,
          responsability: data.responsability,
        },
      });
      return NewMember;
    } catch (error) {
      return error;
    }
  }
}

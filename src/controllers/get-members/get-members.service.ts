import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class GetService {
  constructor(private prisma: PrismaService) {}

  async GetAll() {
    const AllMembers = await this.prisma.teamMembers.findMany();
    return AllMembers;
  }
}

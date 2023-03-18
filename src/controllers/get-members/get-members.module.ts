import { Module } from '@nestjs/common';
import { GetMembersController } from './get-members.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { GetService } from './get-members.service';

@Module({
  imports: [],
  controllers: [GetMembersController],
  providers: [GetService, PrismaService],
})
export class GetMembers {}

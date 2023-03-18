import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { PutMembersController } from './put-members.controller';
import { PutMembersService } from './put-members.service';

@Module({
  imports: [],
  controllers: [PutMembersController],
  providers: [PutMembersService, PrismaService],
})
export class PutMembers {}

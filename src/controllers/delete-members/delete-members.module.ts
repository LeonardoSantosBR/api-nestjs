/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { DeleteMembersController } from './delete-members.controller';
import { DeleteMembersService } from './delete-members.service';

@Module({
  imports: [],
  controllers: [DeleteMembersController],
  providers: [PrismaService, DeleteMembersService],
})
export class DeleteMembers {}

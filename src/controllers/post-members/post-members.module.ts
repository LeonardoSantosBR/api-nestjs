import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { PostMembersController } from './post-members.controller';
import { PostMembersService } from './post-members.service';

@Module({
  imports: [],
  controllers: [PostMembersController],
  providers: [PostMembersService, PrismaService],
})
export class PostMembers {}

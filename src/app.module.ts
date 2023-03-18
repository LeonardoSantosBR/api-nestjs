import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma.service';

//controllers
import { GetMembersController } from './controllers/get-members/get-members.controller';
import { PostMembersController } from './controllers/post-members/post-members.controller';
import { PutMembersController } from './controllers/put-members/put-members.controller';
import { DeleteMembersController } from './controllers/delete-members/delete-members.controller';
//services
import { GetService } from './controllers/get-members/get-members.service';
import { PostMembersService } from './controllers/post-members/post-members.service';
import { PutMembersService } from './controllers/put-members/put-members.service';
import { DeleteMembersService } from './controllers/delete-members/delete-members.service';

@Module({
  imports: [],
  controllers: [
    GetMembersController,
    PostMembersController,
    PutMembersController,
    DeleteMembersController,
  ],
  providers: [
    GetService,
    PostMembersService,
    PutMembersService,
    DeleteMembersService,
    PrismaService,
  ],
})
export class AppModule {}

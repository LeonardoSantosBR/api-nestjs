import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma.service';

import { UsersModule } from './controllers/users/users.module';
import { AdminModule } from './controllers/admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { UsersController } from './controllers/users/users.controller';
import { AdminController } from './controllers/admin/admin.controller';

import { UsersService } from './controllers/users/users.service';
import { AdminService } from './controllers/admin/admin.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UsersModule, AdminModule, AuthModule],
  controllers: [UsersController, AdminController],
  providers: [PrismaService, UsersService, AdminService, AuthService],
})
export class AppModule {}

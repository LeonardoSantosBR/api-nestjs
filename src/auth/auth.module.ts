import { Module } from '@nestjs/common';

import { UsersModule } from 'src/controllers/users/users.module';
import { AdminModule } from 'src/controllers/admin/admin.module';

import { AuthService } from './auth.service';
import { UsersService } from 'src/controllers/users/users.service';
import { AdminService } from 'src/controllers/admin/admin.service';
import { LocalStrategy } from './local.strategy';
import { PrismaService } from 'src/infra/database/prisma.service';

@Module({
  imports: [UsersModule, AdminModule],
  providers: [
    AuthService,
    UsersService,
    AdminService,
    LocalStrategy,
    PrismaService,
  ],
})
export class AuthModule {}

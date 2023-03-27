/* eslint-disable prettier/prettier */
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { PrismaService } from './infra/database/prisma.service';

import { UsersModule } from './controllers/users/users.module';
import { AdminModule } from './controllers/admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { UsersController } from './controllers/users/users.controller';
import { AdminController } from './controllers/admin/admin.controller';

import { UsersService } from './controllers/users/users.service';
import { AdminService } from './controllers/admin/admin.service';
import { AuthService } from './auth/auth.service';

import { UsersMiddleware } from './middleware/users/users.middleware';
import { AdminMiddleware } from './middleware/admin/admin.middleware';

@Module({
  imports: [UsersModule, AdminModule, AuthModule],
  controllers: [UsersController, AdminController],
  providers: [PrismaService, UsersService, AdminService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.ALL });
    consumer
      .apply(AdminMiddleware)
      .forRoutes({ path: 'admin', method: RequestMethod.ALL });
  }
}

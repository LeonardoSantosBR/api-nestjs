import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.authService.findUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
  async validateAdmin(username: string, password: string): Promise<any> {
    const admin = await this.authService.findAdmin(username, password);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }
}

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validateUser(id: string): Promise<any> {
    const user = await this.authService.findUser(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
  async validateAdmin(id: string): Promise<any> {
    const admin = await this.authService.findAdmin(id);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }
}

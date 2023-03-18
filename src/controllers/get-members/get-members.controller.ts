import { Controller, Get } from '@nestjs/common';
import { GetService } from './get-members.service';

@Controller('api')
export class GetMembersController {
  constructor(private readonly getService: GetService) {}

  @Get('get/members')
  async getMembers() {
    try {
      const Allmembers = await this.getService.GetAll();
      return Allmembers;
    } catch (error) {
      return error;
    }
  }
}

import { Controller, Param, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PutMembersService } from './put-members.service';

@Controller('api')
export class PutMembersController {
  constructor(private readonly putMembersService: PutMembersService) {}

  @Put('put/:id')
  async PutMembers(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id,
  ) {
    try {
      const { name } = request.body;
      const member = await this.putMembersService.GetMemberById(id);
      if (!member) {
        return response
          .status(500)
          .json('Não foi possível encontrar o usuário com esse Id.');
      }
      const UpdatedMember = await this.putMembersService.PutMember(
        member,
        name,
      );
      return response.status(200).json(UpdatedMember);
    } catch (error) {
      return error;
    }
  }
}

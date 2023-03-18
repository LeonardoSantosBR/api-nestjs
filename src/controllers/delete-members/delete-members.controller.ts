/* eslint-disable prettier/prettier */
import { Controller, Delete, Req, Res, Query } from '@nestjs/common';
import { DeleteMembersService } from './delete-members.service';
import { Request, Response } from 'express';

@Controller('api')
export class DeleteMembersController {
  constructor(private readonly deleteMembers: DeleteMembersService) {}

  @Delete('delete')
  async DeleteMember(
    @Req() request: Request,
    @Res() response: Response,
    @Query('id') id,
  ) {
    try {
      const memberExists = await this.deleteMembers.GetMemberById(id);
      if (memberExists) {
        await this.deleteMembers.deleteMember(id);
        return response.status(200).send(`Usuário de id=${id} excluído`);
      }
      return response.status(500).send(`Usuário de id=${id} não encontrado`);
    } catch (error) {
      return error;
    }
  }
}

import { Controller, Post, Req, Res } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { PostMembersService } from './post-members.service';

@Controller('api')
export class PostMembersController {
  constructor(private readonly postService: PostMembersService) {}

  @Post('post/members')
  async PostMembers(@Req() request: Request, @Res() response: Response) {
    try {
      const body = request.body;
      const NewMember = await this.postService.CreateMembers(body);
      console.log(NewMember);
      return response.status(200).json(NewMember);
    } catch (error) {
      return error;
    }
  }
}

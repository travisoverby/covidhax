import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user/register')
  registerUser(): object {
    return this.userService.registerUser();
  }
}

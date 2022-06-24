import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, ShowUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AppConfig } from '../config/app.config';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto): Promise<ShowUserDto> {
    if (AppConfig.debug) {
      console.log('Server received following POST request:', createUserDto)
    }
    return this.userService.create(createUserDto);
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigValidation } from 'src/config/regex.config';
import { Repository } from 'typeorm';
import { CreateUserDto, ShowUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { AppConfig } from '../config/app.config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ShowUserDto> {
    await this.validateData(createUserDto);
    const resp = await this.userRepository.save(createUserDto);
    if (AppConfig.debug && resp) {
      console.log('Saving to database.... success')
    }
    delete resp.password;
    return resp;
  }

  async validateData(createUserDto: CreateUserDto): Promise<boolean> {
    if (!createUserDto.is_agree) {
      throw new HttpException(
        'ERROR: is_agree not checked', HttpStatus.BAD_REQUEST
      );
    }

    const dataFromReq = new Map(Object.entries(createUserDto));
    dataFromReq.forEach((value, key) => {
      if (!value) {
        throw new HttpException(
          `ERROR: field "${key}" is empty`,
          HttpStatus.BAD_REQUEST,
        );
      }
    });

    const validatePhoneNumber = ConfigValidation.phoneNumber;
    if (!validatePhoneNumber.test(createUserDto.phone_number)) {
      throw new HttpException(
        'ERROR: invalid phone_number',
        HttpStatus.BAD_REQUEST,
      );
    }

    const validatePassword = ConfigValidation.password;
    if (!validatePassword.test(createUserDto.password)) {
      throw new HttpException(
        'ERROR: invalid password',
        HttpStatus.BAD_REQUEST,
      );
    }

    const validateEmail = ConfigValidation.email;
    if (!validateEmail.test(createUserDto.email)) {
      throw new HttpException('ERROR: invalid email', HttpStatus.BAD_REQUEST);
    }

    return true;
  }
}

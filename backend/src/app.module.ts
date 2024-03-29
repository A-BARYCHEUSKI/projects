import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import * as Dotenv from 'dotenv';

Dotenv.config();
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule],
})
export class AppModule {}

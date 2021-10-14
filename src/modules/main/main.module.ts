import { AdminController } from './admin.controller';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';
import { Data } from './../../models/data.entity';
import { GendataController } from './gendata.controller';
import { JwtStrategy } from '../auth/jwt.strategy';
import { User } from './../../models/user.entity';
import { UserController } from './user.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Data, User])],
  providers: [DataService, UserService, JwtStrategy],
  controllers: [UserController, AdminController, GendataController],
})
export class MainModule {}

import { AuthGuard } from '@nestjs/passport';
import { User } from './../../models/user.entity';
import { UserService } from '../../services/user.service';
import {
  Controller,
  Get,
  Post,
  Render,
  Body,
  Res,
  UseGuards,
} from '@nestjs/common';
import * as moment from 'moment';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
moment.locale('vi');

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  @Render('user/index')
  async index() {
    var userList = await this.userService.getAll();
    var userlistRender = userList.map((x) =>
      Object({
        ...x,
        updateAt: moment(x.updateAt).fromNow(),
      }),
    );
    return { userList: userlistRender };
  }

  @Post('/delete')
  // @UseGuards(AuthGuard('jwt'))
  async delete(@Res() res: Response, @Body() user: User) {
    let e = user.email.toString();
    await this.userService.deleteOne(e);
    res.redirect('/user');
  }

  @Post('/checkEmail')
  // @UseGuards(AuthGuard('jwt'))
  async checkId(@Body('email') email: string) {
    var Email = await this.userService.selectOne(email);
    if (Email) return { status: 'FOUND' };
    return { status: 'NOT_FOUND' };
  }

  @Post('/add')
  // @UseGuards(AuthGuard('jwt'))
  async addOne(@Res() res: Response, @Body() user: User) {
    const salt = await bcrypt.genSalt(15);
    user.password = await bcrypt.hash(String(user.password), salt);
    await this.userService.insertOne(user);
    res.redirect('/user');
  }
}

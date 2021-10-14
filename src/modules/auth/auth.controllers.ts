import { Request, Response } from 'express';
import { UserService } from '../../services/user.service';

import {
  Controller,
  Get,
  Render,
  UseGuards,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  @Get('login')
  @Render('login/index')
  async loginPage(@Req() req: Request) {
    const msg = req.query.message;
    const ViewBag = {
      msg: msg,
    };
    return ViewBag;
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req: Request, @Res() res: Response) {
    const user = req.user;

    const accessToken = this.jwtService.sign(user);
    res.cookie('BKCookies', accessToken);
    return res.redirect('/admin');
  }

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('BKCookies');
    return res.redirect('/login');
  }
}

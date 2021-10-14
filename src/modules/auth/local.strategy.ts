import { UserService } from './../../services/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as bcrypt from 'bcrypt';
// Implementing passport local
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    // pass options object to constructor to configure
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.userService.selectOne(email);
    if (!user) throw new UnauthorizedException('Sign in: Failed!');
    if (!(await bcrypt.compare(password, String(user.password))))
      throw new UnauthorizedException('Sign in: Wrong password or email');
    return {
      email: user.email,
    };
  }
}

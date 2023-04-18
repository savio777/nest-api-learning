import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IAuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // /auth/signin
  @Post('signin')
  signIn(@Body() dto: IAuthDto) {
    console.log(dto);
    return this.authService.signIn();
  }

  @Post('signup')
  signUp() {
    return this.authService.signUp();
  }
}

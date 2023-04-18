import { Injectable } from '@nestjs/common';

Injectable({});
export class AuthService {
  signIn() {
    return { message: 'signin test 1' };
  }

  signUp() {
    return { message: 'signup test 1' };
  }
}

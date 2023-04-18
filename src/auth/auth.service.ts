import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

Injectable({});
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signIn() {
    return { message: 'signin test 1' };
  }

  signUp() {
    return { message: 'signup test 1' };
  }
}

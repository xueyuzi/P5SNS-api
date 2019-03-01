import { Module } from '@nestjs/common';
import {JwtModule}from "@nestjs/jwt";
@Module({
  imports:[JwtModule.register({ secretOrPrivateKey: 'key' })],
})
export class AuthModule {}

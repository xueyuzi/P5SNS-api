import { Controller, Get, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  getHello(): string {
    return this.appService.getHello();
  }

}

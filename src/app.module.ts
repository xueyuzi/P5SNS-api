import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
@Module({
  imports: [AuthModule],
  controllers: [AppController,LoginController],
  providers: [AppService,AuthService,LoginService],
})
export class AppModule { }

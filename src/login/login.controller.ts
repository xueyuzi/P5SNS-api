import { Controller, Post,Response, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
@Controller()
export class LoginController {
    constructor(private loginService: LoginService) { }
    @Post("regist")
    getToken(): string {
        return this.loginService.getToken();
    }

    @Post("login")
    login(@Response() res):string{
        var token = this.loginService.getToken();
        return res.status(HttpStatus.OK).json(token);
    }
}

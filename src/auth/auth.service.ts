import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }
    createToken(): string {
        return this.jwtService.sign({ name: "lings", id: 1, email: "xueyu.d@gmail.com" });
    }
    async verify(token: string) {
        try {
            var decoded = await this.jwtService.verify(token);
            console.log(decoded);
        } catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }
}

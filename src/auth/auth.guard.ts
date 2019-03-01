import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    var headers: any = context.getArgs()[0].headers;
    var token: string = headers.token;
    return this.authService.verify(token);
    return true;
  }
}

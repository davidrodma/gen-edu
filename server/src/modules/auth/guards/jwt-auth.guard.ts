// NestJS
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// Password
import { AuthGuard } from '@nestjs/passport';
// Decorators
import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator';
// Error Handling
import { UnauthorizedError } from '../errors/unauthorized.error';
import { AuthRequest } from '../models/AuthRequest';
import { UserService } from 'src/modules/user/services/user.service';
import { UserFromJwt } from '../models/UserFromJwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    private readonly userService: UserService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext): Promise<boolean> | boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    const canActivate = super.canActivate(context);

    if (typeof canActivate === 'boolean') {
      return canActivate;
    }

    const canActivatePromise = canActivate as Promise<boolean>;
    return canActivatePromise
      .then(async (result) => {
        const request = context.switchToHttp().getRequest<AuthRequest>();

        const { user } = request;
        if (!user?.id) {
          return false;
        }
        const userCurrent = await this.userService.findById(user.id);
        if (!userCurrent?.id || !userCurrent?.status) {
          return false;
        }
        const userJwtCurrent: UserFromJwt = {
          id: userCurrent.id,
          email: userCurrent.email,
          name: userCurrent.name,
          role: userCurrent.role,
        };
        request.user = {
          ...user,
          ...userJwtCurrent,
        };
        return result;
      })
      .catch((error) => {
        console.log('JwtAuthGuard catch Error:', error);
        if (error instanceof UnauthorizedError) {
          throw new UnauthorizedException(error.message);
        }

        throw new UnauthorizedException();
      });
  }
}

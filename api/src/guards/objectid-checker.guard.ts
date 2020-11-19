import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Types } from 'mongoose';

@Injectable()
export class ObjectidCheckerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (Types.ObjectId.isValid(request.params.id)) {
    	return true;
    }
    throw new HttpException('Order ID not exists.', HttpStatus.NOT_FOUND);
  }
}

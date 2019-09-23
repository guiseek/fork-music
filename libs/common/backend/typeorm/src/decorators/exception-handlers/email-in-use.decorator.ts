import { EntityNotFoundException } from '../../exceptions/entity-not-found.exception';
import { isObservable, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmailAlreadyExistsException } from '../../exceptions';

const throwIfEmailAlreadyExists = (e: any, target: any, propertyKey: string): never => {
  if (e.name === 'EmailAlreadyExists') {
    throw new EmailAlreadyExistsException('Unable to find the requested entity', { target, method: propertyKey });
  }
  throw new Error(e);
};

export const EmailAlreadyExistsHandler: () => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => PropertyDescriptor = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]): Promise<any> | Observable<any> | undefined {
      try {
        const methodResult = originalMethod.apply(this, args);
        console.log(methodResult)
        if (isObservable(methodResult)) {
          return methodResult.pipe(catchError(e => throwIfEmailAlreadyExists(e, target, propertyKey)));
        }
        return methodResult;
      } catch (e) {
        throwIfEmailAlreadyExists(e, target, propertyKey);
      }
    };

    return descriptor;
  };
};


// import { createParamDecorator } from '@nestjs/common';

// export const EmailInUse = createParamDecorator((data, req) => {
//   console.log(data, req)
//   return req.emailInUse;
// });

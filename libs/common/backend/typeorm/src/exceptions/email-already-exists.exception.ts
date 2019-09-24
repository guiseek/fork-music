import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyExistsException extends HttpException {
  constructor(message: string, public readonly context: { target: any; method: string }) {
    super(message, HttpStatus.CONFLICT);
  }
}

import { createParamDecorator } from '@nestjs/common';

export const CurrentUserAccount = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.req.user,
);
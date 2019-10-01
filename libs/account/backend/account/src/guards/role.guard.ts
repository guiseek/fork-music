import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { getAction } from '@nestjsx/crud'

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    //   private readonly reflector: Reflector,
    public restfulCrudOptions: {
      readAllRoles: string[],
      readOneRoles: string[],
      createOneRoles: string[],
      updateOneRoles: string[],
      deleteOneRoles: string[]
    }
  ) { }

  canActivate(context: ExecutionContext): boolean {

    const request = context.switchToHttp().getRequest()
    const handler = context.getHandler()
    const controller = context.getClass()

    // const feature = getFeature(controller)
    const action = getAction(handler)
    const user = request.user

    console.log('user')

    switch (action) {
      case 'Read-All': {
        // Do user role checking here.
      }

      case 'Read-One': {
        // Do user role checking here.
      }

      case 'Create-One': {
        // Do user role checking here.
      }

      case 'Update-One': {
        // Do user role checking here.
      }

      case 'Delete-One': {
        // Do user role checking here.
      }

      default: {
        return true
      }
    }
  }
}
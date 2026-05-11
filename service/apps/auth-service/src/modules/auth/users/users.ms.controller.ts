import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from '@app/common';

@Controller()
export class UsersMsController {
  constructor(private readonly usersService: UsersService) {
    console.log('🔥 UsersMsController LOADED');
  }

 @MessagePattern({ cmd: 'users.create' })
create(data: { dto: CreateUserDto }) {
  return this.usersService.createUser(data.dto);
}

  @MessagePattern({ cmd: 'users.list' })
  list(data: { currentUser: any }) {
    console.log('MS received data =', data);

    if (!data || !data.currentUser) {
      throw new Error('currentUser not provided to users.list');
    }

    return this.usersService.listUsers(data.currentUser);
  }

  @MessagePattern({ cmd: 'users.update' })
  update(data: { currentUser: any; userId: string; dto: UpdateUserDto }) {
    const { currentUser, userId, dto } = data;
    return this.usersService.updateUser(currentUser, userId, dto);
  }

  @MessagePattern({ cmd: 'users.delete' })
  delete(data: { currentUser: any; userId: string }) {
    const { currentUser, userId } = data;
    return this.usersService.deleteUser(currentUser, userId);
  }
}

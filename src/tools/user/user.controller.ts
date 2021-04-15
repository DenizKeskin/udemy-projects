import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { UserCreateDto, UserUpdateDto } from 'src/tools/dtos/user.dto';
  import { UserModel } from 'src/tools/models/user.model';
  import { UserService } from './user.service';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
  
    @Post()
    async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
      return await this.userService.create(body);
    }
    @Get()
    async getAllUsers(): Promise<UserModel[]> {
      return await this.userService.findAll();
    }
    @Get(':id')
    async getUserById(@Param() params): Promise<UserModel> {
      return await this.userService.findOne(params.id);
    }
    @Put(':id')
    async updateUser(
      @Param('id') id: string,
      @Body() user: UserUpdateDto,
    ): Promise<UserModel> {
      return await this.userService.update(id, user);
    }
    @Delete(':id')
    async removeUser(@Param('id') id: string): Promise<UserModel> {
      return await this.userService.delete(id);
    }
  }
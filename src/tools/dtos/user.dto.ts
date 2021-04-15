import { GroupModel } from "../models/group.model";
import { RoleModel } from "../models/role.model";

export class UserCreateDto {
  birthDay: Date;
  email: string;
  name: string;
  surname: string;
  password: string;
}
export class UserUpdateDto{
    name: string;
    surname: string;
    password: string;
    email: string;
    birthDate: Date;
    roles:RoleModel[];
    groups:GroupModel[];
}
export class UserLoginDto {
  email: string;
  password: string;
}

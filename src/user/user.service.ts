import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/tools/dtos/user.dto';
import { UserModel } from 'src/tools/models/user.model';
const result: UserModel[] = [];

@Injectable()
export class UserService {
  getAllUsers(): UserModel[] {
    if (result.length === 0) {
      this.creatingMockDataUser({
        birthDay: new Date(),
        email: 'denizkeskin2@gmail.com',
        name: 'Deniz',
        surname: 'Keskin',
        password: '121212',
      });
    }
    return result;
  }
  getUserById(id) : any {
      const user = result.find((data) => data.id == id);
    if(!user){
        return 'User bulunamadı !!';
    }else{
        return user;
    }
  }

  createUser(body: UserCreateDto) {
    const isExist = result.find((res) => {
      res.email === body.email;
    });
    if (isExist) {
      return isExist;
    } else {
      this.creatingMockDataUser(body);
      return result.slice(result.length - 1, result.length);
    }
  }

  private creatingMockDataUser(data: any) {
    const user: UserModel = new UserModel();
    user.birthDay = data.birthDay;
    user.email = data.email;
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;
    user.id = (Math.floor(Math.random() * 60) + 1).toString();
    result.push(user);
  }
}

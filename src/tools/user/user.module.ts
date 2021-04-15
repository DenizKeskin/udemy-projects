import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/tools/schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [MongooseModule.forFeature([{name:'User',schema:UserSchema}])], //Userschema'a module üzerinden user ismiyle erişeceğiz.
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
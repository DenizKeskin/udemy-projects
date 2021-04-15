

import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AuditModel } from '../models/audit.model';
import { GroupModel } from '../models/group.model';
import { RoleModel } from '../models/role.model';
import { UserModel } from '../models/user.model';

export type UserDocument = UserModel & Document ;
  
@Schema()
export class User {


  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  image: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  birthDay: Date;

  @Prop({type : AuditModel})
  audit: any;

  @Prop()
  groups: [GroupModel];
 
  @Prop()
  roles: [RoleModel];


}
export const UserSchema = SchemaFactory.createForClass(User);
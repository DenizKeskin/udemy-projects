import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";

export class UserModel{
    id:string;
    name:string;
    surname:string;
    image:string;
    email:String;
    password:string;
    birthDay:Date;  
    auidit:AuditModel;
    roles:RoleModel[];
    groups:GroupModel[];

}
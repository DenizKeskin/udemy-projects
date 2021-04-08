import { ActivityTypeModel } from "../models/activity-type.model";
import { AuditModel } from "../models/audit.model";
import { InventoryModel } from "../models/inventory.model";
import { TicketTypeModel } from "../models/ticket-type.model";
import { UserModel } from "../models/user.model";


export class TicketTCreateDto{
    id:string;
    name:string;
    description:string; 
    type:TicketTypeModel;
    responsible:UserModel;
    audit:AuditModel;
    activies:ActivityTypeModel[];
    inventories:InventoryModel[];
}
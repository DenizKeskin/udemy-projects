
import { ActivityTypeModel } from "./activity-type.model";
import { AuditModel } from "./audit.model";
import { InventoryModel } from "./inventory.model";
import { TicketTypeModel } from "./ticket-type.model";
import { UserModel } from "./user.model";

export class TicketModel{
    id:string;
    name:string;
    description:string; 
    type:TicketTypeModel;
    responsible:UserModel;
    audit:AuditModel;
    activies:ActivityTypeModel[];
    inventories:InventoryModel[];
}

import { AuditModel } from "./audit.model";
import { InverntoryTypeModel } from "./inventory-type.model";
import { ProductModel } from "./product.model";


export class InventoryModel{
    id:string;
    barcode:number;
    description:string;
    audit:AuditModel;
    type:InverntoryTypeModel;
    product:ProductModel;
}
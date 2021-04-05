import { StringifyOptions } from 'node:querystring';

export class AuditModel {
  createdDate: Date;
  createdBy: string;
  lastModifiedDate: string;
  lastModifiedBy: string;
  active: boolean;
}

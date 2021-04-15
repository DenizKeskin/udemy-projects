import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'src/tools/dtos/user.dto';
import { AuditModel } from 'src/tools/models/audit.model';
import { UserModel } from 'src/tools/models/user.model';
import { User, UserDocument } from 'src/tools/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userMongo: Model<UserDocument>,
  ) {}

  async create(user: UserCreateDto): Promise<UserModel> {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Admin';
    audit.createdDate = new Date();

    const createdUser = new this.userMongo({ ...user, ...audit });

    return await createdUser.save();
  }

  async findAll(): Promise<UserModel[]> {
    return await this.userMongo.find().exec();
  }
  async findOne(id: string): Promise<UserModel> {
    return await this.userMongo.findOne({ _id: id }).exec();
  }
  async delete(id: string): Promise<UserModel> {
    return await this.userMongo.findOneAndRemove({ _id: id }).exec();
  }
  async update(id: string, user: UserUpdateDto): Promise<UserModel> {
    let newModel = this.userMongo.findOne({ _id: id }).exec();
    newModel = { ...newModel, ...user };

    return await this.userMongo
      .findByIdAndUpdate(id, newModel, { new: true })
      .exec();
  }
}

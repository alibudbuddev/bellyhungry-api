import { Injectable, Get, Req } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {

	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async getMany(filter: any = {}): Promise<User[]> {
    return this.userModel.find(filter).exec();
  }

  async getOne(id): Promise<User> {
    return this.userModel.findById(id).exec();
  }
}

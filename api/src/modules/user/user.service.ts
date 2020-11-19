import { Injectable, Get, Req, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {

	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(filter): Promise<any | undefined> {
    return this.userModel.findOne(filter).exec();
  }

	async get(filter: any = {}): Promise<User[]> {
    return this.userModel.find(filter).exec();
  }

  async findById(id): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(object: any): Promise<any> {
    object['userId'] = Date.now();
    object['password'] = await argon2.hash(object.password);
    const query = new this.userModel(object);
    return query.save();
  }
}

import { Injectable, Get, Req } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {

  private readonly users: any[];

	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    this.users = [
      {
        email: 'john',
        password: 'changeme',
      },
      {
        email: 'chris',
        password: 'secret',
      },
      {
        email: 'maria',
        password: 'guess',
      },
    ];

  }

  async findOne(email: string): Promise<any | undefined> {
    return this.users.find(user => user.email === email);
  }

	async get(filter: any = {}): Promise<User[]> {
    return this.userModel.find(filter).exec();
  }

  async getOne(id): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(object: any): Promise<any> {
    const query = new this.userModel(object);
    return query.save();
  }

}

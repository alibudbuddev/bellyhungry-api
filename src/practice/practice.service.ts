import { Injectable, Get, Req } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Practice, PracticeDocument } from './practice.schema';

@Injectable()
export class PracticeService {

	constructor(@InjectModel(Practice.name) private practiceModel: Model<PracticeDocument>) {}

	async get(filter: any = {}): Promise<Practice[]> {
    return this.practiceModel.find(filter).exec();
  }

  async getOne(id): Promise<Practice> {
    return this.practiceModel.findById(id).exec();
  }

  async create(object: any): Promise<any> {
    const query = new this.practiceModel(object);
    return query.save();
  }
}

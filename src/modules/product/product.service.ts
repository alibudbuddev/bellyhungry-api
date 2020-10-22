import { Injectable, Get, Req, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {

	constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

	async get(filter: any = {}): Promise<Product[]> {
    return this.productModel.find(filter)
    .populate('merchant', 'name')
    .exec();
  }

	async findOne(filter): Promise<any | undefined> {
    return this.productModel.findOne(filter)
    .populate('merchant')
    .exec();
  }

	async create(object: any): Promise<any> {
    const query = new this.productModel(object);
    return query.save();
  }
}

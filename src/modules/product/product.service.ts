import { Injectable, Get, Req, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  private publicFields: string = 'name price productId qty';

	constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

	async find(filter: any = {}): Promise<Product[]> {
    return this.productModel.find(filter, this.publicFields)
    .populate('merchant', 'name')
    .exec();
  }

  async findById(id): Promise<Product> {
    return this.productModel.findById(id, this.publicFields).exec();
  }

	async findOne(filter): Promise<any | undefined> {
    return this.productModel.findOne(filter, this.publicFields)
    .populate('merchant')
    .exec();
  }

	async create(object: any): Promise<any> {
    object['productId'] = Date.now();
    const query = new this.productModel(object);
    return query.save();
  }
}

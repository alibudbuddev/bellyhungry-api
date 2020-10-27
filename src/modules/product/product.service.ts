import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import UpdateProductDto from './dto/update-product.dto';

@Injectable()
export class ProductService {
  private publicFields: string = 'name price productId qty, merchant';

	constructor(@InjectModel(Product.name) private productModel: Model<any>) {}

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

  async findOneAndUpdate(filter: {merchant: string, _id: string}, body: UpdateProductDto): Promise<any | undefined> {
    return this.productModel.findOneAndUpdate(filter, body);
  }

	async create(object: any): Promise<any> {
    object['productId'] = Date.now();
    const query = new this.productModel(object);
    return query.save();
  }
}

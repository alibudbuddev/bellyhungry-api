import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  price: number;

  @Prop(raw({
    full: {type: String},
    thumbnail: {type: String}
  }))
  images: Record<string, string>[];

  @Prop({default: 0})
  qty: number;

  @Prop()
  catgory: number;

  @Prop({default: false})
  isAvailable: number;

  @Prop(raw({
  	type: Types.ObjectId,
    ref: 'User',
    required: true
  }))
  merchant: Record<any, any>;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Order {
  @Prop(raw({
    type: Types.ObjectId,
    ref: 'User',
    required: true
  }))
  customer: Record<any, any>;

  @Prop(raw({
    product: {type: Types.ObjectId, ref: 'Product', required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    discount: {type: Number, default: 0},
    shippingFee: {type: Number, default: 0},
    total: {type: Number, default: 0},
    status: {type: String},
  }))
  items: Record<any, any>[];

  @Prop({default: 0})
  discount: number;

  @Prop({required: true, default: 0})
  total: number;

  @Prop({default: 0})
  shippingFee: number;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
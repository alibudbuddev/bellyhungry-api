import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Cart {
  @Prop(raw({
    type: Types.ObjectId,
    ref: 'User'
  }))
  customer: Record<any, any>;

  @Prop(raw([{
    product: {type: Types.ObjectId, ref: 'Product', required: true},
    merchant: {type: Types.ObjectId, ref: 'User', required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    discount: {type: Number, default: 0},
    shippingFee: {type: Number, default: 0},
    totalPrice: {type: Number, default: 0},
    status: {type: String},
  }]))
  items: Record<any, any>[];

  @Prop({default: 0})
  discount: number;

  @Prop({required: true, default: 0})
  totalPrice: number;

  @Prop({default: 0})
  shippingFee: number;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Cart {
  @Prop(raw({
    type: Types.ObjectId,
    ref: 'User'
  }))
  customer: Record<any, any>;

  @Prop(raw({
    type: Types.ObjectId,
    ref: 'Product'
  }))
  product: Record<any, any>;

  @Prop({default: 0})
  itemPrice: number;

  @Prop({required: true, default: 0})
  totalPrice: number;

  @Prop({default: 0})
  qty: number;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
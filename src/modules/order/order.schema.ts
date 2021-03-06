import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Order {
  @Prop(raw({
    type: Types.ObjectId,
    ref: 'User'
  }))
  customer: Record<any, any>;

  @Prop(raw({
    name: {type: String, required: true},
    shippingAddress: {type: String, required: true},
    contactNo: {type: String, required: true},
    facebookName: {type: String},
    contactEmail: {type: String},
    other: {type: String}
  }))
  customerDetails: Record<any, any>[];

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

export const OrderSchema = SchemaFactory.createForClass(Order);
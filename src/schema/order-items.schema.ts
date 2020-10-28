import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class OrderItem {
  @Prop(raw({
    type: Types.ObjectId,
    ref: 'Order',
    required: true
  }))
  order: Record<any, any>;

  @Prop(raw({
    type: Types.ObjectId,
    ref: 'Product',
    required: true
  }))
  product: Record<any, any>;

  @Prop(raw({
    type: Types.ObjectId,
    ref: 'User',
    required: true
  }))
  merchant: Record<any, any>;

  @Prop({default: 0, required: true})
  price: number;

  @Prop({default: 0, required: true})
  qty: number;

  @Prop({default: 0})
  discount: number;

  @Prop({default: 0})
  shippingFee: number;

  @Prop({default: 0})
  totalPrice: number;

  @Prop()
  status: string;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
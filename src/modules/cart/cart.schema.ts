import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from '@modules/order/order.schema';

@Schema()
export class Cart extends Order {}
export const CartSchema = SchemaFactory.createForClass(Cart);
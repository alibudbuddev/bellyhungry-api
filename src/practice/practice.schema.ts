import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PracticeDocument = Practice & Document;

@Schema()
export class Practice {
  @Prop({required: true, unique: true})
  email: string;

  @Prop(raw({
    first: {type: String, required: true},
    middle: {type: String},
    last: {type: String},
  }))
  name: Record<any, any>;

  @Prop({ required: true, default: 'user' })
  role: string;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PracticeSchema = SchemaFactory.createForClass(Practice);
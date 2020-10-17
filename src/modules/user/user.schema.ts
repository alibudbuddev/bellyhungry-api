import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({required: true, unique: true})
  email: string;

  @Prop(raw({
    first: {type: String, required: true},
    middle: {type: String},
    last: {type: String},
  }))
  name: Record<any, any>;

  @Prop()
  address: string;

  @Prop({ unique: true, sparse: true })
  phoneNo: string;

  @Prop()
  contactEmail: string;

  @Prop(raw({
    full: {type: String},
    thumbnail: {type: String}
  }))
  profileImg: Record<any, any>;

  @Prop()
  receiveNewsletter: boolean;

  @Prop()
  coordinate: number[];

  @Prop({ required: true, default: 'user' })
  role: string;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
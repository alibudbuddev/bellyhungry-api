import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({required: true})
  email: string;

  @Prop(raw({
    first: {type: String, required: true},
    middle: {type: String},
    last: {type: String},
  }))
  name: Record<any, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);

// export const UserSchema = new Schema({
// 	email: String,
//   name: {
//     first: String,
//     middle: String,
//     last: String,
//   },
//   address: String,
//   phoneNo: String,
//   contactEmail: String,
//   profileImg: {
//     full: String,
//     thumbnai: String
//   },
//   receiveNewsletter: Boolean,
//   coordinate: String,
//   role: String,
//   updatedAt: {type: Date, default: Date.now},
//   createdAt: {type: Date, default: Date.now}
// });

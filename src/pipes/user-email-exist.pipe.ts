
import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '@modules/user/user.schema';

@Injectable()
export default class UserEmailExistPipe implements PipeTransform {

	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async transform(value: any, metadata: ArgumentMetadata) {
  	if (value.email) {
  		let user = await this.userModel.findOne({email: value.email}).exec();
	  	if (user) {
	  		throw new HttpException('Email exists.', HttpStatus.NOT_ACCEPTABLE);
	  	}
  	}

    return value;
  }
}
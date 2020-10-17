import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@modules/user/user.module';

@Module({
  imports: [
  	MongooseModule.forRoot(process.env.DB_CONNECTION),
  	UserModule
  ]
})
export class AppModule {}

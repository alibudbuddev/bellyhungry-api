import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
  	MongooseModule.forRoot(process.env.DB_CONNECTION),
  	UserModule
  ],
  controllers: [AppController]
})
export class AppModule {}

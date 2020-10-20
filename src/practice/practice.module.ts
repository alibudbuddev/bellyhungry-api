import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Practice, PracticeSchema } from './practice.schema';
import { PracticeController } from './practice.controller';
import { PracticeService } from './practice.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: Practice.name, schema: PracticeSchema }])],
  controllers: [PracticeController],
  providers: [PracticeService]
})
export class PracticeModule {}

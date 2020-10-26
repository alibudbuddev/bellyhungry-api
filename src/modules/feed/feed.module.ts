import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { ProductModule } from '@modules/product/product.module';

@Module({
  controllers: [FeedController],
  imports: [ProductModule],
  providers: [FeedService]
})
export class FeedModule {}

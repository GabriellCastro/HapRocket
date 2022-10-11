import { Module } from '@nestjs/common';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [FeedbacksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

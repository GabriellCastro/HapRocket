import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';

@Module({
  imports: [],
  controllers: [FeedbacksController],
  providers: [FeedbacksService, PrismaService],
})
export class FeedbacksModule {}

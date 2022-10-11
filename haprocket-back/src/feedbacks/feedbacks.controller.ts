import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbacksService } from './feedbacks.service';
import { Feedback } from '@prisma/client';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbacksService.create(createFeedbackDto);
  }

  @Get()
  findAll(): Promise<Feedback[]> {
    return this.feedbacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Feedback> {
    return this.feedbacksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback> {
    return this.feedbacksService.update(+id, updateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Feedback> {
    return this.feedbacksService.remove(+id);
  }
}

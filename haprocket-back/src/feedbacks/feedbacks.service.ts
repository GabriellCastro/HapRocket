import { Injectable } from '@nestjs/common';
import { Feedback } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Injectable()
export class FeedbacksService {
  constructor(private prisma: PrismaService) {}

  create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.prisma.feedback.create({
      data: createFeedbackDto,
    });
  }

  findAll(): Promise<Feedback[]> {
    return this.prisma.feedback.findMany();
  }

  findOne(id: number): Promise<Feedback> {
    return this.prisma.feedback.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    return this.prisma.feedback.update({
      where: { id },
      data: updateFeedbackDto,
    });
  }

  remove(id: number): Promise<Feedback> {
    return this.prisma.feedback.delete({
      where: { id },
    });
  }
}

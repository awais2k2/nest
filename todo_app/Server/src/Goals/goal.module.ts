import { Module } from '@nestjs/common';
import { Goal } from '../typeorm/entities/goal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalService } from './goal.service';
import { GoalsController } from './goal.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Goal])],
  controllers: [GoalsController],
  providers: [GoalService],
})
export class GoalModule {}

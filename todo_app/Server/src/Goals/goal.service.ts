import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Goal } from '../typeorm/entities/goal';
import { Repository } from 'typeorm';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal) private goalRepository:Repository<Goal>,) {}

  insertgoal(title: string) {
    const newGoal=this.goalRepository.create({title});
    return this.goalRepository.save(newGoal)
  }
 async getGoals() {
 return await  this.goalRepository.find()
  }

 async delete(goalid: number) {
    return await this.goalRepository.delete(goalid)
  }
}

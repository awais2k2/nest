import { GoalService } from './goal.service';
import { Controller, Post, Body,Get,Param,Delete } from '@nestjs/common';


@Controller('goals')
export class GoalsController {
  constructor(private readonly goalService:GoalService) {}

  @Post()
  addgoal(@Body('title') goaltitle: string) {
    const generatedid = this.goalService.insertgoal(goaltitle);
    return { id: generatedid };
  }
  
  @Get()
  getAllGoals(){
    return this.goalService.getGoals()
  }
  @Delete(':id')
  getGoal(@Param('id') goalid:number ){
    return this.goalService.delete(goalid)
  }
}

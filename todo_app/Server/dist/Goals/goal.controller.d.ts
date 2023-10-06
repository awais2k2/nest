import { GoalService } from './goal.service';
export declare class GoalsController {
    private readonly goalService;
    constructor(goalService: GoalService);
    addgoal(goaltitle: string): {
        id: Promise<import("../typeorm/entities/goal").Goal>;
    };
    getAllGoals(): Promise<import("../typeorm/entities/goal").Goal[]>;
    getGoal(goalid: number): Promise<import("typeorm").DeleteResult>;
}

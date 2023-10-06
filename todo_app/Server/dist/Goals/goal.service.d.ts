import { Goal } from '../typeorm/entities/goal';
import { Repository } from 'typeorm';
export declare class GoalService {
    private goalRepository;
    constructor(goalRepository: Repository<Goal>);
    insertgoal(title: string): Promise<Goal>;
    getGoals(): Promise<Goal[]>;
    delete(goalid: number): Promise<import("typeorm").DeleteResult>;
}

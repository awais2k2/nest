"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const goal_1 = require("../typeorm/entities/goal");
const typeorm_2 = require("typeorm");
let GoalService = exports.GoalService = class GoalService {
    constructor(goalRepository) {
        this.goalRepository = goalRepository;
    }
    insertgoal(title) {
        const newGoal = this.goalRepository.create({ title });
        return this.goalRepository.save(newGoal);
    }
    async getGoals() {
        return await this.goalRepository.find();
    }
    async delete(goalid) {
        return await this.goalRepository.delete(goalid);
    }
};
exports.GoalService = GoalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(goal_1.Goal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GoalService);
//# sourceMappingURL=goal.service.js.map
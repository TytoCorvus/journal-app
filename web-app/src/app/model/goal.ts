import { IAssociation } from './association';
import { ICategory } from './category';
import { ISimpleEntry } from './simple-entry';

/**
 * A Goal is something to slowly be worked toards, i.e.-
 * - "Have $10,000 in savings"
 * - "Run a mile in 6 minutes"
 */
export interface IGoal {
    id: string;
    description: string;
    category: ICategory;
    startDate: Date;
    endDate?: Date;
    metDate?: Date;
}

export interface IGoalProgress {
    goalId: string;
    progressUpdate?: string;
    progressDate: Date;
    goalState: GoalState;
}

export enum GoalState {
    CREATED = 'Created',
    IN_PROGRESS = 'In Progress',
    COMPLETE = 'Complete',
    ABANDONED = 'Abandoned'
}

/**
 * A Project is a large task that is often composed of other smaller tasks
 * Progress towards the project is expressed in the entries
 */
export interface IProject extends IGoal {
    association: IAssociation;
    entries: Array<ISimpleEntry>;
}
import { IAssociation } from "./association"
import { ICategory } from "./category"
import { IColoredItem } from "./ui-util"

export interface ISimpleEntry {
    summary: string,
    entryType: IEntryType,
    category: ICategory,
    date: Date,
    association?: IAssociation,
    projectId?: string
}

export interface IEntryType extends IColoredItem {
    description: string;
}

export const EntryTypes: { [entryType: string]: IEntryType } = {
    TASK: {
        name: 'Task',
        description: 'A complete piece of work'
    },
    EFFORT: {
        name: 'Effort',
        description: 'Time spent towards a task, goal, or project, but yet incomplete'
    },
    ACHIEVEMENT: {
        name: 'Achievement',
        description: 'Something accomplished - generally something notable worth sharing'
    }
}



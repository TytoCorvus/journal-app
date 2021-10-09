import { IColoredItem } from "./ui-util";

export interface ICategory extends IColoredItem { }

export const Categories: { [categoryName: string]: ICategory } = {
    PERSONAL: { name: 'Personal' },
    CAREER: { name: 'Career' },
    FINANCE: { name: 'Finance' },
    SOCIAL: { name: 'Social' },
    FITNESS: { name: 'Fitness' },
    HOBBY: { name: 'Hobby' },
    OTHER: { name: 'Other' }
}
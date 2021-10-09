// TODO: Make the association support colors and images
export interface IAssociation {
    name: string,
    imagePath?: string
}

export const Associations = {
    PERSONAL: {
        name: 'Personal'
    },
    EXPERT_INSTITUTE: {
        name: 'Expert Institute'
    }
}
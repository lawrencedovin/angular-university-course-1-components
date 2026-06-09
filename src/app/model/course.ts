export interface Course {
    id: number;
    title: string;
    iconUrl?: string;
    description: string;
    category: string;
    lessonsCount?: number;
}

export enum Category {
    Beginner = "BEGINNER",
    Intermediate = "INTERMEDIATE",
    Advanced = "ADVANCED"
}
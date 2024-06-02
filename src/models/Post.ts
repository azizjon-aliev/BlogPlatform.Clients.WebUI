export interface PostShort {
    id: number;
    image: string;
    title: string;
    createdAt: string;
}

export interface Post extends PostShort {
    content: string;
    createdBy: string;
}
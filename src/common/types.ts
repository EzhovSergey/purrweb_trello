export type Column = {
    name: string;
    cards?: Card[];
}

export type Card = {
    name: string;
    author: User;
    content?: string;
    comments?: Comment[];
}

export type Comment = {
    body: string;
    author: User;
}

export type User = {
    name: string;
}
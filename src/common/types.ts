export type Column = BaseType & {
    name: string;
    cards?: Card[];
}

export type Card = BaseType & {
    name: string;
    author: User;
    content?: string;
    comments?: Comment[];
}

export type Comment = BaseType & {
    body: string;
    author: User;
}

export type User = BaseType & {
    name: string;
}

export type BaseType = {
    id: string;
}
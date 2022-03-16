import { Column, Card, Comment } from '../common/types';

export type CreateColumnDto = Pick<Column, 'name'>;
export type UpdateColumnDTO = Partial<CreateColumnDto>;

export type CreateCardDTO = Pick<Card, 'name' | 'content'>;
export type UpdateCardDTO = Partial<CreateCardDTO>;

export type CreateCommentDTO = Pick<Comment, 'body'>;
export type UpdateCommentDTO = Partial<CreateCommentDTO>;
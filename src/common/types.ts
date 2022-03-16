import { CreateColumnDto, CreateCardDTO, CreateCommentDTO, UpdateColumnDTO, UpdateCardDTO, UpdateCommentDTO } from './dto';

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

export type BoardFuntionsProps = {
  handleCreateColumn: (createColumnDto: CreateColumnDto) => void;
  handleUpdateColumn: (id: Column['id'], updateColumnDTO: UpdateColumnDTO) => void;
  handleDeleteColumn: (id: Column['id']) => void;
  handleCreateCard: (idColumn: Column['id'], createCardDTO: CreateCardDTO) => void;
  handleUpdateCard: (id: Card['id'], updateCardDTO: UpdateCardDTO) => void;
  handleDeleteCard: (id: Card['id']) => void;
  handleCreateComment: (idCard: Card['id'], createCommentDTO: CreateCommentDTO) => void;
  handleUpdateComment: (id: Comment['id'], updateCommentDTO: UpdateCommentDTO) => void;
  handleDeleteComment: (id: Comment['id']) => void;
}
import { Column } from "../common/types";

export const state = {
  columns: [
    {
      id: "1",
      name: "column 1",
      cards: [
        {
          id: "1",
          name: "card 1",
          content: "text in card 1",
          author: { id: "1", name: "user 1" },
          comments: [
            { id: "1", body: "comment 1", author: { id: "2", name: "user 2" } },
            { id: "2", body: "comment 2", author: { id: "1", name: "user 1" } },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "column 2",
      cards: [{ id: "2", name: "card 2", author: { id: "1", name: "user 1" } }],
    },
  ] as Column[],
};

export type TBook = {
  id: string;
  name: string;
  price: number;
  thumbnail: string;
};

export type TBooks = TBook[];

export type TUser = {
  id: string;
  email: string;
  name: string;
};

export type TBookFromCart = TBook & {
  quantity: number;
};

export type TCart = {
  userId: string;
  books: TBookFromCart[];
};

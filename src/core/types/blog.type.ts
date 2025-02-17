export type blogDescType = {
  title: string;
  paragraph: string;
};
export type blogType = {
  id: number;
  title: string;
  date: string;
  intro: string;
  description: blogDescType[];
  picture: string;
};

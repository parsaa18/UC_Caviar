export type productType = {
  id: number;
  name: string;
  picture: string[];
  rate: number;
  weight: number;
  "packing-type": string;
};

export type productDetailType = {
  id: number;
  name: string;
  picture: string[];
  rate: number;
  weight: number;
  "packing-type": string;
  details: string;

  categoryId: string;
  color: string;
  size: string;
};

export type productCategoryType = {
  id: string;
  name: string;
  picture: string;
  productsList: productType[];
};

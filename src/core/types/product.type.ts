export type productType = {
  id: number;
  name: string;
  picture: string[];
  rate: number;
  weight: number;
  "packing-type": string;
};

type featuretype = {
  title: string;
  value: string;
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
  feature: featuretype[];
};

export type productCategoryType = {
  id: string;
  name: string;
  picture: string;
  productsList: productType[];
};

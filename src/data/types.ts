interface ProductAttributes {
  _id: string;
  name: string;
  status: boolean;
  sku: string;
  slug: string;
  capacity: string;
  color: string;
  characteristics: string;
  design: string;
  uses: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  thumbs: [string];
  __v: number;
}

interface CategoryAttributes {
  _id: string;
  name: string;
  thumb: string;
  level: number;
  slug: string;
  productsInCategory: [string] | [ProductAttributes];
  subCategory: [string];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

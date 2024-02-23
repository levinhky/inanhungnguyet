interface ProductAttributes {
  _id: string;
  name: string;
  sku: string;
  status: boolean;
  views: string;
  slug: string;
  thumbs: string[];
  attributes: {
    capacity: string;
    color: string;
    characteristics: string;
    design: string;
    uses: string;
    display: boolean;
  };
  category: string;
  createdAt: string;
  updatedAt: string;
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

interface SlideAttributes {
  _id: string;
  title: string;
  thumb: string;
  description: string;
  buttonText: string;
  display: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface LoginFields {
  email: string;
  password: string;
}

interface SignupFields {
  fullname: string;
  email: string;
  password: string;
}

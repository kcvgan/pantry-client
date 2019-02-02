export interface Product {
  _id: number,
  name: string,
  type: string,
  tags: string,
  quantity: string,
  unit: string
};

export interface Products extends Array<Product>{};

export default Product;
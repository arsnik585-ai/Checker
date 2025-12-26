
export enum Category {
  Products = 'Продукты',
  Transport = 'Транспорт',
  Entertainment = 'Развлечения',
  Household = 'Хозтовары',
  Restaurants = 'Рестораны',
  Other = 'Другое',
}

export interface Transaction {
  id: string;
  date: string;
  store: string;
  amount: number;
  category: Category;
  rawText: string;
  imageSrc: string;
}

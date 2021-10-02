interface List {
  id: number;
  title: String;
}

export interface PlanType extends List {
  list: List[];
  price: number;
  pricePer: string;
}

const list: List[] = [
  { id: 1, title: 'Printable color pdf book' },
  { id: 2, title: 'Our Online Library Access' },
  { id: 3, title: 'Topic Covered' },
  { id: 4, title: 'Bonus EBook Included' },
  { id: 5, title: 'Free Shipping order' },
  { id: 6, title: 'Join Member Club' },
  { id: 7, title: 'Member Previleges' }
];

const PLANS_DATA: PlanType[] = [
  {
    id: 1,
    title: 'Basic Plan',
    list,
    price: 15.0,
    pricePer: 'Per Month'
  },
  { id: 2, title: 'Advanced Plan', list, price: 60.0, pricePer: 'Per Month' },
  { id: 3, title: 'Ultimate Plan', list, price: 100.0, pricePer: 'Yearly' }
];

export default PLANS_DATA;

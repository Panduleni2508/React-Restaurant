import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'N$356',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'N$359',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'N$144',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Windhoek Draught',
    price: 'N$35',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Hansa Draught',
    price: 'N$25',
    tags: 'IE | 500 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'N$60',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'N$56',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'N$30',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'N$44',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'N$36',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };

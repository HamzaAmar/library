// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import book from '@components/section/book';
import type { NextApiRequest, NextApiResponse } from 'next';
import BookProps from 'src/types/books';

type Data = {
  books: BookProps[];
};
const books: BookProps[] = [
  {
    id: 1,
    name: 'A Room Away From the Wolves',
    description: `narratives are subtle, quicksilver creatures, her language is elegant, and her characters keep more secrets than they reveal. If this book was a dessert, it wouldn't be a chocolate chip cookie or a vanilla birthday cake — it would be an earl grey lavender macaroon, or maybe balsamic fig ice cream`,
    img: {
      src: 'a_room_away_from_the_wolves.jpg',
      alt: 'A Room Away From the Wolves Hardcover – September 4, 2018'
    },
    price: 18.9,
    rating: 4.4,
    language: 'English',
    published_data: '24/09/2019',
    authors: ['Ta-Nehisi Coates'],
    pages: 321
  },
  {
    id: 2,
    name: `The Water Dancer (Oprah's Book Club): A Novel`,
    description: `From the National Book Award–winning author of Between the World and Me, a boldly conjured debut novel about a magical gift, a devastating loss, and an underground war for freedom.`,
    img: {
      src: 'the_water_dancer.jpg',
      alt: `The Water Dancer (Oprah's Book Club): A Novel`
    },
    price: 18.9,
    rating: 4.4,
    pages: 416,
    language: 'English',
    published_data: '24/09/2019',
    authors: ['Ta-Nehisi Coates']
  },
  {
    id: 3,
    name: `Chinese Cinderella`,
    description: `A Chinese proverb says, "Falling leaves return to their roots." In her own courageous voice, Adeline Yen Mah returns to her roots to tell the story of her painful childhood and her ultimate triumph in the face of despair`,
    img: {
      src: 'chinese_cinderella.jpg',
      alt: 'Chinese Cinderella: The True Story of an Unwanted Daughter'
    },
    price: 18.9,
    rating: 4.4,
    pages: 240,
    language: 'English',
    published_data: '14/09/2010',
    authors: ['Ta-Nehisi Coates']
  },
  {
    id: 4,
    name: `Carbonel (Puffin Book)`,
    description: `From the National Book Award–winning author of Between the World and Me, a boldly conjured debut novel about a magical gift, a devastating loss, and an underground war for freedom.`,
    img: {
      src: 'corbonel.jpg',
      alt: `Carbonel (Puffin Book)`
    },
    price: 18.9,
    rating: 4.4,
    pages: 352,
    language: 'English',
    published_data: '02/07/2015',
    authors: ['Barbara Sleigh ']
  },
  {
    id: 5,
    name: `Cue for Treason`,
    description: `Cue for Treason is a children's historical novel written by Geoffrey Trease, and is his best-known work. The novel is set in Elizabethan England at the end of the 16th century. Two young runaways become boy actors, at first on the road and later in London, where they are befriended by William Shakespeare.`,
    img: {
      src: 'cue_for_treason.jpg',
      alt: 'Cue for Treason'
    },
    price: 25,
    rating: 4.4,
    pages: 240,
    language: 'English',
    published_data: ' 30/06/1973',
    authors: ['Geoffrey Trease']
  },
  {
    id: 6,
    name: `Cue for Treason (Puffin Books)`,
    description: `Fleeing from the evil Sir Philip Morton, Peter Brownrigg finds himself on the wrong side of the law - and on the run. As he makes his way to London, he meets Kit, another runaway, and the two decide to stick together. With luck on their side, they find jobs as apprentices to William Shakespeare, but a chance discovery endangers their lives once more. Soon Peter finds himself on an adventure that takes in murderous plots, secrets and even treason, and will test his bravery to its very limits. Set in the turbulent days of Elizabeth I, this classic story of danger and intrigue conjures up a magical world of mystery, twists and turns and thrilling action.`,
    img: {
      src: 'dark_summer_nights.jpg',
      alt: `Cue for Treason (Puffin Books)`
    },
    price: 18.9,
    rating: 4.4,
    pages: 352,
    language: 'English',
    published_data: '02/07/2015',
    authors: ['Barbara Sleigh ']
  },
  {
    id: 7,
    name: `Educated: A Memoir Hardcover`,
    description: `Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara’s older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she’d traveled too far, if there was still a way home.`,
    img: {
      src: 'educated.jpg',
      alt: 'Educated: A Memoir Hardcover – February 20, 2018'
    },
    price: 18.9,
    rating: 4.4,
    pages: 240,
    language: 'English',
    published_data: '14/09/2010',
    authors: ['Tara Westover']
  },
  {
    id: 8,
    name: `The Great Gatsby`,
    description: `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.`,
    img: {
      src: 'greatGatsby.jpg',
      alt: 'The Great Gatsby: The Original 1925 Edition (A F. Scott Fitzgerald Classic Novel)'
    },
    price: 8,
    rating: 4.4,
    pages: 110,
    language: 'English',
    published_data: '27/04/2021',
    authors: ['F. Scott Fitzgerald']
  },
  {
    id: 9,
    name: `Jackaby`,
    description: `Sherlock Holmes crossed with Buffy the Vampire Slayer.” —Chicago Tribune Newly arrived in New Fiddleham, New England, 1892, and in need of a job, Abigail Rook meets R. F. Jackaby, an investigator of the unexplained with a keen eye for the extraordinary--including the ability to see supernatural beings.`,
    img: {
      src: 'jackaby.jpg',
      alt: `Jackaby (Novel)`
    },
    price: 18.9,
    rating: 4.4,
    pages: 320,
    language: 'English',
    published_data: '16/10/2014',
    authors: ['William Ritter']
  },
  {
    id: 10,
    name: `Six of Crows`,
    description: `Six of Crows is a fantasy novel written by American author Leigh Bardugo published by Henry Holt and Co. in 2015. The story follows a thieving crew and is primarily set in the city of Ketterdam, loosely inspired by Dutch Republic–era Amsterdam.`,
    img: {
      src: 'six-of-crows.jpg',
      alt: 'Chinese Cinderella: The True Story of an Unwanted Daughter'
    },
    price: 18.9,
    rating: 4.4,
    pages: 465,
    language: 'English',
    published_data: '29/09/2015',
    authors: ['Leigh Bardugo']
  },
  {
    id: 11,
    name: `Carbonel (Puffin Book)`,
    description: `A heady admixture of explosive plot and taut, burnished prose . . . Mesha Maren writes like a force of nature.” —Lauren Groff, author of Florida In 1989, Jodi McCarty is seventeen years old when she’s sentenced to life in prison`,
    img: {
      src: 'sugar_run.jpg',
      alt: `Sugar Run: A Novel `
    },
    price: 18.9,
    rating: 4.4,
    pages: 352,
    language: 'English',
    published_data: '08/01/2019',
    authors: ['Mesha Maren']
  },
  {
    id: 12,
    name: `Sulwe`,
    description: `Sulwe is a children's fiction picture book by actress Lupita Nyong'o. It follows the story of a young girl who wishes for her dark skin to be lighter. The story is ultimately about colorism and learning to love oneself, no matter one's skin tone`,
    img: {
      src: 'sulwe.jpg',
      alt: 'Sulwe Book'
    },
    price: 18.9,
    rating: 4.4,
    pages: 240,
    language: 'English',
    published_data: '15/10/2019',
    authors: ['Lupita Nyongo']
  },
  {
    id: 13,
    name: `The Martian`,
    description: `The Martian is a 2011 science fiction novel written by Andy Weir. It was his debut novel under his own name. It was originally self-published in 2011; Crown Publishing purchased the rights and re-released it in 2014`,
    img: {
      src: 'the_martian_andy_weir.jpg',
      alt: 'The Martian'
    },
    price: 18.9,
    rating: 4.4,
    pages: 369,
    language: 'English',
    published_data: '14/09/2010',
    authors: ['Andy Weir']
  }
];

function isQuerySearchIncludesInText(field: any, query: string): boolean {
  let isExist;
  if (Array.isArray(field)) {
    isExist = field.includes(query);
  } else {
    isExist = field.toLowerCase().split(' ').includes(query);
  }
  return isExist;
}

export default function Books(req: NextApiRequest, res: NextApiResponse<Data>) {
  let { query } = req.query;

  let lowerQuery = (query as string).toLowerCase();
  const filtredBook = books.filter(function (book) {
    const { name, description, authors } = book;
    console.log(
      isQuerySearchIncludesInText(name, lowerQuery) ||
        isQuerySearchIncludesInText(description, lowerQuery) ||
        isQuerySearchIncludesInText(authors, lowerQuery)
    );
    return (
      isQuerySearchIncludesInText(name, lowerQuery) ||
      isQuerySearchIncludesInText(description, lowerQuery) ||
      isQuerySearchIncludesInText(authors, lowerQuery)
    );
  });
  return res.status(200).json({ books: filtredBook });
}

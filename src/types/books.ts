interface BookProps {
  id: number;
  name: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  price: number;
  rating: number;
  pages: number;
  language: string;
  published_data: string;
  authors: string[];
}

export default BookProps;

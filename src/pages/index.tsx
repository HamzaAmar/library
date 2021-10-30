import { Layout } from '@components/core';
import {
  About,
  BookCarousel,
  BookList,
  Category,
  Plans,
  SmartPhone,
  Subscribe,
  Testimonials
} from '@components/section';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import fetcher from 'src/utils/fetcher';
import useSWR from 'swr';

const Home: NextPage = ({ books }) => {
  return (
    <Layout>
      <div>
        <About />
        <BookCarousel books={books} />
      </div>
      <div>
        <Category />
      </div>
      <BookList books={books} />
      <Plans />
      <Testimonials />
      <SmartPhone />
      <Subscribe />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/books')
    .then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data;
      }
      return Promise.reject(data);
    })
    .catch((err) => console.log('this the value of error', err));
  return {
    props: { books: data.books }
  };
}

export default Home;

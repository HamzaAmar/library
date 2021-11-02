import { Layout } from '@components/core';
import React from 'react';

const index = ({ books }) => {
  return (
    <Layout>
      <h1>Hello</h1>
      {books.map((val) => (
        <div>
          <h2>{val.name}</h2>
          <p>{val.description}</p>
        </div>
      ))}
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

export default index;

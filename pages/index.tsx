import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>
      Hello Next.js
      <span role="img" aria-label="hand">
        👋
      </span>
    </h1>
    <p>
      <Link href="/about" passHref>
        <a href="hrefLeft"> About </a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;

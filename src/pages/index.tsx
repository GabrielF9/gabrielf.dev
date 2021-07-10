import Head from 'next/head';
import Footer from '@/common/Footer';
import { Home } from '../layout/home';
import { useEffect, useState } from 'react';
import Loader from '@/common/Loader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Gabriel Ferreira</title>
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;

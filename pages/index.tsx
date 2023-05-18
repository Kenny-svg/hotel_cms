import Head from 'next/head';
import HomeLayout from './layout/Home';

const Home = () => {

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <HomeLayout />
    </>
  );
}
export default Home;

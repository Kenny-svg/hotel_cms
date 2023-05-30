import Head from 'next/head';
import HomeLayout from '@/components/defaultLayout/HomeComponents/Home';

const Home = () => {

  return (

    <>
    <Head>
        <title>Home | KandB</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <HomeLayout />

    </>
  );
}
export default Home;

import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import Head from 'next/head';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Voucher Store - Get New store game</title>
        <meta name="description" content="Get new store game" />
        <meta property="og:title" content="get a new store game" />
        <meta property="og:description" content="get a new store game" />
        <meta property="og:image" content="https://test-seo.com" />
        <meta property="og:url" content="https://voucher-store.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}
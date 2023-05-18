import Head from "next/head";
import Layout from "@/Layout/Layout";
import Carousel from "../../components/defaultLayout/HomeComponents/Carousel"
import TopFeatures from "@/components/defaultLayout/HomeComponents/TopFeatures";
import About from "@/components/defaultLayout/HomeComponents/About";
import BannerMid from "@/components/defaultLayout/HomeComponents/BannerMid";
import Pricing from "@/components/defaultLayout/HomeComponents/Pricing";
import Rooms from "@/components/defaultLayout/HomeComponents/Rooms";
import DiscountBanner from "@/components/defaultLayout/HomeComponents/DiscountBanner";
import Gallery from "@/components/defaultLayout/HomeComponents/Gallery";
import Video from "@/components/defaultLayout/HomeComponents/Video";
import Testimony from "@/components/defaultLayout/HomeComponents/Testimonies";
import NewsletterBanner from "@/components/defaultLayout/HomeComponents/Newsletter";



const HomeLayout: React.FC = () => {
    
    return ( 
        <Layout>
            <Head>
                <title>Home | KandB</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Carousel />
            <TopFeatures />
            <About />
            <BannerMid />
            <Pricing />
            <Rooms />
            <DiscountBanner />
            <Gallery />
            <Video />
            <Testimony />
            <NewsletterBanner />
        </Layout>
     );
}
 
export default HomeLayout;
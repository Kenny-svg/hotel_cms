import Head from "next/head";
import Layout from "@/Layout/Layout";
import Carousel from "../../components/defaultLayout/HomeComponents/Carousel"
import TopFeatures from "@/components/defaultLayout/HomeComponents/TopFeatures";


const alt = "carousel"
const HomeLayout: React.FC = () => {
    return ( 
        <Layout>
            <Head>
                <title>Home | KandB</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Carousel />
            <TopFeatures />
        </Layout>
     );
}
 
export default HomeLayout;
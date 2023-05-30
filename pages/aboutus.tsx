import Head from "next/head";
// import BreadCrumb from "../components/defaultLayout/breadcrumb";
import About from '../components/defaultLayout/HomeComponents/aboutus/About'
import BreadCrumb from "@/components/defaultLayout/breadcrumb";
import MandV from "@/components/defaultLayout/HomeComponents/aboutus/MandV";
import Layout from "@/Layout/Layout";

const AboutUs = () => {
    return ( 
        <>
            <Layout>
            <Head>
                    <title>About us | KandB</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
                <BreadCrumb url="https://img.freepik.com/free-photo/young-adventurous-couple-taking-photo_23-2148653409.jpg?t=st=1685377074~exp=1685377674~hmac=cd53256a402f325d549610125759a8a65381e09549af61031b2be1e0fbaef8c3" parent='About' title='About' />
                <About />
                <MandV />
            </Layout>
                

        </>
     );
}
 
export default AboutUs;

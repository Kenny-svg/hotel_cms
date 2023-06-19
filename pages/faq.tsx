import Layout from "@/Layout/Layout";
import FaqPage from "@/components/defaultLayout/HomeComponents/faq/Faq";
import FaqDropdown from "@/components/defaultLayout/HomeComponents/faq/FaqDropdown";
import BreadCrumb from "@/components/defaultLayout/breadcrumb";
import Head from "next/head";

const Faq = () => {
    return ( 
        <>
            <Layout>
                <Head>
                    <title>Gallery | KandB</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
                <BreadCrumb url="https://img.freepik.com/free-photo/picture-frames-inempty-room_1048-8213.jpg?w=826&t=st=1685404529~exp=1685405129~hmac=159df880e2e396b9c61658da61548ff0a686738573e51098d6481edb6975075f" parent='faq' title='faq' />
                <FaqPage />
                <FaqDropdown />
            </Layout>
        </>
     );
}
 
export default Faq;
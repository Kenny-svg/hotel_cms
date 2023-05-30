import Layout from "@/Layout/Layout";
import BreadCrumb from "@/components/defaultLayout/breadcrumb";
import Head from "next/head";
import ContactUs from '../components/defaultLayout/HomeComponents/contact/Contact'

const Contact = () => {
    return ( 
        <>
            <Layout>
                <Head>
                    <title>Contact | KandB</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
                <BreadCrumb url="https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?w=996&t=st=1685377519~exp=1685378119~hmac=abc9482d796e25f19ad50cf27e841c453c9fd4fbcf0299c9b8ce1e1c72f6710d" parent='booking' title='booking' />
                <main>
                    <ContactUs />
                </main>
            </Layout>
        </>
     );
}
 
export default Contact;
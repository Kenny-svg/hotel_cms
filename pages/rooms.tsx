import Layout from "@/Layout/Layout";
import Head from "next/head";

const Room: React.FC = () => {
    return ( 
        <>
        <Layout>
        <Head>
                <title>Rooms | KandB</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <main>
                <h1>Rooms</h1>
            </main>
        </Layout>

        </>
     );
}
 
export default Room;
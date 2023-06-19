import Layout from "@/Layout/Layout";
import RoomsCategory from "@/components/defaultLayout/HomeComponents/rooms/RoomsCategory";
import BreadCrumb from "@/components/defaultLayout/breadcrumb";
import Head from "next/head";

const Room: React.FC = () => {
    return ( 
        <>
        <Layout>
        <Head>
                <title>Rooms | KandB</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <BreadCrumb url="https://img.freepik.com/free-vector/bedroom-interior-home-hotel-empty-apartment_1441-3633.jpg?w=740&t=st=1685456638~exp=1685457238~hmac=968affd50d93851d05bdc462a98aaa53164ec03df7326de476594a8976d6796c" parent="rooms" title="rooms" />
            <main>
                <RoomsCategory />
            </main>
        </Layout>

        </>
     );
}
 
export default Room;
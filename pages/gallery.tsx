import Layout from "@/Layout/Layout";
import BreadCrumb from "@/components/defaultLayout/breadcrumb";
import Head from "next/head";
import GallerySlider from '../components/defaultLayout/HomeComponents/gallery/GallerySlider'

const Gallery = () => {
    return ( 
        <>
            <Layout>
                <Head>
                    <title>Gallery | KandB</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
                <BreadCrumb url="https://img.freepik.com/free-photo/picture-frames-inempty-room_1048-8213.jpg?w=826&t=st=1685404529~exp=1685405129~hmac=159df880e2e396b9c61658da61548ff0a686738573e51098d6481edb6975075f" parent='gallery' title='gallery' />
                <main>
                <div className="w-full text-center mt-10">
                    <h1 className="text-yellow-500 text-2xl md:text-5xl font-extrabold">
                    Some shots of our beautiful hotel & features
                    </h1>
                </div>
                <GallerySlider />
                </main>
            </Layout>
        </>
     );
}
 
export default Gallery;
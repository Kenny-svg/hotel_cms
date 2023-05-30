import BreadCrumb from "@/components/defaultLayout/breadcrumb";
import Booking from "@/components/defaultLayout/HomeComponents/booking/Booking";
import Layout from "@/Layout/Layout";
import Head from "next/head";
import Login from '../components/login/Login'
import { useSelector } from 'react-redux'

const BookingPage = () => {
    const user = useSelector((state) => state.user.user)
    const {authUser } = user
    return ( 
        <>
        
        {authUser ? <div>
        <Layout>
            <Head>
                    <title>Booking | KandB</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <BreadCrumb url="https://img.freepik.com/free-photo/old-hotel-sign_1101-890.jpg?w=740&t=st=1684850432~exp=1684851032~hmac=3bc518cb3c301103c7942c623f0070c2f77c88772b9cf00757ef7a40edccaf16" parent='booking' title='booking' />
        <Booking />
        </Layout>
        </div> : <Login />}

       
        
        </>
        
     );
}
 
export default BookingPage;
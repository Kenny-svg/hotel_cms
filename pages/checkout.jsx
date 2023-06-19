import Layout from "../Layout/Layout";
import Head from "next/head";
import BreadCrumb from "../components/defaultLayout/breadcrumb/index";
import CheckoutComp from "../components/defaultLayout/HomeComponents/CheckoutComp";
import { useSelector } from "react-redux";
const Checkout = () => {
  const selectedDate = useSelector(
    (state) => state.wishlist.selectedValues.selectedDate
  );
  const selectedDateTwo = useSelector(
    (state) => state.wishlist.selectedValues.selectedDateTwo
  );
  const selectedPerson = useSelector(
    (state) => state.wishlist.selectedValues.selectedPerson
  );
  const selectedRoom = useSelector(
    (state) => state.wishlist.selectedValues.selectedRoom
  );
  const selectedRoomNo = useSelector(
    (state) => state.wishlist.selectedValues.selectedRoomNo
  );
  const formattedDate =
    selectedDate instanceof Date ? selectedDate.toDateString() : selectedDate;
  const formattedDateTwo =
    selectedDateTwo instanceof Date
      ? selectedDateTwo.toDateString()
      : selectedDateTwo;
  console.log(selectedRoom, selectedDate, selectedPerson, formattedDate);
  return (
    <>
      <Layout>
        <Head>
          <title>Checkout | KandB</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <BreadCrumb
          url="https://img.freepik.com/free-photo/old-hotel-sign_1101-890.jpg?w=740&t=st=1684850432~exp=1684851032~hmac=3bc518cb3c301103c7942c623f0070c2f77c88772b9cf00757ef7a40edccaf16"
          parent="checkout"
          title="checkout"
        />

        <div className="border border-yellow-400 shadow-lg w-10/12 mx-auto mt-10 mb-10">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-100 text-left">Check in</th>
                <th className="py-4 px-6 bg-gray-100 text-left">Check out</th>
                <th className="py-4 px-6 bg-gray-100 text-left">Person</th>
                <th className="py-4 px-6 bg-gray-100 text-left">Room</th>
                <th className="py-4 px-6 bg-gray-100 text-left">Room no</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-b border-gray-300">
                  {formattedDate}
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  {formattedDateTwo}
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  {selectedPerson}
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  {selectedRoom}
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  {selectedRoomNo}
                </td>
              </tr>
              {/* Add more table rows as needed */}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};
export default Checkout;

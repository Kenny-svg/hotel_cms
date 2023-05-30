import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import GoogleMap from '../../HomeComponents/contact/GoogeMAp'
const ContactUs = () => {
  return (
    <>
      <div className="w-10/12 ml-10 md:ml-28 mt-10">
        <h1 className="text-yellow-500 text-2xl md:text-5xl font-extrabold">
          If you have any questions dont hesitate to contact us.
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 mx-auto mt-10 gap-8 mb-20">
        <div className="md:col-span-2 border-2 border-gray-300">
          <div>
            <h1 className="mt-10 uppercase tracking-widest text-center text-yellow-500">
              Get in touch
            </h1>
            <form className="grid w-10/12 mx-auto">
              <div className="mt-5">
                <input
                  className="py-2 w-full w-full md:w-full px-2 bg-gray-200 border border-gray-200 focus:outline-none focus:border-yellow-500"
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                /><br />
                <input
                  className="mt-5 py-2 w-full md:w-full px-2 bg-gray-200 border border-gray-200 focus:outline-none focus:border-yellow-500"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                /><br />
                <input
                  className="mt-5 py-2 w-full md:w-full px-2 bg-gray-200 border border-gray-200 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Enter your subject"
                  type="text"
                  name="name"
                /><br />
                <textarea
                  placeholder="Enter your message"
                  className="mt-5 h-28 w-full md:w-full px-2 bg-gray-200 border border-gray-200 focus:outline-none focus:border-yellow-500"
                /><br />
                <p className="text-sm text-gray-600 mt-5 mb-5">
                  * All fields are mandatory
                </p>
                <button className="px-8 py-2 bg-yellow-500 text-white font-bold text-sm mb-10 border-2 border-yellow-500 transition duration-300 hover:bg-gray-200 hover:border-black hover:border-2 hover:text-black">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:col-span-1 border-2 border-gray-300 pl-5">
          <h1 className="mt-10 uppercase tracking-widest text-center text-yellow-500">
            Information
          </h1>
          <div className="flex md:flex-row flex-col gap-5 justify-start mt-10">
            <div className="text-4xl text-yellow-500">
              <HiLocationMarker />
            </div>
            <div>
              <h1 className="text-black font-bold">ADDRESS</h1>
              <p>Plot abcd 1234 xyz Street,</p>
              <p>PMB 121212 Victoria Island, Lagos</p>
              <p>Nigeria</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5 justify-start mt-10">
            <div className="text-4xl text-yellow-500">
              <HiOutlineMail />
            </div>
            <div>
              <h1 className="text-black font-bold">E-MAIL</h1>
              <p>kennyfagbenro@gmail.com</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5 justify-start mt-10">
            <div className="text-4xl text-yellow-500">
              <HiPhone />
            </div>
            <div className="mb-10 md:mb-0">
              <h1 className="text-black font-bold">PHONE</h1>
              <p>+2349069991722</p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  );
}

export default ContactUs;

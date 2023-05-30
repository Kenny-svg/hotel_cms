const GoogleMap = () => {
    return ( 
        <>
             <div className="mt-10 mb-5">
            <iframe
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63593.376641570706!2d3.3792050556868295!3d6.524379855231231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c88d7e872e5%3A0xb6afcf09cb64a7c!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1622246482205!5m2!1sen!2sng"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </>
     );
}
 
export default GoogleMap;
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo nibh, gravida ac mattis sed, interdum vitae urna.
            </p>
          </div>
            <div className="grid grid-cols-2">
                <div>
                <h3 className="text-white text-lg font-bold mb-4">Links</h3>
                <ul className="text-gray-400">
                <li className="mb-2">
                    <a href="#" className="hover:text-white">Home</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:text-white">About</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:text-white">Services</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:text-white">Contact</a>
                </li>
                </ul>
            </div>
            <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Rooms</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
            </div>
          
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm5.265 4.549h2.111V6.5h-2.11v2.05zm0 1.968h2.111v6.12h2.973v-6.12h1.622V9.768h-1.622V8.59c0-.558.167-.943.511-1.259.34-.31.799-.46 1.41-.46h1.529V6.5h-1.585c-1.433 0-2.43.512-2.906 1.537-.269.585-.384 1.32-.384 2.173v1.978h-1.622zM8.376 12H10.5v6.12H8.376V12zm3.27 0H13v6.12h-1.355v-2.346h-.036c-.221.394-.675.757-1.31.757-.808 0-1.45-.583-1.45-1.92V12H8.4v-.614c0-.642.158-1.09.461-1.438.327-.372.785-.548 1.372-.548h1.412V12zm3.09 0H16v6.12h-1.544v-2.055H14.37v-.443c0-.874-.182-1.479-.518-1.863-.331-.38-.827-.56-1.507-.56h-1.616V12h1.678c.66 0 1.044.134 1.33.403.322.313.492.767.492 1.446v.614zm4.823-2.396h1.737V9.625H19.56V8.625c0-.76.213-1.292.63-1.634.363-.307.907-.458 1.642-.458h.972V6.5h-.85c-.836 0-1.413.219-1.777.654-.257.293-.378.69-.378 1.45v.585z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm5.805 7.172c0-.013-.01-.023-.023-.023a3.82 3.82 0 0 0-2.648 1.1 1 1 0 1 0 1.38 1.456 1.833 1.833 0 0 1-.824-.474 1 1 0 0 0-1.383 0 5.53 5.53 0 0 0-.828.58 5.514 5.514 0 0 0 0 7.797 5.43 5.43 0 0 0 3.894 1.63c1.372 0 2.652-.528 3.61-1.488a5.516 5.516 0 0 0 0-7.798 5.426 5.426 0 0 0-3.795-1.564zm.133 1.223c.705 0 1.33.291 1.785.804a3.83 3.83 0 0 1 1.145 2.755 3.821 3.821 0 0 1-1.1 2.648 3.835 3.835 0 0 1-2.783 1.14 3.82 3.82 0 0 1-2.647-1.1 3.834 3.834 0 0 1-1.139-2.648 3.832 3.832 0 0 1 1.1-2.755c.455-.512 1.08-.804 1.785-.804zm7.313-.193c.55 0 .977.408 1.044.486a1 1 0 0 1-.232 1.765 2.03 2.03 0 0 0-1.282.527c-.506.454-1.26.554-1.88.297a4.84 4.84 0 0 1-2.963-2.73 4.837 4.837 0 0 1 0-4.309 4.826 4.826 0 0 1 3.438-2.14c1.143 0 2.25.422 3.138 1.186a4.83 4.83 0 0 1 1.64 3.777 1 1 0 0 1-.21.82 1 1 0 0 1-.826.365 1.13 1.13 0 0 1-.64-.21 2.851 2.851 0 0 0-2.32-.453 2.828 2.828 0 0 0-1.863 2.66c0 .76.305 1.523.836 2.074.43.542 1.047.826 1.717.826z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-9 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm5.5-9A1.5 1.5 0 0 0 15 2h-2a1.5 1.5 0 0 0-1.5 1.5V5h-1V3.5A1.5 1.5 0 0 0 9 2h-2a1.5 1.5 0 0 0-1.5 1.5V5H5v2h1.5v7h-1V19h1.5v1.5A1.5 1.5 0 0 0 7 22h2a1.5 1.5 0 0 0 1.5-1.5V19h1v1.5A1.5 1.5 0 0 0 15 22h2a1.5 1.5 0 0 0 1.5-1.5V19h1v-2h-1.5v-7H19V5h-1.5V3.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

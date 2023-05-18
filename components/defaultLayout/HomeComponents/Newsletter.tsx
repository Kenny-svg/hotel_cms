import { FormEvent, useState } from 'react';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    // Add your subscribe logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="bg-yellow-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-gray-900">
              {/* Icon or logo can be added here */}
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Subscribe to our newsletter</span>
              <span className="hidden md:inline">
                Sign up for our newsletter and get the latest updates directly to your inbox.
              </span>
            </p>
          </div>
          <div className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
            <form onSubmit={handleSubscribe}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="flex rounded-md shadow-sm">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent sm:text-sm bg-gray-700 text-white"
                />
                <button
                  type="submit"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;

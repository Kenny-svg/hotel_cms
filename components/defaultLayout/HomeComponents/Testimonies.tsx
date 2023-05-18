import TextCarousel from './gallery/TextCarousel';

const slides = [
  {
    title: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas perferendis consequatur inventore ea a debitis voluptates, nihil suscipit, numquam itaque architecto quam. Minus ullam saepe sit voluptates reiciendis doloremque.',
    img: 'https://caonihotel.com.ng/website/assets/img/testimonial/3.jpg',
    users: {
      name: "Kenny",
      state: "Lagos",
      num: "09069991722",
      type: "Customer"

    }
  },
  {
    title: 'Slide 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas perferendis consequatur inventore ea a debitis voluptates, nihil suscipit, numquam itaque architecto quam. Minus ullam saepe sit voluptates reiciendis doloremque. pit, numquam itaque architecto quam. Minus ullam saepe sit voluptates reiciendis doloremque',
    img: 'https://caonihotel.com.ng/website/assets/img/testimonial/1.jpg',
    users: {
      name: "Tope",
      state: "Lagos",
      num: "09069991722",
      type: "Customer"

    }
  },
  {
    title: 'Slide 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas perferendis consequatur inventore ea a debitis voluptates, nihil suscipit, numquam itaque architecto quam. Minus ullam saepe sit voluptates reiciendis doloremque. ptas perferendis consequatur inventore ea a debitis voluptates, nihil suscipit, numquam itaque architecto quam. Minus ullam saepe sit voluptates reiciendis doloremque.',
    img: 'https://caonihotel.com.ng/website/assets/img/testimonial/4.jpg',
    users: {
      name: "Abiola",
      state: "Lagos",
      num: "09069991722",
      type: "Customer"

    }
  },
];

const Testimonies = () => {
  return (
    <>

      <div className="relative">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <img className="object-cover h-[850px] sm:h-[750px] md:h-[600px] w-full mt-10 z-10" src="https://img.freepik.com/free-photo/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-tekirova-kemer_146671-18757.jpg?w=740&t=st=1684333903~exp=1684334503~hmac=9bdd5498575bcebac9082ceeae6bb47902ae68be181143aa9cdc13963e13373c" />
  <div className="absolute inset-0 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-10 xl:gap-16 items-center justify-center z-20">
      <div className="container mx-auto mb-96">
      <div className="text-center text-yellow-500">
            <h1 className="text-xl text-white font-bold uppercase">Testimony</h1>
            <h1 className="text-2xl md:text-4xl font-extrabold uppercase">WHAT CLIENT SAYS</h1>
            <p className="w-full md:mb-0 mb-16 md:w-1/2 mx-auto mt-2 font-bold text-white">A recent testimony of what our client says about us</p>
        </div>
        <TextCarousel slides={slides} />
      </div>
  </div>
</div>
    </>

    
  );
};

export default Testimonies;


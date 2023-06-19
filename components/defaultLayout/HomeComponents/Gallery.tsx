import Link from "next/link"
import Responsive from "./GalleryDemo"
// import ImageGallery from "./gallery/ImageGallery"
const images = [
  {
    src: 'https://img.freepik.com/premium-photo/beautiful-luxury-umbrella-chair-around-outdoor-swimming-pool-hotel-resort-with-coconut-palm-tree-sunset-sunrise-sky-holiday-vacation-concept_1339-162649.jpg',
    alt: 'Image 1',
  },
  {
    src: 'https://img.freepik.com/free-photo/beautiful-luxury-hotel-swimming-pool-resort_74190-1678.jpg?w=740&t=st=1684160985~exp=1684161585~hmac=01c5a61a6799e5e6facef0c3be5d349b326409dc9e7dee217ef4907b81fe80b9',
    alt: 'Image 2',
  },
  {
    src: 'https://img.freepik.com/free-photo/swimming-pool_74190-2110.jpg?t=st=1684158476~exp=1684159076~hmac=b07c731c41763da80a575b8f39895673be95e8b496d0e67d5747dcf77e75a73e',
    alt: 'Image 3',
  },
  {
    src: 'https://img.freepik.com/free-photo/beautiful-pool_1203-213.jpg?t=st=1684140176~exp=1684140776~hmac=cc7451cda21297992f7ba563a32f38f340ec4f368866392a8510ac97cd990051',
    alt: 'Image 4',
  },
  {
    src: 'https://img.freepik.com/free-photo/hammocks-umbrellas-with-trees_1203-210.jpg?t=st=1684161017~exp=1684161617~hmac=8a7fd4bdfdcc409851d20dc2570bca14e442d1e0f05573ffb82cf50e2603dba2',
    alt: 'Image 5',
  },
  {
    src: 'https://img.freepik.com/free-photo/closed-metal-pots_1203-2059.jpg',
    alt: 'Image 6',
  }, 
  {
    src: 'https://img.freepik.com/free-photo/closed-metal-pots_1203-2059.jpg',
    alt: 'Image 7',
  },
  {
    src: 'https://img.freepik.com/free-photo/closed-metal-pots_1203-2059.jpg',
    alt: 'Image 8',
  },
]

 const Gallery = () => {
  return (
    <>
    <div className="container mx-auto py-10">
            <div className="text-center mt-10">
            <h1 className="text-xl font-bold uppercase">GALLERY</h1>
            <h1 className="text-4xl font-bold uppercase">Our Gallery</h1>
            <p className="w-1/2 mx-auto">Image Gallery of RandB Hotel</p>
        </div>

      {/* <ImageGallery images={images} /> */}
      <Responsive images={images} />

    </div>
    <div className="flex justify-center">
          <Link href="/gallery">
            <button className="bg-yellow-500  font-bold py-2 text-white rounded-md hover:bg-white hover:text-black border hover:border-black duration-300 transition text-sm p-2">
              See more
            </button>
          </Link>
        </div>
          </>
  )
}


export default Gallery

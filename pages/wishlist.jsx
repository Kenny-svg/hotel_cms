import Layout from "@/Layout/Layout";
import WishlistView from "../components/defaultLayout/HomeComponents/Wishlist";
import BreadCrumb from "@/components/defaultLayout/breadcrumb";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const WishlistComp= ({itemId,}) => {
    // const selectedItemId = useSelector((state ) => state.wishlist.selectedItemId);
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const wishlist = useSelector((state) => state.wishlist)
    // const selectedItem = wishlistItems.find(item => item.id === itemId);

    // console.log(selectedItemId)
    console.log(wishlistItems)
    console.log(wishlist)
    

    // const router = useRouter();
    // const itemId = parseInt(router.query.itemId);
  return (
    <Layout>
    <div>
      {/* Other content */}
      <BreadCrumb parent='wishlist' title='wishlist' url='https://as2.ftcdn.net/v2/jpg/04/65/05/85/1000_F_465058501_IIwYKywzxSZrdiiXQK1GkPHicf0FtTEs.jpg' />
      

      {wishlistItems.length ? wishlistItems.map((item)=> {
        return <WishlistView item={item} />
      }) : <div>No item</div> }
    </div>
    </Layout>
  );
};

export default WishlistComp;
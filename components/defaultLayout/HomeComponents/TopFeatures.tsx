import Card from "./Card";

const TopFeatures = () => {
    return ( 
        <>
        <div className="text-center">
             <h1 className="text-xl font-bold text-gray-900 mb-4 text-center mt-10">Features</h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center mt-5">TOP FEATURES</h1>
            <h5>KandB Hotel is so unique it provides all of these features</h5>
        </div>
        <div>
            <Card />
        </div>

        </>
     );
}
 
export default TopFeatures;
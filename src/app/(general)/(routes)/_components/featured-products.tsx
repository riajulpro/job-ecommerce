import FeaturedProductsCards from "./featured-products-cards";

const FeaturedProducts = async () => {
  return (
    <div>
      <h1 className="title text-center">Featured Products</h1>
      <div className="content my-5">
        <FeaturedProductsCards />
      </div>
    </div>
  );
};

export default FeaturedProducts;

import HeroSection from "./_components/hero-section";
import LatestProduct from "./_components/latest-product";
import FeaturedProducts from "./_components/featured-products";
import ModernCategoryProduct from "./_components/modern-category-product";
import ProductGallery from "./_components/product-gallery";
import StaticsSection from "./_components/statics-section";
import TrendyProduct from "./_components/trendy-product";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StaticsSection />
      <FeaturedProducts />
      <LatestProduct />
      <TrendyProduct />
      <ModernCategoryProduct />
      <ProductGallery />
    </div>
  );
};

export default HomePage;

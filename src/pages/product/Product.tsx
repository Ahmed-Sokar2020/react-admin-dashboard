import { lazy, Suspense, memo } from "react";
import { singleProduct } from "../../data";
import "./product.scss";

const Single = lazy(() => import("../../components/single/Single"));

const Product = () => {
  //  // Fetch data and send it to single component((similar to product page)
  return (
    <div>
      <Suspense fallback={null}>
        <Single {...singleProduct} />
      </Suspense>
    </div>
  );
};

export default memo(Product);

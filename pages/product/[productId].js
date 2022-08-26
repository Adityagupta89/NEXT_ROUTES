import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div>
      This is single product page : {productId}
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default ProductDetails;

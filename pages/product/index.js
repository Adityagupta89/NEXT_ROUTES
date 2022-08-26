import React from "react";
import Link from "next/link";

const Product = () => {
  return (
    <div style={{ height: "50vh" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          height: "50vh",
          cursor: "pointer",
        }}
      >
        <Link href={"/product/1"}>
          <li>
            <a>Product 1</a>
          </li>
        </Link>
        <Link href={"/product/2"}>
          <li>
            <a>Product 2</a>
          </li>
        </Link>
        <Link href={"/product/3"} replace>
          <li>
            <a>Product 3</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Product;

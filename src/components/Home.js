import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { productList } from "../redux/Cart/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {!data1 && (
        <h1 className="text-center my-2">Please Search your Favourite Item</h1>
      )}
      <Items data={data1} />
    </>
  );
};

export default Home;

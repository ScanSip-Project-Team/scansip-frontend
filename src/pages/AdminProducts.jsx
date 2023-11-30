import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ProductAdmin from "../components/ProductAdmin";
import baseApiURL from "../api";

const AdminProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiURL}/admin/products`);
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>LOADING</p>
  ) : (
    <>
      <Header />
      <div className="container">
        <h1 className="mb-6 border-b border-solid border-black p-6 text-3xl">
          Mes produits ({data.count})
        </h1>

        {/* Big Carousel Section */}
        <div className="flex flex-nowrap gap-4 overflow-scroll">
          <div className="shrink-0 border-r-2 p-2">
            <h2 className="text-bold mb-3 text-xl">Mes Softs</h2>
            <div className="flex flex-col">
              {data.products
                .filter((element) => element.product_category === "Softs")
                .map((product) => {
                  return <ProductAdmin key={product._id} product={product} />;
                })}
            </div>
          </div>
          <div className="shrink-0 border-r-2 p-2">
            <h2 className="text-bold mb-3 text-xl">Mes Snacks</h2>
            <div className="flex flex-col gap-6">
              {data.products
                .filter((element) => element.product_category === "Snacks")
                .map((product) => {
                  return <ProductAdmin key={product._id} product={product} />;
                })}
            </div>
          </div>
          <div className="shrink-0 border-r-2 p-2">
            <h2 className="text-bold mb-3 text-xl">Mes Alcools</h2>
            <div className="flex flex-col">
              {data.products
                .filter((element) => element.product_category === "Alcools")
                .map((product) => {
                  return <ProductAdmin key={product._id} product={product} />;
                })}
            </div>
          </div>
          <div className="shrink-0 border-r-2 p-2">
            <h2 className="text-bold mb-3 text-xl">Mes Cocktails</h2>
            <div className="flex flex-col">
              {data.products
                .filter((element) => element.product_category === "Cocktails")
                .map((product) => {
                  return <ProductAdmin key={product._id} product={product} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminProducts;
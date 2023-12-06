//Import Packages
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//Import Components
import Header from "../components/HeaderNav/Header";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";
import ProductAdmin from "../components/ProductAdmin";
import Loader from "../components/Loader";
import baseApiURL from "../api";
const AdminProducts = ({ adminToken, setAdminToken }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  console.log("data=>", data);
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

    if (!adminToken) {
      if (Cookies.get("scanSipToken")) {
        setAdminToken(Cookies.get("scanSipToken"));
      } else {
        navigate("/admin/signin");
      }
    } else {
      fetchData();
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header adminToken={adminToken} setAdminToken={setAdminToken} />
      <HeaderMobile adminToken={adminToken} setAdminToken={setAdminToken} />
      <div className=" relative  p-8">
        <div className="flex items-center justify-between border-b border-black">
          <h1 className="mb-4  p-6 text-3xl">Mes produits ({data.count})</h1>
          <Link to="/admin/new-product">
            <button className=" mr-4 w-[84px] rounded-full bg-black px-4 py-1 text-white">
              Add
            </button>
          </Link>
        </div>

        {/* Big Carousel Section */}
        <div className="mt-4 flex flex-nowrap gap-1 overflow-scroll sm:gap-4">
          <div className="shrink-0  border-r-2 p-2">
            <h2 className="text-bold mb-3  text-xl">Mes Softs</h2>

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

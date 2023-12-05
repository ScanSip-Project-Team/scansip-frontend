import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/HeaderNav/Header";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";

import Loader from "../components/Loader";
import Button from "../components/Button";
// import FormCreateProduct from "../components/FormCreateProduct";
import FormUpdateProduct from "../components/Form/FormUpdateProduct";

const AdminUpdateProduct = ({ adminToken, setAdminToken }) => {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  // const { product } = location.state;
  console.log("location=>", location);

  const navigate = useNavigate();

  // console.log("product is=>", product);

  useEffect(() => {
    console.log("Useffect in");
    if (adminToken) {
      console.log("if token ok in");

      if (location.state !== null) {
        console.log("if product ok in");
        setIsLoading(false);
      } else {
        console.log("esle no product in");
        navigate("/admin/products");
      }
    } else {
      console.log("else no token in");
      navigate("/admin/signin");
    }
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header adminToken={adminToken} setAdminToken={setAdminToken} />
      <HeaderMobile adminToken={adminToken} setAdminToken={setAdminToken} />
      <div className="">
        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Mettre à jour un produit
        </h1>
        <div className="p-6">
          <FormUpdateProduct product={location.state.product} />
        </div>
      </div>
    </>
  );
};
export default AdminUpdateProduct;

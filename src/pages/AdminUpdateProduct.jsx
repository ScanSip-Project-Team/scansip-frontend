import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
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

  const navigate = useNavigate();

  useEffect(() => {
    if (adminToken) {
      if (location.state !== null) {
        setIsLoading(false);
      } else {
        navigate("/admin/products");
      }
    } else {
      navigate("/admin/signin");
    }
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div>
        <Toaster />
      </div>
      <Header adminToken={adminToken} setAdminToken={setAdminToken} />
      <HeaderMobile adminToken={adminToken} setAdminToken={setAdminToken} />
      <div className="">
        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Mettre à jour un produit
        </h1>
        <div className="p-6">
          <FormUpdateProduct product={location.state.product} toast={toast} />
        </div>
      </div>
    </>
  );
};
export default AdminUpdateProduct;

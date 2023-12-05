import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/HeaderNav/Header";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";

import Button from "../components/Button";
import FormCreateProduct from "../components/Form/FormCreateProduct";

import imgPlaceholder from "../assets/placeholder.png";
import Loader from "../components/Loader";

const AdminNewProduct = ({ adminToken, setAdminToken }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (adminToken) {
      setIsLoading(false);
    } else {
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
          Créer un produit
        </h1>
        <div className="p-6">
          <FormCreateProduct />
        </div>
      </div>
    </>
  );
};
export default AdminNewProduct;

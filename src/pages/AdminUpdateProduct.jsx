// Import Packages
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// Import Components
import Header from "../components/HeaderNav/Header";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";
import Loader from "../components/Loader";
import FormUpdateProduct from "../components/Form/FormUpdateProduct";

const AdminUpdateProduct = ({ adminToken, setAdminToken }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

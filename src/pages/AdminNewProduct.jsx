//Import Packages
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
//Import Components
import Header from "../components/HeaderNav/Header";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";
import Loader from "../components/Loader";
import FormCreateProduct from "../components/Form/FormCreateProduct";

const AdminNewProduct = ({ adminToken, setAdminToken }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (adminToken) {
      setIsLoading(false);
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
          Créer un produit
        </h1>
        <div className="p-6">
          <FormCreateProduct toast={toast} />
        </div>
      </div>
    </>
  );
};
export default AdminNewProduct;

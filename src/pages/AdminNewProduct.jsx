//Import Packages
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Import Components
import Header from "../components/HeaderNav/Header";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";
import FormCreateProduct from "../components/Form/FormCreateProduct";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

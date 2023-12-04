import Header from "../components/Header";

import Button from "../components/Button";
// import FormCreateProduct from "../components/FormCreateProduct";
import FormUpdateProduct from "../components/Form/FormUpdateProduct";

import imgPlaceholder from "../assets/placeholder.png";

const AdminUpdateProduct = ({ setAdminToken }) => {
  return (
    <>
      <Header setAdminToken={setAdminToken} />
      <div className="container">
        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Mettre à jour un produit
        </h1>
        <div className="p-6">
          <FormUpdateProduct />
        </div>
      </div>
    </>
  );
};
export default AdminUpdateProduct;

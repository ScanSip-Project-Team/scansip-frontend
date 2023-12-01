import Header from "../components/Header";

import Button from "../components/Button";
import FormCreateProduct from "../components/FormCreateProduct";

import imgPlaceholder from "../assets/placeholder.png";

const AdminNewProduct = ({ setAdminToken }) => {
  return (
    <>
      <Header setAdminToken={setAdminToken} />
      <div className="container">
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

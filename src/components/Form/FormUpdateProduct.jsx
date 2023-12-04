import { useState } from "react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

import baseApiURL from "../../api";
import CustomInput from "./CustomInput";
import Textarea from "./Textarea";
import SelectBox from "./SelectBox";
import ImageUpload from "./ImageUpload";

const FormCreateProduct = () => {
  const location = useLocation();
  const { product } = location.state;
  const public_id = product.product_image.public_id;
  console.log("product >>>>", product);
  console.log("product._id >>>", product._id);
  console.log("public_id >>>", public_id);

  const [name, setName] = useState(product.product_name);
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState(product.product_description);
  const [price, setPrice] = useState(product.product_price);
  const [category, setCategory] = useState(product.product_category);
  const [energy, setEnergy] = useState(product.nutritional_values.energy);
  const [sugar, setSugar] = useState(product.nutritional_values.sugar);
  const [proteins, setProteins] = useState(product.nutritional_values.proteins);
  const [salt, setSalt] = useState(product.nutritional_values.salt);
  const [fat, setFat] = useState(product.nutritional_values.fat);
  const [fibers, setFibers] = useState(product.nutritional_values.fibers);

  const [productImage, setProductImage] = useState(
    product.product_image.secure_url,
  );
  const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [errorImage, setErrorImage] = useState("");
  // const [errorFields, setErrorFields] = useState("");
  // const [errorInteger, setErrorInteger] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    //Update form is dealed in the backend
    // setErrorMessage("");
    // setErrorImage("");
    // setErrorFields("");
    // setErrorInteger("");
    setError(false);
    try {
      const formData = new FormData();
      formData.append("product_name", name);
      formData.append("product_description", description);
      formData.append("product_category", category);
      formData.append("product_price", price);
      formData.append("energy", energy);
      formData.append("fat", fat);
      formData.append("fibers", fibers);
      formData.append("proteins", proteins);
      formData.append("salt", salt);
      formData.append("sugar", sugar);
      formData.append("product_image", picture);
      formData.append("public_id", public_id);

      const response = await axios.put(
        `${baseApiURL}/admin/update/${product._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setName("");
      setPicture("");
      setDescription("");
      setPrice("");
      setCategory("");
      setEnergy("");
      setSugar("");
      setProteins("");
      setSalt("");
      setFat("");
      setFibers("");
      // setErrorMessage("");
      // setErrorImage("");
      // setErrorFields("");
      console.log(response.data);

      navigate("/admin/products");
    } catch (error) {
      setError(true);
      console.log(error.response.data.message);
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  const handleOnChange = (event, setter) => {
    setError(false);
    setter(event.target.value);
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <form
        onSubmit={(event) => {
          handleSubmitForm(event);
        }}
      >
        <div className="flex gap-6">
          <ImageUpload
            setPicture={setPicture}
            picture={picture}
            productImage={productImage}
            setProductImage={setProductImage}
            labelText="Modifier la photo du produit"
            error={error}
          />

          <div className="flex-3 w-2/3">
            <CustomInput
              handleOnChange={handleOnChange}
              setStateValue={setName}
              stateValue={name}
              label="Nom du produit :"
              id="name"
              type="text"
              placeholder="Ajoutez un nom de produit"
              classParentDiv="mb-6"
              classInput=""
              error={error}
            />

            <Textarea
              handleOnChange={handleOnChange}
              setStateValue={setDescription}
              stateValue={description}
              label="Ingrédients :"
              id="description"
              type="text"
              placeholder="Ajoutez  une description"
              htmlTag="textarea"
              error={error}
            />

            <div className="mb-8 flex w-full flex-col">
              <span className="mb-4">Valeurs nutritionnelles :</span>
              <div className="flex w-full flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <CustomInput
                    handleOnChange={handleOnChange}
                    setStateValue={setEnergy}
                    stateValue={energy}
                    label="Energie (kcal)"
                    id="energy"
                    type="text"
                    placeholder=""
                    classParentDiv="w-36"
                    classInput="w-16 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChange}
                    setStateValue={setFat}
                    stateValue={fat}
                    label="Matières grasses (g)"
                    id="fat"
                    type="text"
                    placeholder=""
                    classParentDiv="w-36"
                    classInput="w-16 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChange}
                    setStateValue={setSugar}
                    stateValue={sugar}
                    label="Glucides (g)"
                    id="sugar"
                    type="text"
                    placeholder=""
                    classParentDiv="w-36"
                    classInput="w-16 "
                    error={error}
                  />
                </div>
                <div className="flex justify-between">
                  <CustomInput
                    handleOnChange={handleOnChange}
                    setStateValue={setFibers}
                    stateValue={fibers}
                    label="Fibres"
                    id="fibers"
                    type="text"
                    placeholder=""
                    classParentDiv="w-36"
                    classInput="w-16 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChange}
                    setStateValue={setProteins}
                    stateValue={proteins}
                    label="Protéines (g)"
                    id="proteins"
                    type="text"
                    placeholder=""
                    classParentDiv="w-36"
                    classInput="w-16 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChange}
                    setStateValue={setSalt}
                    stateValue={salt}
                    label="Sel"
                    id="salt"
                    type="text"
                    placeholder=""
                    classParentDiv="w-36"
                    classInput="w-16 "
                    error={error}
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 flex flex-1 gap-6">
              <CustomInput
                handleOnChange={handleOnChange}
                setStateValue={setPrice}
                stateValue={price}
                label="Price (€)"
                id="price"
                type="text"
                placeholder=""
                classInput="w-24"
                classParentDiv=""
                error={error}
              />

              <SelectBox
                handleOnChange={handleOnChange}
                setStateValue={setCategory}
                stateValue={category}
                label="Catégorie"
                id="category"
                error={error}
              />
            </div>
            <div className="flex justify-between gap-4">
              <button type="submit" className="btn-primary w-36 text-lg">
                Mettre à jour
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default FormCreateProduct;

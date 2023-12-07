// Import Packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
import baseApiURL from "../../api";

// Import Components
import CustomInput from "./CustomInput";
import Textarea from "./Textarea";
import SelectBox from "./SelectBox";
import ImageUpload from "./ImageUpload";
import Loader from "../Loader";

const FormCreateProduct = ({ toast }) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [energy, setEnergy] = useState("");
  const [sugar, setSugar] = useState("");
  const [proteins, setProteins] = useState("");
  const [salt, setSalt] = useState("");
  const [fat, setFat] = useState("");
  const [fibers, setFibers] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    //Validation form is dealed in the backend
    // setErrorMessage("");
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

      const response = await axios.post(
        `${baseApiURL}/admin/products/new`,
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

      setIsLoading(false);
      navigate("/admin/products");
    } catch (error) {
      setIsLoading(false);
      setError(true);

      toast.error(error.response.data.message);
    }
  };
  const handleOnChange = (event, setter) => {
    setError(false);
    setter(event.target.value);
  };
  const handleOnChangeInt = (event, setter) => {
    setError(false);
    if (event.target.value.includes(",")) {
      event.target.value = event.target.value.replace(",", ".");
    }
    setter(event.target.value);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      {/* <div>
        <Toaster />
      </div> */}
      <form
        onSubmit={(event) => {
          handleSubmitForm(event);
        }}
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <ImageUpload
            setPicture={setPicture}
            picture={picture}
            labelText=" Ajouter une photo"
            error={error}
          />

          <div className="flex-3 w-full sm:w-2/3">
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
              <div className="flex w-full flex-row gap-3 text-sm sm:flex-col">
                <div className="flex flex-1 flex-col justify-between sm:flex-row">
                  <CustomInput
                    handleOnChange={handleOnChangeInt}
                    setStateValue={setEnergy}
                    stateValue={energy}
                    label="Energie (kcal)"
                    id="energy"
                    type="text"
                    placeholder=""
                    classParentDiv="sm:w-36 w-full "
                    classInput="sm:w-16 w-28 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChangeInt}
                    setStateValue={setFat}
                    stateValue={fat}
                    label="Matières grasses (g)"
                    id="fat"
                    type="text"
                    placeholder=""
                    classParentDiv="sm:w-36 w-full"
                    classInput="sm:w-16 w-28 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChangeInt}
                    setStateValue={setSugar}
                    stateValue={sugar}
                    label="Glucides (g)"
                    id="sugar"
                    type="text"
                    placeholder=""
                    classParentDiv="sm:w-36 w-full"
                    classInput="sm:w-16 w-28 "
                    error={error}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between sm:flex sm:flex-row">
                  <CustomInput
                    handleOnChange={handleOnChangeInt}
                    setStateValue={setFibers}
                    stateValue={fibers}
                    label="Fibres"
                    id="fibers"
                    type="text"
                    placeholder=""
                    classParentDiv="sm:w-36 w-full"
                    classInput="sm:w-16 w-28 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChangeInt}
                    setStateValue={setProteins}
                    stateValue={proteins}
                    label="Protéines (g)"
                    id="proteins"
                    type="text"
                    placeholder=""
                    classParentDiv="sm:w-36 w-full"
                    classInput="sm:w-16 w-28 "
                    error={error}
                  />

                  <CustomInput
                    handleOnChange={handleOnChangeInt}
                    setStateValue={setSalt}
                    stateValue={salt}
                    label="Sel"
                    id="salt"
                    type="text"
                    placeholder=""
                    classParentDiv="sm:w-36 w-full"
                    classInput="sm:w-16 w-28 "
                    error={error}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 flex-1 flex-col items-center justify-center gap-6 sm:flex sm:flex-row">
              <CustomInput
                handleOnChange={handleOnChangeInt}
                setStateValue={setPrice}
                stateValue={price}
                label="Price (€)"
                id="price"
                type="text"
                placeholder=""
                classInput="w-24"
                classParentDiv="mb-6 sm:mb-1"
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
            <div className="flex justify-center gap-4">
              <Link to="/admin/products">
                <button className="btn-black w-36 text-lg">
                  Retourner aux produits
                </button>
              </Link>

              <button type="submit" className="btn-primary w-36 text-lg">
                Valider
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default FormCreateProduct;

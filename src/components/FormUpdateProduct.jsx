import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import imgPlaceholder from "../assets/placeholder.png";
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
  const [errorMessage, setErrorMessage] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [errorFields, setErrorFields] = useState("");
  const [errorInteger, setErrorInteger] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    //Update form is dealed in the backend
    setErrorMessage("");
    setErrorImage("");
    setErrorFields("");
    setErrorInteger("");
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
        `http://localhost:3000/admin/update/${product._id}`,
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
      setErrorMessage("");
      setErrorImage("");
      setErrorFields("");
      console.log(response.data);

      navigate("/admin/products");
    } catch (error) {
      console.log(error.response.data.message);

      if (
        error.response.data.message === "Tous les champs sont obligatoires 😉"
      ) {
        setErrorFields(error.response.data.message);
      }
      if (
        error.response.data.message ===
        "Vous devez choisir une image pour votre produit 😉"
      ) {
        console.log("NO IMAGE");
        setErrorImage(error.response.data.message);
      }
      if (
        error.response.data.message ===
        "Vous avez déjà un produit avec le même nom"
      ) {
        setErrorMessage(error.response.data.message);
      }
      if (
        error.response.data.message ===
        "Pour les valeurs nutritionnelles veuillez indiquer un nombre"
      ) {
        setErrorInteger(error.response.data.message);
      }
    }
  };

  const handleOnChange = (event, setter) => {
    setter(event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        handleSubmitForm(event);
      }}
    >
      <div className="mb-6 h-8 w-full text-center">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {errorFields && (
          <span className="ml-4 text-red-500">{errorFields}</span>
        )}
        {errorInteger && <p className="text-red-500">{errorInteger}</p>}
      </div>
      <div className="flex gap-6">
        <div className="relative w-1/3 flex-1">
          {!picture ? (
            <img
              className=" m-auto mb-6 w-64"
              src={imgPlaceholder}
              alt="placeholder"
            />
          ) : (
            <>
              <FontAwesomeIcon
                onClick={() => {
                  setPicture();
                }}
                className="primary-color absolute -right-3 -top-2 text-3xl"
                icon="fa-solid fa-circle-xmark"
              />
              <img
                className=" m-auto mb-6 w-64 rounded border border-green-400"
                src={URL.createObjectURL(picture)}
                alt=""
              />
            </>
          )}

          <div className="upload-module m-auto flex w-52 flex-col items-center justify-center gap-3">
            <label
              className="rounded bg-black p-3 text-center text-white"
              htmlFor="picture"
            >
              Modifier la photo du produit
            </label>
            <input
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
              className="hidden"
              type="file"
              id="picture"
            />
            {errorImage && (
              <div>
                <p className="ml-4 text-sm text-red-500">{errorImage}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex-3 w-2/3">
          <div className="mb-6 flex flex-col">
            <label className="mb-2" htmlFor="name">
              Nom du produit :
            </label>
            <input
              onChange={(event) => {
                handleOnChange(event, setName);
              }}
              className="rounded border border-green-300 p-2 outline-0"
              type="text"
              id="name"
              //   placeholder={product.product_name}
              value={name}
            />
          </div>
          <div className="mb-6 flex flex-col">
            <label className="mb-2" htmlFor="description">
              Ingrédients :
            </label>
            <textarea
              onChange={(event) => {
                handleOnChange(event, setDescription);
              }}
              className="rounded border border-green-300 p-2 outline-0"
              type="text"
              id="description"
              placeholder="Ajoutez une description"
              value={description}
            ></textarea>
          </div>
          <div className="mb-8 flex w-full flex-col">
            <span className="mb-4">Valeurs nutritionnelles :</span>
            <div className="flex w-full flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <div className="flex w-36 flex-col">
                  <label className="mb-2" htmlFor="energy">
                    Energie (kcal)
                  </label>
                  <input
                    onChange={(event) => {
                      handleOnChange(event, setEnergy);
                    }}
                    className="w-16 rounded border border-green-300 p-2 outline-0"
                    type="text"
                    id="energy"
                    value={energy}
                  />
                </div>
                <div className="flex w-36 flex-col">
                  <label className="mb-2" htmlFor="fat">
                    Matières grasses (g)
                  </label>
                  <input
                    onChange={(event) => {
                      handleOnChange(event, setFat);
                    }}
                    className="w-16 rounded border border-green-300 p-2 outline-0"
                    type="text"
                    id="fat"
                    value={fat}
                  />
                </div>
                <div className="flex w-36 flex-col">
                  <label className="mb-2" htmlFor="sugar">
                    Glucides (g)
                  </label>
                  <input
                    onChange={(event) => {
                      handleOnChange(event, setSugar);
                    }}
                    className="w-16 rounded border border-green-300 p-2 outline-0"
                    type="text"
                    id="sugar"
                    value={sugar}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex w-36 flex-col">
                  <label className="mb-2" htmlFor="fibers">
                    Fibres
                  </label>
                  <input
                    onChange={(event) => {
                      handleOnChange(event, setFibers);
                    }}
                    className="w-16 rounded border border-green-300 p-2 outline-0"
                    type="text"
                    id="fibers"
                    value={fibers}
                  />
                </div>
                <div className="flex w-36 flex-col">
                  <label className="mb-2" htmlFor="proteins">
                    Protéines (g)
                  </label>
                  <input
                    onChange={(event) => {
                      handleOnChange(event, setProteins);
                    }}
                    className="w-16 rounded border border-green-300 p-2 outline-0"
                    type="text"
                    id="proteins"
                    value={proteins}
                  />
                </div>
                <div className="flex w-36 flex-col">
                  <label className="mb-2" htmlFor="salt">
                    Sel
                  </label>
                  <input
                    onChange={(event) => {
                      handleOnChange(event, setSalt);
                    }}
                    className="w-16 rounded border border-green-300 p-2 outline-0"
                    type="text"
                    id="salt"
                    value={salt}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 flex flex-1 gap-6">
            <div className="flex flex-col">
              <label className="mb-4" htmlFor="price">
                Price (€)
              </label>
              <input
                onChange={(event) => {
                  handleOnChange(event, setPrice);
                }}
                className="w-24 rounded border border-green-300 p-2 outline-0"
                type="text"
                id="price"
                value={price}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <label className="mb-4" htmlFor="category">
                Catégorie {category}
              </label>
              <select
                onChange={(event) => {
                  handleOnChange(event, setCategory);
                }}
                className="w-54 rounded border border-green-300 p-2 outline-0"
                name="category"
                id="category"
              >
                <option value="">--Choisissez une catégorie--</option>

                {product.product_category === "Snacks" ? (
                  <option value="Snacks" selected>
                    Snacks
                  </option>
                ) : (
                  <option value="Snacks">Snacks</option>
                )}

                {product.product_category === "Soft" ? (
                  <option value="Softs" selected>
                    Softs
                  </option>
                ) : (
                  <option value="Softs">Softs</option>
                )}

                {product.product_category === "Alcools" ? (
                  <option value="Alcools" selected>
                    Alcools
                  </option>
                ) : (
                  <option value="Alcools">Alcools</option>
                )}

                {product.product_category === "Coktails" ? (
                  <option value="Cocktails" selected>
                    Cocktails
                  </option>
                ) : (
                  <option value="Cocktails">Cocktails</option>
                )}
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <button type="submit" className="btn-primary w-36 text-lg">
              Mettre à jour
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default FormCreateProduct;

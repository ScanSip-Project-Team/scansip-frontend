import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Selection = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("Softs");
  const [softs, setSofts] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [alcools, setAlcools] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  const handleClickSofts = () => {
    setCategory("Softs");
    const softsCopy = [...softs];

    for (let i = 0; i < data.length; i++) {
      if (data[i].product_category === "Soft") {
        const soft = softs.find((e) => e._id === data[i]._id);
        if (soft === undefined) {
          softsCopy.push(data[i]);
        }
      }
    }
    setSofts(softsCopy);
  };

  const handleClickSnacks = () => {
    setCategory("Snacks");
    const snacksCopy = [...snacks];

    for (let j = 0; j < data.length; j++) {
      if (data[j].product_category === "Snacks") {
        const snack = snacks.find((e) => e._id === data[j]._id);
        if (snack === undefined) {
          snacksCopy.push(data[j]);
        }
      }
    }
    setSnacks(snacksCopy);
  };

  const handleClickAlcools = () => {
    setCategory("Alcools");
    const alcoolsCopy = [...alcools];

    for (let k = 0; k < data.length; k++) {
      if (data[k].product_category === "Alcools") {
        const alcool = alcools.find((e) => e._id === data[k]._id);
        if (alcool === undefined) {
          alcoolsCopy.push(data[k]);
        }
      }
    }
    setAlcools(alcoolsCopy);
  };

  const handleClickCocktails = () => {
    setCategory("Cocktails");
    const cocktailsCopy = [...cocktails];

    for (let l = 0; l < data.length; l++) {
      if (data[l].product_category === "Coktails") {
        const cocktail = cocktails.find((e) => e._id === data[l]._id);
        if (cocktail === undefined) {
          cocktailsCopy.push(data[l]);
        }
      }
    }
    setCocktails(cocktailsCopy);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--scansip-backend--jswmm7jk2mlr.code.run/products"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="flex items-center justify-center gap-2 w-11/12 border-black border-2 my-6">
        <div
          className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
          onClick={handleClickSofts}
        >
          <img
            className="h-12 w-8"
            src="../src/assets/soft.png"
            alt="soft"
          />
          <p>Soft</p>
        </div>
        <div
          className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
          onClick={handleClickSnacks}
        >
          <img
            className="h-12 w-8"
            src="../src/assets/HotDog.png"
            alt="snacks"
          />
          <p>Snacks</p>
        </div>
        <div
          className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
          onClick={handleClickAlcools}
        >
          <img
            className="h-12 w-8"
            src="../src/assets/biere.png"
            alt="beer"
          />
          <p>Alcools</p>
        </div>
        <div
          className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
          onClick={handleClickCocktails}
        >
          <img
            className="h-12 w-8"
            src="../src/assets/Cocktail.png"
            alt="cocktail"
          />
          <p>Cocktails</p>
        </div>
      </div>

      {category === "Softs" && softs.length !== 0 ? (
        softs.map((item) => (
          <div
            className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full"
            key={item._id}
          >
            <div className="w-1/5">
              <img
                className="w-15 h-20 bg-[#F3F3F3]"
                src={item.product_image.secure_url}
                alt="product"
              />
            </div>
            <div className="w-4/5">
              <p>{item.product_name}</p> <p>{item.product_price} €</p>
            </div>
          </div>
        ))
      ) : category === "Snacks" && snacks.length !== 0 ? (
        snacks.map((item) => (
          <div
            className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full"
            key={item._id}
          >
            <div className="w-1/5">
              <img
                className="w-15 h-20 bg-[#F3F3F3]"
                src={item.product_image.secure_url}
                alt="product"
              />{" "}
            </div>
            <div className="w-4/5">
              <p>{item.product_name}</p> <p>{item.product_price} €</p>{" "}
            </div>{" "}
          </div>
        ))
      ) : category === "Alcools" && alcools.length !== 0 ? (
        alcools.map((item) => (
          <div
            className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full"
            key={item._id}
          >
            <div className="w-1/5">
              <img
                className="w-15 h-20 bg-[#F3F3F3]"
                src={item.product_image.secure_url}
                alt="product"
              />
            </div>
            <div className="w-4/5">
              <p>{item.product_name}</p> <p>{item.product_price} €</p>
            </div>
          </div>
        ))
      ) : category === "Cocktails" && cocktails.length !== 0 ? (
        cocktails.map((item) => (
          <div
            className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full"
            key={item._id}
          >
            <div className="w-1/5">
              <img
                className="w-15 h-20 bg-[#F3F3F3]"
                src={item.product_image.secure_url}
                alt="product"
              />
            </div>
            <div className="w-4/5">
              <p>{item.product_name}</p> <p>{item.product_price} €</p>
            </div>
          </div>
        ))
      ) : (
        <p>Sélectionner une catégorie</p>
      )}

      <input
        className="w-11/12 bg-black text-white p-1.5 my-6"
        type="submit"
        value="Valider le panier"
      />
    </div>
  );
};

export default Selection;

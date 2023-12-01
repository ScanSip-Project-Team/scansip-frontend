// Import Package
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Anchor } from "antd";

// Yohann code ----------------
//Import components
import Modal from "../Components/Modal";
// Yohann code ----------------

const Selection = ({ setCart, cart, setTotal, total }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("Softs");

  const snacksTab = [];
  const softsTab = [];
  const alcoolsTab = [];
  const cocktailsTab = [];

  // Yohann code -----------------------------
  const [openModal, setOpenModal] = useState(false);
  const [productID, setProductID] = useState();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (total === 0) {
      console.log("panier vide");
    } else {
      navigate("/billing");
    }
  };
  // Yohann code -----------------------------

  const handleClickSofts = () => {
    setCategory("Softs");
  };

  const handleClickSnacks = () => {
    setCategory("Snacks");
  };

  const handleClickAlcools = () => {
    setCategory("Alcools");
  };

  const handleClickCocktails = () => {
    setCategory("Cocktails");
  };

  // const [counter, setCounter] = useState();

  // setCounter(counter + 1);

  // setCounter((prevCounter) => {

  //   return prevCounter +1
  // });

  const handleClickPlus = (item) => {
    // je vérifie si le produit est déjà dans le panier
    const productToFind = cart.find((e) => e._id === item._id);

    // s'il n'est pas dans le panier, je lui ajoute une clé quantité et je le push dans le panier

    if (productToFind === undefined) {
      const cartCopy = [...cart];
      item.quantity = 1;
      cartCopy.push(item);
      setCart(cartCopy);
      setTotal(total + Number(item.product_price));
      console.log("cart >>>", cart);
    }
    // s'il est déjà dans le panier j'augmente la quantité de 1
    else {
      const indexOfProduct = cart.indexOf(productToFind);
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity + 1;
      setCart(cartCopy);
      setTotal(total + Number(item.product_price));
      console.log("cart >>>", cart);
    }
  };

  const handleClickMinus = (item) => {
    if (item.quantity !== 1) {
      // je cherche le produit dans le panier
      const productToFind = cart.find((e) => e._id === item._id);

      const indexOfProduct = cart.indexOf(productToFind);
      // et je diminue sa quantité de 1
      const cartCopy = [...cart];
      cartCopy[indexOfProduct].quantity = cart[indexOfProduct].quantity - 1;
      setCart(cartCopy);
      setTotal(total - Number(item.product_price));
      console.log("cart >>>", cart);
    } else {
      // je cherche le produit dans le panier
      const productToFind = cart.find((e) => e._id === item._id);

      const indexOfProduct = cart.indexOf(productToFind);
      // et je le supprime du panier
      const cartCopy = [...cart];
      cartCopy.splice(indexOfProduct, 1);
      setCart(cartCopy);
      delete item.quantity;
      setTotal(total - Number(item.product_price));
      console.log("cart >>>", cart);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  // Test Johanne snacksTab
  if (!isLoading && data) {
    for (let m = 0; m < data.length; m++) {
      if (data[m].product_category === "Snacks") {
        if (data[m].product_category === "Snacks") {
          const snack = snacksTab.find((e) => e._id === data[m]._id);
          if (snack === undefined) {
            snacksTab.push(data[m]);
          }
        }
      }
    }
  }
  // Test Johanne snacksTab

  // Test Johanne softsTab
  if (!isLoading && data) {
    for (let m = 0; m < data.length; m++) {
      if (data[m].product_category === "Soft") {
        if (data[m].product_category === "Soft") {
          const soft = softsTab.find((e) => e._id === data[m]._id);
          if (soft === undefined) {
            softsTab.push(data[m]);
          }
        }
      }
    }
  }
  // Test Johanne softsTab

  // Test Johanne alcoolsTab
  if (!isLoading && data) {
    for (let m = 0; m < data.length; m++) {
      if (data[m].product_category === "Alcools") {
        if (data[m].product_category === "Alcools") {
          const alcool = alcoolsTab.find((e) => e._id === data[m]._id);
          if (alcool === undefined) {
            alcoolsTab.push(data[m]);
          }
        }
      }
    }
  }
  // Test Johanne alcoolsTab

  // Test Johanne cocktailsTab
  if (!isLoading && data) {
    for (let m = 0; m < data.length; m++) {
      if (data[m].product_category === "Coktails") {
        if (data[m].product_category === "Coktails") {
          const cocktail = cocktailsTab.find((e) => e._id === data[m]._id);
          if (cocktail === undefined) {
            cocktailsTab.push(data[m]);
          }
        }
      }
    }
  }
  // Test Johanne cocktailsTab

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    // SELECTION BANNER
    <div className=" flex w-screen flex-col items-center justify-center scroll-smooth  bg-white">
      <div className="h-100 w-screnn fixed top-0 flex w-full items-center justify-center gap-2  bg-white">
        <div className="my-6 flex w-11/12 items-center justify-center gap-2   bg-white">
          <a
            className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
            onClick={handleClickSofts}
            href="#softs"
          >
            <img className="h-12 w-8" src="../src/assets/soft.png" alt="soft" />
            <p>Soft</p>
          </a>
          <a
            className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
            onClick={handleClickSnacks}
            href="#snacks"
          >
            <img
              className="h-12 w-8"
              src="../src/assets/HotDog.png"
              alt="snacks"
            />
            <p>Snacks</p>
          </a>
          <a
            className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
            onClick={handleClickAlcools}
            href="#alcools"
          >
            <img
              className="h-12 w-8"
              src="../src/assets/biere.png"
              alt="beer"
            />
            <p>Alcools</p>
          </a>
          <a
            className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
            onClick={handleClickCocktails}
            href="#cocktails"
          >
            <img
              className="h-12 w-8"
              src="../src/assets/Cocktail.png"
              alt="cocktail"
            />
            <p>Cocktails</p>
          </a>
        </div>
      </div>

      <section className="mb-24 mt-28 flex w-screen flex-col items-center">
        <div id="softs" className=" w-11/12">
          <div className="flex justify-center ">
            <div className="flex w-full justify-start ">
              <div className="my-6 flex items-center gap-2  font-bold">
                <p>Découvrez nos Softs !</p>
                <img src="../src/assets/Soft.png" alt="softs" />
              </div>
            </div>
          </div>

          {softsTab.map((item) => (
            <div
              className="flex  items-center justify-start border border-gray-300 bg-[#F3F3F3]"
              key={item._id}
            >
              <div className="w-1/5">
                <img
                  className="w-15 h-20 bg-[#F3F3F3]"
                  src={item.product_image.secure_url}
                  alt="product"
                  // Yohann code -----------------------------
                  onClick={() => {
                    console.log(item._id);
                    setOpenModal(true);
                    setProductID(item._id);
                  }}
                  // Yohann code -----------------------------
                />
              </div>
              <div className="w-4/5 pl-2">
                <p>{item.product_name}</p> <p>{item.product_price} €</p>
              </div>
              <div>
                {item.quantity ? (
                  <div className="flex w-24 items-center justify-center gap-2  p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickMinus(item)}
                    >
                      -
                    </button>
                    <p> {item.quantity}</p>
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className=" flex w-24 items-center justify-center gap-2  p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div id="snacks" className="w-11/12  ">
          <div className="flex justify-center ">
            <div className="flex w-full justify-start ">
              <div className="my-6 flex  items-center gap-2   font-bold">
                <p>Découvrez nos Snacks !</p>
                <img src="../src/assets/HotDog.png" alt="hotdog" />
              </div>
            </div>
          </div>
          {snacksTab.map((item) => (
            <div
              className="flex  items-center justify-start border border-gray-300 bg-[#F3F3F3]"
              key={item._id}
            >
              <div className="w-1/5">
                <img
                  className="w-15 h-20 bg-[#F3F3F3]"
                  src={item.product_image.secure_url}
                  alt="product"
                  // Yohann code -----------------------------
                  onClick={() => {
                    console.log(item._id);
                    setOpenModal(true);
                    setProductID(item._id);
                  }}
                  // Yohann code -----------------------------
                />
              </div>
              <div className="w-4/5 pl-2">
                <p>{item.product_name}</p> <p>{item.product_price} €</p>{" "}
              </div>
              <div>
                {item.quantity ? (
                  <div className="flex w-24 items-center justify-center gap-2  p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickMinus(item)}
                    >
                      -
                    </button>
                    <p> {item.quantity}</p>
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="flex w-24 items-center justify-center gap-2 p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div id="alcools" className="w-11/12">
          <div className="flex justify-center ">
            <div className="flex w-full justify-start ">
              <div className="my-6 flex items-center gap-2  font-bold">
                <p>Découvrez nos Alcools !</p>
                <img src="../src/assets/Biere.png" alt="alcools" />
              </div>
            </div>
          </div>
          {alcoolsTab.map((item) => (
            <div
              className="flex  items-center justify-start border border-gray-300 bg-[#F3F3F3]"
              key={item._id}
            >
              <div className="w-1/5">
                <img
                  className="w-15 h-20 bg-[#F3F3F3]"
                  src={item.product_image.secure_url}
                  alt="product"
                  // Yohann code -----------------------------
                  onClick={() => {
                    console.log(item._id);
                    setOpenModal(true);
                    setProductID(item._id);
                  }}
                  // Yohann code -----------------------------
                />
              </div>
              <div className="w-4/5 pl-2">
                <p>{item.product_name}</p> <p>{item.product_price} €</p>
              </div>
              <div>
                {item.quantity ? (
                  <div className="flex w-24 items-center justify-center gap-2  p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickMinus(item)}
                    >
                      -
                    </button>
                    <p> {item.quantity}</p>
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="flex w-24 items-center justify-center gap-2 p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div id="cocktails" className="w-11/12">
          <div className="flex justify-center ">
            <div className="flex w-full justify-start ">
              <div className="my-6 flex items-center gap-2  font-bold">
                <p>Découvrez nos Cocktails !</p>
                <img src="../src/assets/Cocktail.png" alt="cocktails" />
              </div>
            </div>
          </div>
          {cocktailsTab.map((item) => (
            <div
              className="flex  items-center justify-start border border-gray-300 bg-[#F3F3F3]"
              key={item._id}
            >
              <div className="w-1/5 pl-2">
                <img
                  className="w-15 h-20 bg-[#F3F3F3]"
                  src={item.product_image.secure_url}
                  alt="product"
                  // Yohann code -----------------------------
                  onClick={() => {
                    console.log(item._id);
                    setOpenModal(true);
                    setProductID(item._id);
                  }}
                  // Yohann code -----------------------------
                />
              </div>
              <div className="w-4/5">
                <p>{item.product_name}</p> <p>{item.product_price} €</p>
              </div>
              <div>
                {item.quantity ? (
                  <div className="flex w-24 items-center justify-center gap-2  p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickMinus(item)}
                    >
                      -
                    </button>
                    <p> {item.quantity}</p>
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="flex w-24 items-center justify-center gap-2 p-1.5">
                    <button
                      className="h-8 w-8 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 flex w-full justify-center  bg-white">
        <input
          className=" my-4 w-11/12 rounded  bg-black p-1.5 text-white"
          type="submit"
          value={`Voir le panier . ${total} €`}
          // Yohann code -----------------------------
          onClick={handleNavigate}
          // Yohann code -----------------------------
        />
      </div>

      {/* Yohann code ----------------------------- */}
      {openModal && <Modal setOpenModal={setOpenModal} productID={productID} />}
      {/* Yohann code ----------------------------- */}
    </div>
  );
};

export default Selection;

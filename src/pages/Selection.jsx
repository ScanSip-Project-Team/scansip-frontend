// Import Package
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Yohann code ----------------
//Import components
import Modal from "../Components/Modal";
// Yohann code ----------------

// Johanne code
// Import components
import Discover from "../components/Discover";

const Selection = ({ setCart, cart, setTotal, total }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("Softs");
  const [softs, setSofts] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [alcools, setAlcools] = useState([]);
  const [cocktails, setCocktails] = useState([]);
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
    // Yohann code ------------
    // Tableau d'objets softs
    console.log(softs);
    // Yohann code ------------
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
    // Yohann code ------------
    // Tableau d'objets snacks
    console.log(snacks);
    // Yohann code ------------
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
    // Yohann code ------------
    // Tableau d'objets alcools
    console.log(alcools);
    // Yohann code ------------
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
    // Yohann code ------------
    // Tableau d'objets coktails
    console.log(cocktails);
    // Yohann code ------------
  };

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
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="my-6 flex w-11/12 items-center justify-center gap-2 ">
        <div
          className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
          onClick={handleClickSofts}
        >
          <img className="h-12 w-8" src="../src/assets/soft.png" alt="soft" />
          <p>Soft</p>
        </div>
        <div
          className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
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
          className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
          onClick={handleClickAlcools}
        >
          <img className="h-12 w-8" src="../src/assets/biere.png" alt="beer" />
          <p>Alcools</p>
        </div>
        <div
          className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
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

      {category === "Softs" && softs.length !== 0
        ? softs.map((item) => (
            <div
              className="flex w-11/12 items-center justify-start border border-gray-300 bg-[#F3F3F3]"
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
              <div className="w-4/5">
                <p>{item.product_name}</p> <p>{item.product_price} €</p>
              </div>
              <div>
                {item.quantity ? (
                  <div className="flex items-center justify-center gap-2  p-1.5">
                    <button
                      className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickMinus(item)}
                    >
                      -
                    </button>
                    <p> {item.quantity}</p>
                    <button
                      className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="k flex items-center justify-center gap-2 p-1.5">
                    <button
                      className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                      onClick={() => handleClickPlus(item)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        : category === "Snacks" && snacks.length !== 0
          ? snacks.map((item) => (
              <div
                className="flex w-11/12 items-center justify-start border border-gray-300 bg-[#F3F3F3]"
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
                <div className="w-4/5">
                  <p>{item.product_name}</p> <p>{item.product_price} €</p>{" "}
                </div>
                <div>
                  {item.quantity ? (
                    <div className="flex items-center justify-center gap-2  p-1.5">
                      <button
                        className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                        onClick={() => handleClickMinus(item)}
                      >
                        -
                      </button>
                      <p> {item.quantity}</p>
                      <button
                        className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                        onClick={() => handleClickPlus(item)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <div className="k flex items-center justify-center gap-2 p-1.5">
                      <button
                        className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                        onClick={() => handleClickPlus(item)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          : category === "Alcools" && alcools.length !== 0
            ? alcools.map((item) => (
                <div
                  className="flex w-11/12 items-center justify-start border border-gray-300 bg-[#F3F3F3]"
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
                  <div className="w-4/5">
                    <p>{item.product_name}</p> <p>{item.product_price} €</p>
                  </div>
                  <div>
                    {item.quantity ? (
                      <div className="flex items-center justify-center gap-2  p-1.5">
                        <button
                          className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                          onClick={() => handleClickMinus(item)}
                        >
                          -
                        </button>
                        <p> {item.quantity}</p>
                        <button
                          className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                          onClick={() => handleClickPlus(item)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <div className="k flex items-center justify-center gap-2 p-1.5">
                        <button
                          className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                          onClick={() => handleClickPlus(item)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            : category === "Cocktails" && cocktails.length !== 0
              ? cocktails.map((item) => (
                  <div
                    className="flex w-11/12 items-center justify-start border border-gray-300 bg-[#F3F3F3]"
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
                    <div className="w-4/5">
                      <p>{item.product_name}</p> <p>{item.product_price} €</p>
                    </div>
                    <div>
                      {item.quantity ? (
                        <div className="flex items-center justify-center gap-2  p-1.5">
                          <button
                            className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                            onClick={() => handleClickMinus(item)}
                          >
                            -
                          </button>
                          <p> {item.quantity}</p>
                          <button
                            className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                            onClick={() => handleClickPlus(item)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <div className="k flex items-center justify-center gap-2 p-1.5">
                          <button
                            className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                            onClick={() => handleClickPlus(item)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              : softsTab.map((item) => (
                  <div
                    className="flex w-11/12 items-center justify-start border border-gray-300 bg-[#F3F3F3]"
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
                    <div className="w-4/5">
                      <p>{item.product_name}</p> <p>{item.product_price} €</p>
                    </div>
                    <div>
                      {item.quantity ? (
                        <div className="flex items-center justify-center gap-2  p-1.5">
                          <button
                            className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                            onClick={() => handleClickMinus(item)}
                          >
                            -
                          </button>
                          <p> {item.quantity}</p>
                          <button
                            className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                            onClick={() => handleClickPlus(item)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <div className="k flex items-center justify-center gap-2 p-1.5">
                          <button
                            className="h-10 w-10 rounded-full bg-[#E8E8E8]"
                            onClick={() => handleClickPlus(item)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

      <Discover
        category={category}
        cart={cart}
        snacksTab={snacksTab}
        handleClickMinus={handleClickMinus}
        handleClickPlus={handleClickPlus}
        softsTab={softsTab}
        alcoolsTab={alcoolsTab}
        cocktailsTab={cocktailsTab}
      />
      <input
        className="my-6 w-11/12 rounded bg-black p-1.5 text-white"
        type="submit"
        value={`Valider le panier . ${total} €`}
        // Yohann code -----------------------------
        onClick={handleNavigate}
        // Yohann code -----------------------------
      />
      {/* Yohann code ----------------------------- */}
      {openModal && <Modal setOpenModal={setOpenModal} productID={productID} />}
      {/* Yohann code ----------------------------- */}
    </div>
  );
};

export default Selection;

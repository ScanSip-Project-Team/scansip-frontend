// Import Package
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Yohann code ----------------
//Import components
import Modal from "../Components/Modal";
import FlashScreen from "./FlashScreen";
import ListProduct from "../components/ListProduct";
import CardCategory from "../components/CardCategory";
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

  if (!isLoading && data) {
    for (let m = 0; m < data.length; m++) {
      if (data[m].product_category === "Snacks") {
        const snack = snacksTab.find((e) => e._id === data[m]._id);
        if (snack === undefined) {
          snacksTab.push(data[m]);
        }
      } else if (data[m].product_category === "Soft") {
        const soft = softsTab.find((e) => e._id === data[m]._id);
        if (soft === undefined) {
          softsTab.push(data[m]);
        }
      } else if (data[m].product_category === "Alcools") {
        const alcool = alcoolsTab.find((e) => e._id === data[m]._id);
        if (alcool === undefined) {
          alcoolsTab.push(data[m]);
        }
      } else if (data[m].product_category === "Coktails") {
        const cocktail = cocktailsTab.find((e) => e._id === data[m]._id);
        if (cocktail === undefined) {
          cocktailsTab.push(data[m]);
        }
      }
    }
  }

  return isLoading ? (
    <FlashScreen />
  ) : (
    // SELECTION BANNER
    <div className=" flex w-screen flex-col items-center justify-center scroll-smooth  bg-white">
      <div className="h-100 w-screnn fixed top-0 flex w-full items-center justify-center gap-2  bg-white">
        <div className="my-6 flex w-11/12 items-center justify-center gap-2   bg-white">
          <CardCategory
            func={handleClickSofts}
            icon={"../src/assets/soft.png"}
            id={"softs"}
            title={"Softs"}
          />
          <CardCategory
            func={handleClickSnacks}
            icon={"../src/assets/HotDog.png"}
            id={"snacks"}
            title={"Snacks"}
          />
          <CardCategory
            func={handleClickAlcools}
            icon={"../src/assets/biere.png"}
            id={"alcools"}
            title={"Alcools"}
          />
          <CardCategory
            func={handleClickCocktails}
            icon={"../src/assets/Cocktail.png"}
            id={"cocktails"}
            title={"Cocktails"}
          />
        </div>
      </div>

      <section className="mb-24 mt-28 flex w-screen flex-col items-center">
        <ListProduct
          data={softsTab}
          setOpenModal={setOpenModal}
          setProductID={setProductID}
          cart={cart}
          setCart={setCart}
          setTotal={setTotal}
          total={total}
          id={"softs"}
          icon={"../src/assets/Soft.png"}
          title={"Softs"}
        />

        <ListProduct
          data={snacksTab}
          setOpenModal={setOpenModal}
          setProductID={setProductID}
          cart={cart}
          setCart={setCart}
          setTotal={setTotal}
          total={total}
          id={"snacks"}
          icon={"../src/assets/HotDog.png"}
          title={"Snacks"}
        />

        <ListProduct
          data={alcoolsTab}
          setOpenModal={setOpenModal}
          setProductID={setProductID}
          cart={cart}
          setCart={setCart}
          setTotal={setTotal}
          total={total}
          id={"alcools"}
          icon={"../src/assets/Biere.png"}
          title={"Alcools"}
        />

        <ListProduct
          data={cocktailsTab}
          setOpenModal={setOpenModal}
          setProductID={setProductID}
          cart={cart}
          setCart={setCart}
          setTotal={setTotal}
          total={total}
          id={"cocktails"}
          icon={"../src/assets/Cocktail.png"}
          title={"Cocktails "}
        />
      </section>

      <div className="fixed bottom-0 flex w-full justify-center  bg-white">
        <input
          className=" my-4 w-11/12 rounded  bg-black p-1.5 text-white"
          type="submit"
          value={`Voir le panier • ${total} €`}
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

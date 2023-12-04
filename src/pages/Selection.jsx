// Import Package
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Yohann code ----------------
//Import components
import Modal from "../Components/Modal";
import Button from "../components/Button";
import Loader from "../components/Loader";
import ListProduct from "../components/ListProduct";
import CardCategory from "../components/CardCategory";
// Yohann code ----------------
import baseApiURL from "../api";

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
    if (!total) {
      alert("Panier vide !");
    } else {
      navigate("/cart");
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
        const response = await axios.get(`${baseApiURL}/products`);
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
      } else if (data[m].product_category === "Softs") {
        const soft = softsTab.find((e) => e._id === data[m]._id);
        if (soft === undefined) {
          softsTab.push(data[m]);
        }
      } else if (data[m].product_category === "Alcools") {
        const alcool = alcoolsTab.find((e) => e._id === data[m]._id);
        if (alcool === undefined) {
          alcoolsTab.push(data[m]);
        }
      } else if (data[m].product_category === "Cocktails") {
        const cocktail = cocktailsTab.find((e) => e._id === data[m]._id);
        if (cocktail === undefined) {
          cocktailsTab.push(data[m]);
        }
      }
    }
  }

  return isLoading ? (
    <Loader />
  ) : (
    // SELECTION BANNER
    <div className=" flex w-screen flex-col items-center justify-center  scroll-smooth  bg-white">
      <div className="h-100 border-lightgrey fixed top-0 flex w-screen items-center justify-center  gap-2 border-b bg-white shadow-md">
        <div className="my-6 flex w-11/12 items-center justify-center gap-2 bg-white">
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
      <div className="border-lightgrey fixed  bottom-0 mx-[10px] w-screen border-t py-6">
        <Button
          text={`Voir le panier • ${total} €`}
          className={"btn-client w-available  mx-[10px] bg-black text-white"}
          func={handleNavigate}
        />
      </div>

      {/* Yohann code ----------------------------- */}
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          productID={productID}
          total={total}
          handleNavigate={handleNavigate}
        />
      )}
      {/* Yohann code ----------------------------- */}
    </div>
  );
};

export default Selection;

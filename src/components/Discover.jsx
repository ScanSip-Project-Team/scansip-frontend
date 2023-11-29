const Discover = ({
  category,
  cart,
  snacksTab,
  handleClickMinus,
  handleClickPlus,
  softsTab,
  alcoolsTab,
  cocktailsTab,
}) => {
  const alcoolInCart = cart.find((e) => e.product_category === "Alcools");
  console.log("alcoolInCart >>>", alcoolInCart);
  const cocktailInCart = cart.find((e) => e.product_category === "Coktails");
  console.log("cocktailInCart >>>", cocktailInCart);
  const snackInCart = cart.find((e) => e.product_category === "Snacks");
  console.log("snackInCart >>>", snackInCart);
  const softInCart = cart.find((e) => e.product_category === "Soft");
  console.log("softInCart >>>", softInCart);

  return (
    <div className="w-screen">
      <p>{category}</p>
      <p> Discover xxxx</p>

      {cart.length === 0 ? (
        <div>
          <div className="my-6  flex gap-2">
            <p>Découvrez nos snacks</p>
            <img src="../src/assets/HotDog.png" alt="hotdog" />
          </div>

          {snacksTab.map((item) => {
            return (
              <div
                className="flex w-full  items-center border border-gray-300 bg-[#F3F3F3]"
                key={item._id}
              >
                <div className="w-1/5">
                  <img
                    className="w-15 h-20  bg-[#F3F3F3]"
                    src={item.product_image.secure_url}
                    alt="product"
                  />
                </div>
                <div className="w-4/5 ">
                  <p>{item.product_name}</p>
                  <p>{item.product_price} €</p>
                </div>

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
            );
          })}
        </div>
      ) : alcoolInCart === undefined ? (
        alcoolsTab.map((item) => {
          return (
            <div
              className="flex w-full  items-center border border-gray-300 bg-[#F3F3F3]"
              key={item._id}
            >
              <div className="w-1/5">
                <img
                  className="w-15 h-20  bg-[#F3F3F3]"
                  src={item.product_image.secure_url}
                  alt="product"
                />
              </div>
              <div className="w-4/5 ">
                <p>{item.product_name}</p>
                <p>{item.product_price} €</p>
              </div>

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
          );
        })
      ) : cocktailInCart === undefined ? (
        cocktailsTab.map((item) => {
          return (
            <div
              className="flex w-full  items-center border border-gray-300 bg-[#F3F3F3]"
              key={item._id}
            >
              <div className="w-1/5">
                <img
                  className="w-15 h-20  bg-[#F3F3F3]"
                  src={item.product_image.secure_url}
                  alt="product"
                />
              </div>
              <div className="w-4/5 ">
                <p>{item.product_name}</p>
                <p>{item.product_price} €</p>
              </div>

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
          );
        })
      ) : softInCart === undefined ? (
        <p>Pas de softs dans le panier</p>
      ) : (
        <p>Cas non traité</p>
      )}
    </div>
  );
};

export default Discover;

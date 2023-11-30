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

  const cocktailInCart = cart.find((e) => e.product_category === "Coktails");

  const snackInCart = cart.find((e) => e.product_category === "Snacks");

  const softInCart = cart.find((e) => e.product_category === "Soft");

  return (
    <div className="w-screen">
      {cart.length === 0 && category !== "Snacks" ? (
        <div>
          <div className="flex justify-center">
            <div className="flex w-11/12 justify-start ">
              <div className="my-6 flex  items-center gap-2  p-1.5 font-bold">
                <p>Découvrez nos Snacks !</p>
                <img src="../src/assets/HotDog.png" alt="hotdog" />
              </div>
            </div>
          </div>

          {snacksTab.map((item) => {
            return (
              <div key={item._id} className="flex w-screen justify-center">
                <div className="flex w-11/12 items-center justify-center border border-gray-300 bg-[#F3F3F3]">
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
              </div>
            );
          })}
        </div>
      ) : alcoolInCart === undefined && category !== "Alcools" ? (
        <div>
          <div className="flex justify-center">
            <div className="flex w-11/12 justify-start ">
              <div className="my-6 flex items-center gap-2 p-1.5 font-bold">
                <p>Découvrez nos Alcools !</p>
                <img src="../src/assets/Biere.png" alt="alcools" />
              </div>
            </div>
          </div>
          {alcoolsTab.map((item) => {
            return (
              <div key={item._id} className="flex w-screen justify-center">
                <div className="flex w-11/12  items-center border border-gray-300 bg-[#F3F3F3]">
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
              </div>
            );
          })}
        </div>
      ) : cocktailInCart === undefined && category !== "Cocktails" ? (
        <div>
          <div className="flex justify-center">
            <div className="flex w-11/12 justify-start ">
              <div className="my-6 flex items-center gap-2 p-1.5 font-bold">
                <p>Découvrez nos Cocktails !</p>
                <img src="../src/assets/Cocktail.png" alt="cocktails" />
              </div>
            </div>
          </div>
          {cocktailsTab.map((item) => {
            return (
              <div key={item._id} className="flex w-screen justify-center">
                <div className="flex w-11/12  items-center border border-gray-300 bg-[#F3F3F3]">
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
              </div>
            );
          })}
        </div>
      ) : softInCart === undefined && category !== "Softs" ? (
        <div>
          <div className="flex justify-center">
            <div className="flex w-11/12 justify-start ">
              <div className="my-6 flex items-center gap-2 p-1.5 font-bold">
                <p>Découvrez nos Softs !</p>
                <img src="../src/assets/Soft.png" alt="softs" />
              </div>
            </div>
          </div>
          {softsTab.map((item) => {
            return (
              <div key={item._id} className="flex w-screen justify-center">
                <div className="flex w-11/12  items-center border border-gray-300 bg-[#F3F3F3]">
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
              </div>
            );
          })}
        </div>
      ) : snackInCart === undefined && category !== "Snacks" ? (
        <div>
          <div className="my-6 flex items-center gap-2 p-1.5 font-bold">
            <p>Découvrez nos Snacks !</p>
            <img src="../src/assets/HotDog.png" alt="snacks" />
          </div>
          {snacksTab.map((item) => {
            return (
              <div
                className="flex w-11/12  items-center border border-gray-300 bg-[#F3F3F3]"
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
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Discover;

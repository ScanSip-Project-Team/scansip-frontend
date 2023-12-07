// Import Package
import axios from "axios";
import { useEffect, useState } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

//Import Components
import Button from "../components/Button";
import baseApiURL from "../api";
import FirstLetterUpper from "../function/FirstLetterUpper";

const Modal = ({
  setOpenModal,
  productID,
  handleNavigate,
  total,
  openModal,
}) => {
  useLockBodyScroll();
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `${baseApiURL}/product-description/${productID}`,
        );
        setData(response.data);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [productID]);

  useEffect(() => {
    if (document) {
      document.body.style.overflow = "hidden";
    }
  }, [openModal]);
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };

  const nutritionalValues = [];

  if (data) {
    for (let k in data.nutritional_values) {
      nutritionalValues.push({
        type: k,
        value: data.nutritional_values[k],
      });
    }
  }

  return (
    <>
      <div className="absolute top-[0px]  z-10 m-auto h-[2000px] w-screen bg-slate-500 bg-opacity-25"></div>
      <div className="fixed top-0 z-20  h-screen">
        <div className={`flex h-full w-full flex-col  text-white `}>
          <div className="mt-14 flex h-available w-screen justify-center text-black">
            {data && (
              // <div className={`absolute left-0 top-[40px]  h-full w-full `}>

              <div className="z-10 flex h-fit w-5/6 flex-col justify-center rounded-lg bg-white pb-5  pl-5 pr-[10px]">
                <div className=" mt-1 flex justify-end">
                  <p
                    onClick={handleCloseModal}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white"
                  >
                    X
                  </p>
                </div>
                <div className="mb-2 flex items-center">
                  <div className="mr-2 w-14">
                    <img
                      src={data.product_image.secure_url}
                      className="w-3/14  object-cover"
                      alt={data.product_name}
                    />
                  </div>
                  <div>
                    <p className="title-product">{data.product_name}</p>
                    <p className="price-product">{data.product_price} €</p>
                  </div>
                </div>
                <p className="mb-2 font-bold">INGREDIENTS :</p>
                <div className="ml-2 flex w-11/12	">
                  <p className="mb-2 h-20 overflow-scroll">
                    {data.product_description}
                  </p>
                </div>
                <p className="font-bold">TABLEAU NUTRITIONNEL : </p>
                {nutritionalValues.map((elem) => {
                  return (
                    <div key={elem.type}>
                      <div
                        className="mb-2 flex justify-between rounded-md px-2"
                        style={{
                          backgroundColor:
                            elem.type === "sugar" ? "" : "#EFEFEF",
                          marginLeft: elem.type === "sugar" ? "10px" : "",
                        }}
                      >
                        <span>{FirstLetterUpper(elem.type)}</span>
                        <span className="pr-5">{elem.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* <div className="border-lightgrey  bottom-0 left-0 w-screen border-t bg-white py-6">
            <Button
              text={`Voir le panier • ${total} €`}
              className={
                "btn-client mx-[10px]  w-available bg-black text-white"
              }
              func={handleNavigate}
            />
          </div> */}
        </div>
      </div>
    </>

    // <>
    //   <div className="absolute left-0 top-0 flex h-screen w-screen justify-center bg-slate-500 bg-opacity-25 align-baseline">
    //     {data && (
    //       <div className={` absolute left-0 top-[40px]  h-full w-full `}>
    //         <div className="z-10 m-4 flex h-fit flex-col justify-center rounded-lg bg-white pb-5 pl-5 pr-5">
    //           <div className="mr-1 flex justify-end">
    //             <p onClick={handleCloseModal}>X</p>
    //           </div>
    //           <div className="mb-2 flex items-center">
    //             <div className="mr-2 w-14">
    //               <img
    //                 src={data.product_image.secure_url}
    //                 className="w-3/14  object-cover"
    //                 alt={data.product_name}
    //               />
    //             </div>
    //             <div>
    //               <p className="title-product">{data.product_name}</p>
    //               <p className="price-product">{data.product_price} €</p>
    //             </div>
    //           </div>
    //           <p className="mb-2 font-bold">INGREDIENTS :</p>
    //           <div className="ml-2 flex w-11/12	">
    //             <p className="mb-2">{data.product_description}</p>
    //           </div>
    //           <p className="font-bold">TABLEAU NUTRITIONNEL : </p>
    //           {nutritionalValues.map((elem) => {
    //
    //             return (
    //               <div key={elem.type}>
    //                 <div
    //                   className="mb-2 flex justify-between rounded-md"
    //                   style={{
    //                     backgroundColor: elem.type === "sugar" ? "" : "#EFEFEF",
    //                     marginLeft: elem.type === "sugar" ? "10px" : "",
    //                   }}
    //                 >
    //                   <span>{elem.type}</span>
    //                   <span className="pr-5">{elem.value}</span>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </div>

    //         <div className="border-lightgrey fixed bottom-0 left-0 w-screen border-t bg-white py-6">
    //           <Button
    //             text={`Voir le panier • ${total} €`}
    //             className={
    //               "btn-client w-available  mx-[10px] bg-black text-white"
    //             }
    //             func={handleNavigate}
    //           />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </>
  );
};

export default Modal;

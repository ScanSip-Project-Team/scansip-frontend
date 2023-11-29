// Import Package
import axios from "axios";
import { useEffect, useState } from "react";

const Modal = ({ setOpenModal, productID }) => {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3000/product-description/${productID}`,
        );
        setData(response.data);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [productID]);

  const handleCloseModal = () => {
    setOpenModal(false);
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
    <div className=" absolute left-0 top-0 h-screen w-screen bg-slate-500 bg-opacity-25">
      {data && (
        <div className="z-10 m-4 rounded-lg bg-white pb-5 pl-5">
          <div className="mr-1 flex justify-end">
            <p onClick={handleCloseModal}>X</p>
          </div>
          <div className="mb-2 flex items-center">
            <div className="mr-2 w-14">
              <img
                src={data.product_image.secure_url}
                className="w-3/14  object-cover"
              />
            </div>
            <div>
              <p>{data.product_name}</p>
              <p>{data.product_price} €</p>
            </div>
          </div>
          <p className="mb-2 font-bold">INGREDIENTS :</p>
          <div className="ml-2 flex w-11/12	">
            <p className="mb-2">{data.product_description}</p>
          </div>
          <p className="font-bold">TABLEAU NUTRITIONNEL : </p>
          {nutritionalValues.map((elem) => {
            // console.log(elem);
            return (
              <div key={elem.type} className="flex justify-between">
                <span>{elem.type}</span>
                <span className="pr-5">{elem.value}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Modal;

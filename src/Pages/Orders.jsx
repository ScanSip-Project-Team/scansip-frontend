import { useEffect, useState } from "react";
import axios from "axios";

//Import components

//Import Assets

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/orders`);
        console.log("response ==> ", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container m-auto h-screen">
      <h1 className="border-b border-solid border-black p-6 text-3xl">
        Service 🔥
      </h1>

      <div className="flex h-full  pt-8">
        {/* Column ORDERS IN PROGRESS */}

        <div className="h-full w-2/3 border-r-2 p-3">
          <h2 className="mb-4 font-medium">Commandes en cours :</h2>

          {data.map((element) => {
            return (
              <div key={element.id}>
                <p>{element.order_number}</p>
              </div>
              //   <img
              //     key={element.id}
              //     src={element.product_list[0].product.product_image.secure_url}
              //     alt="image"
              //   />
            );
          })}
          <div className="flex gap-5 rounded bg-slate-200  p-4 ">
            {/* col Order */}
            <div className="flex h-3/6 w-2/3 flex-col gap-5 ">
              <h3 className="font-semibold">Commande n° : 001</h3>
              {/* Product*/}
              <div className="flex items-center rounded bg-white p-3">
                <img
                  className="w-16 pr-2"
                  src="https://res.cloudinary.com/dt2ah1ori/image/upload/v1701081469/samples/food/Products/cocacola_ktgshh.jpg"
                  alt=""
                />
                <div className="flex flex-1 flex-col">
                  <span>Coca cola 33cl</span>
                  <span>5.00 €</span>
                </div>
                <span className="h-10 w-10 rounded-full bg-gray-400 p-2 text-center font-semibold">
                  2
                </span>
              </div>
              {/* Product*/}
              <div className="flex items-center rounded bg-white p-3">
                <img
                  className="w-16 pr-2"
                  src="https://res.cloudinary.com/dt2ah1ori/image/upload/v1701081469/samples/food/Products/cocacola_ktgshh.jpg"
                  alt=""
                />
                <div className="flex flex-1 flex-col">
                  <span>Coca cola 33cl</span>
                  <span>5.00 €</span>
                </div>
                <span className="h-10 w-10 rounded-full bg-gray-400 p-2 text-center font-semibold">
                  2
                </span>
              </div>
            </div>
            {/* column sumup */}
            <div className="flex h-3/6 w-1/3 flex-col gap-6 ">
              <h3>Récapitulatif :</h3>
              <div className="flex flex-col gap-2">
                <span className="text-sm ">
                  Nombres d'article : <span className="font-semibold">3</span>
                </span>
                <span className="text-sm ">
                  Statut : <span className="font-semibold">payée </span>
                </span>
                <span className="text-sm ">
                  Nom (carte): <span className="font-semibold">Tiktac </span>
                </span>
                <span className="mb-4 text-sm ">
                  Prix : <span className="font-semibold">17,5 €</span>
                </span>
                <button className="btn-primary">Commande servie</button>
              </div>
            </div>
          </div>
        </div>
        {/* Column ORDERS DELIVERED */}
        <div className="h-full w-1/3 p-3">
          <h2 className="mb-4 font-medium">Commandes servies :</h2>

          {/* col order */}
          <div className="flex flex-col gap-5  rounded bg-slate-200 p-4">
            <h3 className="font-semibold">Commande n° : 001</h3>
            {/* Product*/}
            <div className="flex items-center rounded bg-white p-3">
              <img
                className="w-16 pr-2"
                src="https://res.cloudinary.com/dt2ah1ori/image/upload/v1701081469/samples/food/Products/cocacola_ktgshh.jpg"
                alt=""
              />
              <div className="flex flex-1 flex-col">
                <span>Coca cola 33cl</span>
                <span>5.00 €</span>
              </div>
              <span className="h-10 w-10 rounded-full bg-gray-400 p-2 text-center font-semibold">
                2
              </span>
            </div>
            {/* SUMUP*/}
            <div className="flex h-3/6 flex-col gap-6 ">
              <h3>Récapitulatif :</h3>
              <div className="flex flex-col gap-2">
                <span className="text-sm ">
                  Nombres d'article : <span className="font-semibold">3</span>
                </span>
                <span className="text-sm ">
                  Statut : <span className="font-semibold">payée </span>
                </span>
                <span className="text-sm ">
                  Nom (carte): <span className="font-semibold">Tiktac </span>
                </span>
                <span className="mb-4 text-sm ">
                  Prix : <span className="font-semibold">17,5 €</span>
                </span>
                <button className="btn-primary m-auto">
                  Remettre en service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Orders;

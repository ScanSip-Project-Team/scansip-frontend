//Import Packages
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import { Toaster } from "sonner";
import { toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";
import baseApiURL from "../api";

//Import Components
import Header from "../components/HeaderNav/Header";
import Loader from "../components/Loader";
import OrderComponentHistory from "../components/OrderComponentHistory";
import HeaderMobile from "../components/HeaderNav/HeaderMobile";
import { RefreshComponent } from "../utils/RefreshComponent";

const AdminHistory = ({ adminToken, setAdminToken }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  // const [refresh, setRefresh] = useState(false);
  // const [triggerToast, setTriggerToast] = useState(false);
  const navigate = useNavigate();

  //run the toast message et set the trigger state false to reinitiate the toastState
  // const triggerToastFunc = () => {
  //   toast((t) => (
  //     <span>
  //       Une nouvelle commande a été enregistrée
  //       <button
  //         className="rounded-md bg-green-500 p-2 text-center text-white"
  //         onClick={() => toast.dismiss(t.id)}
  //       >
  //         OK
  //       </button>
  //     </span>
  //   ));
  //   setTriggerToast(false);
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseApiURL}/orders-history`);

        //if response.data il bigger thant data it means that we have a new order
        //if so, we trigger a message toast for the waiter
        if (data && data.count < response.data.count) {
          const toastId = toast("Une nouvelle commande a été enregistrée");
          toast.dismiss(toastId);
        }
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (!adminToken) {
      if (Cookies.get("scanSipToken")) {
        setAdminToken(Cookies.get("scanSipToken"));
      } else {
        navigate("/admin/signin");
      }
    } else {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, adminToken]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {isLoading === false && <RefreshComponent setCounter={setCounter} />}
      <Header adminToken={adminToken} setAdminToken={setAdminToken} />
      <HeaderMobile adminToken={adminToken} setAdminToken={setAdminToken} />
      <div className="container m-auto h-screen">
        <div>
          <Toaster />
        </div>

        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Historique des commandes
          <span className="primary-color">({data.count})</span>
        </h1>

        <div className="p-6">
          {data.orders.map((order) => {
            return <OrderComponentHistory key={order._id} element={order} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AdminHistory;

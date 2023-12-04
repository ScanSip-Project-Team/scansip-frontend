// Import Package
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import Loader from "../components/Loader";

import baseApiURL from "../api";

const Billing = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState();

  const [delay, setDelay] = useState(1);

  const navigate = useNavigate();

  let order_id = useParams();

  order_id = order_id.id;

  useEffect(() => {
    //   // const fetchDelay = async () => {
    //   //   const { data } = await axios.get("http://localhost:3000/delay");
    //   //   setDelay(data.minutes_delay);
    //   // };
    //   // fetchDelay();

    const fetchData = async () => {
      const response = await axios.get(`${baseApiURL}/orders/${order_id}`);
      // console.log(response.data);
      setData(response.data);
      setTotal(response.data.total_price);
      setIsLoading(false);
      if (total === 0) {
        navigate("/home");
      }
    };
    fetchData();
  }, [total]);

  console.log(data);

  // fonction pour le pdf
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    // Résolution
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // Taille
      const pdf = new jsPDF("p", "mm", "a6", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      // Parametres positionnement image
      const widthRatio = pdfWidth / imgWidth;
      const heightRatio = pdfHeight / imgHeight;
      const ratio = Math.min(widthRatio, heightRatio);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      const zoomFactor = 1.0;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio * zoomFactor,
        imgHeight * ratio * zoomFactor,
      );
      pdf.save("bill.pdf");
    });
  };
  // fonction pour le pdf

  return isLoading && !total ? (
    // <p>Loading page...</p>
    <Loader />
  ) : (
    <section ref={pdfRef}>
      <div className="bg-greenScanSip relative mb-3 flex p-4 text-white">
        <div className="w-40">
          <p className="mb-3">Merci d'avoir passé commande !</p>
          <p>N° Commande : {data.order_number} </p>
          <p>Temps d'attente : {delay} minutes</p>
        </div>
        <div className="absolute bottom-0 right-3 flex items-end ">
          <img
            src="/src/assets/black-soft.png"
            alt="Soft black drink"
            className="h-10 w-7"
          />
          <img
            src="/src/assets/Biere.png"
            alt="Beer"
            className="h-15 relative right-3 w-10"
          />
        </div>
      </div>

      <div>
        <div className="mb-2 ml-5 mr-5 flex justify-between">
          <span className="font-bold">Total </span>
          <span>{total}€</span>
        </div>

        <div className="mb-2 ml-3 mr-3 flex justify-center border border-l-0 border-r-0">
          <p className="font-bold">Détail de votre facture</p>
        </div>

        <div className="mb-5">
          <div className="ml-5 mr-5">
            <div className="flex flex-col">
              {data.product_list.map((elem) => {
                // console.log(elem);
                return (
                  <div key={elem.product._id} className="flex justify-between">
                    <span>
                      {elem.product.product_name} x{elem.quantity_cart}
                    </span>
                    <span>{elem.product.product_price} €</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-2 flex justify-center text-white ">
          <button
            className="rounded-lg bg-black p-2"
            onClick={downloadPDF}
            data-html2canvas-ignore="true"
          >
            Télécharger la facture en PDF
          </button>
        </div>

        <div className="mb-2 ml-3 mr-3 flex justify-center border border-l-0 border-r-0">
          <p className="font-bold ">Paiement</p>
        </div>

        <div className="mb-5 ml-5 mr-5 border-b">
          <p className="mb-2 text-sm">
            <span className="font-bold">
              Un paiement de {total}€ a été éffectué avec succès&nbsp;
            </span>
            Ce paiement devrait bientôt apparaître sur votre relevé bancaire
          </p>
        </div>

        <div
          className="flex justify-center text-white "
          data-html2canvas-ignore="true"
        >
          <button
            className="ml-5 mr-5 w-screen rounded-lg bg-black p-2"
            onClick={() => {
              navigate("/home");
            }}
          >
            Retourner à l'accueil
          </button>
        </div>
      </div>
    </section>
  );
};

export default Billing;

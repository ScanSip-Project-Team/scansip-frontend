// Import Package
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Billing = ({ cart, total }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (total === 0) {
      navigate("/home");
    }
  }, [total]);

  console.log(cart);

  // fonction pour le pdf
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const widthRatio = pdfWidth / imgWidth;
      const heightRatio = pdfHeight / imgHeight;
      const ratio = Math.min(widthRatio, heightRatio);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
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

  return (
    <section ref={pdfRef}>
      <div className="relative mb-3 flex bg-greenScanSip p-4 text-white">
        <div className="w-40">
          <p className="mb-3">Merci d'avoir passé commande !</p>
          <p>N° Commande :</p>
          <p>Temps d'attente : </p>
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
            {cart.map((elem) => {
              console.log(elem);
              return (
                <div key={elem._id} className="flex justify-between">
                  <span>
                    {elem.product_name} x{elem.quantity}
                  </span>
                  <span>{elem.product_price} €</span>
                </div>
              );
            })}
            {/* <span>Nom de produit x quantité</span>
            <span>prix + €</span> */}
          </div>
        </div>

        <div className="mb-2 flex justify-center text-white ">
          <button className="rounded-lg bg-black p-2" onClick={downloadPDF}>
            Télécharger la facture en PDF
          </button>
        </div>

        <div className="mb-2 ml-3 mr-3 flex justify-center border border-l-0 border-r-0">
          <p className="font-bold">Détail de votre facture</p>
        </div>

        <div className="mb-5 ml-5 mr-5 border-b">
          <p className="mb-2 text-sm">
            <span className="font-bold">
              Un paiement de {total}€ a été éffectué avec succès&nbsp;
            </span>
            sur votre moyen de paiement : Carte bancaire (**** **** **** 3215 )
            Il devrait bientôt apparaître sur votre relevé bancaire
          </p>
        </div>

        <div className="flex justify-center text-white ">
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

// Créer un formulaire avec des states qui seront égales à la somme totale du panier

const Billing = () => {
  return (
    <section>
      <div className="relative mb-3 flex bg-greenScanSip p-4 text-white">
        <div className="w-40">
          <p className="mb-3">Merci d'avoir passé commande !</p>
          <p>N° Commande :</p>
          <p>Temps d'attente : </p>
        </div>
        <div className="absolute bottom-0 right-3 flex items-end ">
          <img
            src="./src/assets/black-soft.png"
            alt="Beer"
            className="h-10 w-7"
          />
          <img
            src="./src/assets/Biere.png"
            alt="Soft black drink"
            className="h-15 relative right-3 w-10"
          />
        </div>
      </div>

      <div>
        <div className="mb-2 ml-5 mr-5 flex justify-between">
          <span className="font-bold">Total</span>
          <span>€</span>
        </div>
        <div className="mb-2 ml-3 mr-3 flex justify-center border border-l-0 border-r-0">
          <p className="font-bold">Détail de votre facture</p>
        </div>
        <div className="mb-5">
          <div className="ml-5 mr-5 flex justify-between">
            <span>Nom de produit x quantité</span>
            <span>prix + €</span>
          </div>
          <div className="ml-5 mr-5 flex justify-between">
            <span>Nom de produit x quantité</span>
            <span>prix + €</span>
          </div>
          <div className="ml-5 mr-5 flex justify-between">
            <span>Nom de produit x quantité</span>
            <span>prix + €</span>
          </div>
          <div className="ml-5 mr-5 flex justify-between">
            <span>Nom de produit x quantité</span>
            <span>prix + €</span>
          </div>
          <div className="ml-5 mr-5 flex justify-between">
            <span>Nom de produit x quantité</span>
            <span>prix + €</span>
          </div>
          <div className="ml-5 mr-5 flex justify-between">
            <span>Nom de produit x quantité</span>
            <span>prix + €</span>
          </div>
        </div>
        <div className="mb-2 flex justify-center text-white ">
          <button className="rounded-lg bg-black p-2">
            Télécharger la facture en PDF
          </button>
        </div>
        <div className="mb-2 ml-3 mr-3 flex justify-center border border-l-0 border-r-0">
          <p className="font-bold">Détail de votre facture</p>
        </div>
        <div className="mb-5 ml-5 mr-5 border-b">
          <p className="mb-2 text-sm">
            <span className="font-bold">
              Un paiement de € a été éffectué avec succès&nbsp;
            </span>
            sur votre moyen de paiement : Carte bancaire (**** **** **** 3215 )
            Il devrait bientôt apparaître sur votre relevé bancaire
          </p>
        </div>
        <div className="flex justify-center text-white ">
          <button className="ml-5 mr-5 w-screen rounded-lg bg-black p-2">
            Retourner à l'acceuil
          </button>
        </div>
      </div>
    </section>
  );
};

export default Billing;

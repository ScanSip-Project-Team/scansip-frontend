import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Selection = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("Softs")
  const [softs, setSofts] = useState([])
  const [snacks, setSnacks] = useState([])
  const [alcools, setAlcools] = useState([])
  const [cocktails, setCocktails] = useState([])


const handleClickSofts =()=> {
    setCategory("Softs");
    const softsCopy = [...softs];
    // on parcourt le tableau data et on cherche les produits dont la catégory est Soft
    for (let i=0; i<data.length; i++) {
        if (data[i].product_category === "Soft") {
            console.log("data[i].product_category >>>", data[i].product_category)
            console.log("data[i].product._id >>>>", data[i]._id);
        // on veut ensuite savoir si l'id de ce produit est déjà dans le tableau soft
        const soft = softs.find((e)=> e._id === data[i]._id);
        console.log("soft >>>" , soft);
        if (soft === undefined) {softsCopy.push(data[i])}
            
            console.log("softsCopy>>>>",softsCopy);
        }
    }
    setSofts(softsCopy)
    console.log("softs >>>>", softs)
}

const handleClickSnacks =()=> {
    setCategory("Snacks");
    const snacksCopy = [...snacks];
    // on parcourt le tableau data et on cherche les produits dont la catégory est Soft
    for (let j=0; j<data.length; j++) {
        if (data[j].product_category === "Snacks") {
            console.log("data[j].product_category >>>", data[j].product_category)
            console.log("data[j].product._id >>>>", data[j]._id);
        // on veut ensuite savoir si l'id de ce produit est déjà dans le tableau soft
        const snack = snacks.find((e)=> e._id === data[j]._id);
        console.log("snack >>>" , snack);
        if (snack === undefined) {snacksCopy.push(data[j])}
            
            console.log("snacksCopy>>>>",snacksCopy);
        }
    }
    setSnacks(snacksCopy)
    console.log("snacks >>>>", snacks)
}

const handleClickAlcools =()=> {
    setCategory("Alcools");
    const alcoolsCopy = [...alcools];
    // on parcourt le tableau data et on cherche les produits dont la catégory est Soft
    for (let k=0; k<data.length; k++) {
        if (data[k].product_category === "Alcools") {
            console.log("data[k].product_category >>>", data[k].product_category)
            console.log("data[k].product._id >>>>", data[k]._id);
        // on veut ensuite savoir si l'id de ce produit est déjà dans le tableau soft
        const alcool = alcools.find((e)=> e._id === data[k]._id);
        console.log("alcool >>>" , alcool);
        if (alcool === undefined) {alcoolsCopy.push(data[k])}
            
            console.log("alcoolsCopy>>>>",alcoolsCopy);
        }
    }
    setAlcools(alcoolsCopy)
    console.log("alcools >>>>", alcools)
}

const handleClickCocktails =()=> {
    setCategory("Cocktails");
    const cocktailsCopy = [...cocktails];
    // on parcourt le tableau data et on cherche les produits dont la catégory est Soft
    for (let l=0; l<data.length; l++) {
        if (data[l].product_category === "Coktails") {
            console.log("data[l].product_category >>>", data[l].product_category)
            console.log("data[l].product._id >>>>", data[l]._id);
        // on veut ensuite savoir si l'id de ce produit est déjà dans le tableau soft
        const cocktail = cocktails.find((e)=> e._id === data[l]._id);
        console.log("cocktail >>>" , cocktail);
        if (cocktail === undefined) {cocktailsCopy.push(data[l])}
            
            console.log("cocktailsCopy>>>>",cocktailsCopy);
        }
    }
    setCocktails(cocktailsCopy)
    console.log("cocktails >>>>", cocktails)
}



     
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--scansip-backend--jswmm7jk2mlr.code.run/products"
        );
        console.log("response.data >>>>", response.data);
        setData(response.data);
        setIsLoading(false);
    
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  

    return isLoading ? <p>Loading...</p> : (<div className="w-screen flex justify-center items-center flex-col">
      
       
        
       

        <div 
        className="flex items-center justify-center gap-2 w-11/12 border-black border-2 my-6">
            <div 
            className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
            onClick={handleClickSofts}>
                <img className="h-12 w-8"src="../src/assets/soft.png" alt="soft" />
                
                <p>Soft</p>
            </div>
            <div 
            className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
            onClick={handleClickSnacks}>
            <img className="h-12 w-8"src="../src/assets/HotDog.png" alt="snacks" />
                <p>Snacks</p>
            </div>
            <div 
            className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
            onClick={handleClickAlcools}>
            <img className="h-12 w-8"src="../src/assets/biere.png" alt="beer" />
            <p>Alcools</p>
            </div>
            <div 
            className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
            onClick={handleClickCocktails}>
            <img className="h-12 w-8"src="../src/assets/Cocktail.png" alt="cocktail" />
            <p>Cocktails</p>
            </div>
        </div>

        

     
{category === "Softs" && softs.length !==0 ?  softs.map((item)=> {
        return <div  className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full" key={item._id}> <img className="w-15 h-20 bg-[#F3F3F3]"src={item.product_image.secure_url} alt="product"/><div><p>{item.product_name}</p> <p>{item.product_price} €</p></div></div>
       }) : category === "Snacks" && snacks.length !== 0 ?  snacks.map((item)=> {
        return <div className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full" key={item._id}> <img className="w-15 h-20 bg-[#F3F3F3]"src={item.product_image.secure_url} alt="product"/> <div><p>{item.product_name}</p> <p>{item.product_price} €</p> </div> </div>
       }): category === "Alcools" && alcools.length !==0 ? alcools.map((item)=> {
        return <div className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full" key={item._id}> <img className="w-15 h-20 bg-[#F3F3F3]"src={item.product_image.secure_url} alt="product"/> <div><p>{item.product_name}</p> <p>{item.product_price} €</p> </div> </div>
       }) : category === "Cocktails" && cocktails.length !==0 ? cocktails.map((item)=> {
        return <div className="flex justify-start items-center bg-[#F3F3F3] border-gray-300 border w-full" key={item._id}> <img className="w-15 h-20 bg-[#F3F3F3]"src={item.product_image.secure_url} alt="product"/><div> <p>{item.product_name}</p> <p>{item.product_price} €</p></div></div>
       }) : <p>Sélectionner une catégorie</p>
       }

       
      

       
        
        
        <input className="w-11/12 bg-black text-white p-1.5 my-6"
        type="submit"
        value="Valider le panier" />
    </div>)
};

export default Selection;

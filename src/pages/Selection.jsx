import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Selection = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState()
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
        if (data[l].product_category === "Cocktails") {
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
        

         
        

         // to update state snacks
        //  const snacksCopy = [...snacks];
        //  for (let j=0; j<data.length; j++) {
        //      if (data[j].product_category === "Snacks") {
        //          console.log("data[j].product_category >>>", data[j].product_category)
        //          snacksCopy.push(data[j])
        //          console.log("snacksCopy>>>>",snacksCopy);
        //      }
        //  }
        //  setSnacks(snacksCopy)
        //  console.log("snacks >>>>", snacks)

          // to update state alcools
        //   const alcoolsCopy = [...alcools];
        //   for (let k=0; k<data.length; k++) {
        //       if (data[k].product_category === "Snacks") {
        //           console.log("data[k].product_category >>>", data[k].product_category)
        //           alcoolsCopy.push(data[k])
        //           console.log("alcoolsCopy>>>>",alcoolsCopy);
        //       }
        //   }
        //   setAlcools(alcoolsCopy)
        //   console.log("alcools >>>>", alcools)


         
    
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  

    return isLoading ? <p>Loading...</p> : (<div className="w-screen flex justify-center items-center flex-col">
      
       
        
        {/* {data.map((item)=> {
            return <div key={item._id} className="justify-center inline-flex"> 
            <p>{item.product_category}</p>
            
            </div>
        })} */}

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

        

        {/* {softs.map((item)=> {
            return <p key={item._id}> {item.product_name}</p>
        })} */}

        {/* {category === "Softs" ? softs[0].product_name : <p>Cas non traité</p>} */}
        
        <p> Category : {category}</p>
        <input 
        type="submit"
        value="Valider le panier" />
    </div>)
};

export default Selection;

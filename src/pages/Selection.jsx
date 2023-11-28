// Import Package
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Selection = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState()
  const [softs, setSofts] = useState([])
//   const [snacks, setSnacks] = useState([])
//   const [alcools, setAlcools] = useState([])
//   const [cocktails, setCocktails] = useState([])


     
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--scansip-backend--jswmm7jk2mlr.code.run/products"
        );
        // console.log("response.data >>>>", response.data);
        setData(response.data);
        setIsLoading(false);

         // to update state softs
         const softsCopy = [...softs];
         for (let i=0; i<data.length; i++) {
             if (data[i].product_category === "Soft") {
                 console.log("data[i].product_category >>>", data[i].product_category)
                 softsCopy.push(data[i])
                 console.log("softsCopy>>>>",softsCopy);
             }
         }
         setSofts(softsCopy)
         console.log("softs >>>>", softs)
    
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
            onClick={()=> {
                setCategory("Softs")
            }}>
                <img className="h-12 w-8"src="../src/assets/soft.png" alt="soft" />
                
                <p>Soft</p>
            </div>
            <div 
            className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
            onClick={()=> {setCategory("Snacks")}}>
            <img className="h-12 w-8"src="../src/assets/HotDog.png" alt="snacks" />
                <p>Snacks</p>
            </div>
            <div 
            className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
            onClick={()=> setCategory("Alcools")}>
            <img className="h-12 w-8"src="../src/assets/biere.png" alt="beer" />
            <p>Alcools</p>
            </div>
            <div 
            className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5"
            onClick={()=> {setCategory("Cocktails")}}>
            <img className="h-12 w-8"src="../src/assets/Cocktail.png" alt="cocktail" />
            <p>Cocktails</p>
            </div>
        </div>


        <div className="flex-parent"></div>

        

        {/* {softs.map((item)=> {
            return <p key={item._id}> {item.product_name}</p>
        })} */}

        {/* {category === "Softs" ? softs[0].product_name : <p>Cas non traité</p>} */}
        
        <p> Category : {category}</p>

        <input 
        type="submit"
        value="Valider le panier" />
        <Link to={"/products"}>go to products (yohann)</Link>
    </div>)

};

export default Selection;



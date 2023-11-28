// Import Package
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Selection = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--scansip-backend--jswmm7jk2mlr.code.run/products"
        );
        // console.log("response.data >>>>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    return isLoading ? <p>Loading...</p> : (<div className="w-screen flex justify-center items-center flex-col">
      
      
        {/* {data.map((item)=> {
            return <div key={item._id} className="justify-center inline-flex"> 
            <p>{item.product_category}</p>
            
            </div>
        })} */}

        <div className="flex items-center justify-center gap-2 w-11/12 border-black border-2 my-6">
            <div className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5">
                <img className="h-12 w-8"src="../src/assets/soft.png" alt="soft" />
                
                <p>Soft</p>
            </div>
            <div className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5">
            <img className="h-12 w-8"src="../src/assets/HotDog.png" alt="snacks" />
                <p>Snacks</p>
            </div>
            <div className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5">
            <img className="h-12 w-8"src="../src/assets/biere.png" alt="beer" />
            <p>Alcools</p>
            </div>
            <div className="flex flex-col h-70 w-1/4 bg-[#F3F3F3] items-center rounded p-1.5">
            <img className="h-12 w-8"src="../src/assets/Cocktail.png" alt="cocktail" />
            <p>Cocktails</p>
            </div>
        </div>

        <div className="flex-parent"></div>
        <input 
        type="submit"
        value="Valider le panier" />
        <Link to={"/products"}>go to products (yohann)</Link>
    </div>)

};

export default Selection;



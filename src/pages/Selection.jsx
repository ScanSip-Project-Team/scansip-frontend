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
        console.log("response.data >>>>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    return isLoading ? <p>Loading...</p> : (<div>
        <p>Page Selection</p>
        <p>Just another line</p>
        
        {data.map((item)=> {
            return <div key={item._id}> 
            <p>{item.product_name}</p></div>
        })}
        <div className="flex-parent"></div>
        <input 
        type="submit"
        value="Valider le panier" />
    </div>)
};

export default Selection;

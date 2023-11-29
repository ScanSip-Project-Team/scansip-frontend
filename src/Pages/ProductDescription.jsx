// // Import Package
// import { useEffect, useState } from "react";
// import axios from "axios";

// // Components
// import Modal from "../Components/Modal";

// const ProductDescription = () => {
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   const [openModal, setOpenModal] = useState(false);
//   const [productID, setProductID] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get("http://localhost:3000/products");
//       // console.log(response.data);
//       setData(response.data);
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);

//   return isLoading ? (
//     <p>Loading page</p>
//   ) : (
//     <section className="flex h-screen w-screen flex-col items-center bg-red-700">
//       {data.map((elem) => {
//         //  console.log(elem);
//         return (
//           <div
//             key={elem._id}
//             onClick={() => {
//               setOpenModal(true);
//               setProductID(elem._id);
//             }}
//           >
//             <p>{elem.product_name}</p>
//           </div>
//         );
//       })}

//       {openModal && <Modal setOpenModal={setOpenModal} productID={productID} />}
//     </section>
//   );
// };

// export default ProductDescription;

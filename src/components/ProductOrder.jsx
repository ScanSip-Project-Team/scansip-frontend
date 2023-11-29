const ProductOrder = ({ product }) => {
  return (
    <div
      key={product.product._id}
      className="flex items-center rounded bg-white p-3"
    >
      <img
        className="w-16 pr-2"
        src={product.product.product_image.secure_url}
        alt=""
      />
      <div className="flex flex-1 flex-col">
        <span>{product.product.product_name}</span>
        <span>{product.product.product_price.toFixed(2)} €</span>
      </div>
      <span className="h-10 w-10 rounded-full bg-gray-400 p-2 text-center font-semibold">
        {product.quantity_cart}
      </span>
    </div>
  );
};
export default ProductOrder;

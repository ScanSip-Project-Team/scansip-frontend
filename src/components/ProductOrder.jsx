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
      <div className="mr-1 flex flex-1 flex-col">
        <span className="md:text-sm">{product.product.product_name}</span>
        <span className="md:text-sm">
          {product.product.product_price.toFixed(2)} €
        </span>
      </div>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 p-2 text-sm">
        {product.quantity_cart}
      </span>
    </div>
  );
};
export default ProductOrder;

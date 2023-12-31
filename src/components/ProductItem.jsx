import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="border border-lg overflow-hidden shadow-sm hover:shadow-lg  transition-shadow duration-200 ease-in dark:bg-slate-900 dark:text-white"
      key={product.id}
    >
      <img
        className="w-full h-48 object-cover "
        src={product.thumbnail}
        alt="productImage"
      />
      <div className="p-4">
        <h1 className="font-bold text-xl mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4 truncate">{product.description}</p>
        <div className="flex justify-between">
          <span className="text-blue-500 font-semibold ">
            ${product.price.toFixed()}
          </span>
          <div className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in Stock` : "Out of Stock"}
          </div>
        </div>

        <div className="mt-4">
          <span className="text-yellow-500 text-lg">
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-300 text-lg ">
            {"★".repeat(Math.round(5 - product.rating))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

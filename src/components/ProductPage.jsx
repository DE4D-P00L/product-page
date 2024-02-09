import React, { useState } from "react";
import { product } from "../data.js";

function ProductPage() {
  const [item, setItem] = useState(product);
  console.log(item);
  return (
    <div className="flex flex-col-reverse items-center min-h-screen gap-10 md:flex-row">
      <div className="flex-1 p-6 md:p-0 relative">
        <img
          src={item.images[0]}
          alt=""
          className="object-cover max-h-[500px] w-full"
        />
        <div className="flex absolute md:top-[50%] md:gap-3 md:left-0 md:-translate-y-[50%] md:flex-col bottom-0 left-[50%] -translate-x-[50%] gap-1">
          {item.images.map((image, i) => (
            <img
              src={image}
              alt=""
              key={i}
              className="h-[100px] md:w-[100px] w-[70px] object-cover rounded-md cursor-pointer border-[2px] border-white"
            />
          ))}
        </div>
      </div>
      <div className="flex-1 p-7">
        <h1 className="text-2xl font-semibold">{item.name}</h1>
        <h2 className="text-slate-800">{item.brand}</h2>
        <h3 className="px-1.5 py-1 text-sm bg-gray-500 w-fit text-white rounded-lg">
          {item.category}
        </h3>
        <div className="flex divide-x-[1px] divide-gray-950 my-2">
          <span className="pr-1.5 py-1">Rating: {item.rating}</span>
          <span className="pl-1.5 py-1">Reviews: {item.numReviews}</span>
        </div>
        <div>
          <h3>
            <span className="font-semibold">Price:</span> ₹{item.price}
          </h3>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">{item.options[0].name}</h3>
          <div className="flex gap-1">
            {item.options[0].values.map((value, i) => (
              <span key={i} className={`bg-gray-300 p-1 rounded-md`}>
                {value}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h1
            className={`font-semibold mt-2 ${
              item.available ? "text-green-600" : "text-red-600"
            }`}>
            {item.available ? `In Stock (${item.stock})` : "Out of Stock"}
          </h1>
          <div className="flex gap-2 mt-2 flex-col w-[200px]">
            <button className="px-5 py-1 rounded-full bg-yellow-400 cursor-pointer">
              Add to Cart
            </button>
            <button className="px-5 py-1 rounded-full bg-orange-400 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="font-semibold">About this item</h2>
          <p className="text-slate-800 text-sm">{item.description}</p>
        </div>
        <ul className="text-sm list-disc ml-5">
          <h2 className="text-lg -ml-4 mt-2 font-semibold">Features</h2>
          {item.features.map((feature, i) => (
            <li key={i} className="text-slate-800 text-sm">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;

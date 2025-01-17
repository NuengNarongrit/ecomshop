import React from "react";
import { Link } from "react-router-dom";
import star from '../../../assets/icons/star.svg'
import HeroProduct from "../partials/HeroProduct.jsx";
import Category from "./Category.jsx";

function CartProduct() {
  const products = [
    {
      id: 1,
      name: "สินค้า A",
      brand: "Brand",
      price: "$149",
      priceOld: "$199",
      img: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "สินค้า B",
      brand: "Brand",
      price: "$149",
      priceOld: "$199",
      img: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "สินค้า C",
      brand: "Brand",
      price: "$149",
      priceOld: "$199",
      img: "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "สินค้า D",
      brand: "Brand",
      price: "$149",
      priceOld: "$199",
      img: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "สินค้า E",
      brand: "Brand",
      price: "$149",
      priceOld: "$199",
      img: "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "สินค้า F",
      brand: "Brand",
      price: "$149",
      priceOld: "$199",
      img: "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div>
      <HeroProduct/>
      <Category/>
      <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4">DEMO Product List </h1>
      </div>
      {/* Grid Section - Starts Here */}
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 group animate-slide-fade">{/* hover:scale-105 hover:shadow-xl hover:animate-fadeInUp */}
            <Link to={`/ecomshop/product/${product.id}`}>
            <div className="relative overflow-hidden">
              <img src={product.img} alt="Product" className="h-80 w-72 object-cover rounded-t-xl"/>
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-black text-white py-2 px-5">Add to cart</button>
              </div>
            </div>
              <div className="px-4 py-3 w-72">
                <div className="flex items-center gap-2">
                  <span className="badge">{product.brand}</span>
                  <span className="badge">official store</span>
                </div>
               
                <h2 className="product-title pt-2" title="Best Headephone Ever">
                  {product.name}
                </h2>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {product.priceOld}
                    </p>
                  </del>
                  <div className="flex items-center pl-4">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <span className="text-xs ml-2 text-gray-500">20k reviews</span>
                  </div>
                  <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
      {/* <CardProductNew /> */}
      
      {/* Grid Section - Ends Here */}
    </div>
  );
}

export default CartProduct;


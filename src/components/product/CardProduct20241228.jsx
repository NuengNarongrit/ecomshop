import React from "react";
import { Link } from "react-router-dom";
import CardProductSlide from './CardProductSlide';
import star from '../../assets/icons/star.svg'
import starHalf from '../../assets/icons/star-half.svg'


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
      <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4">DEMO Product card </h1>
          <h1 className="text-3xl">Tailwind CSS</h1>
      </div>
      <CardProductSlide/>
      {/* Grid Section - Starts Here */}
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <div className="card">
            <button class="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg></button>
            <img src={product.img} alt="" className="w-full h-full object-cover"/>
            <div className="p-5 flex flex-col gap-3">
              {/* badge */}
              <div className="flex items-center gap-2">
                <span className="badge">{product.brand}</span>
                <span className="badge">official store</span>
              </div>

              {/* product title */}
              <h2 className="product-title" title="Best Headephone Ever">
                {product.name}
              </h2>

              {/* product price */}
              <div>
                <span className="text-xl font-bold">{product.price}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm line-through opacity-50">{product.priceOld}</span>
                  <span className="discount-percent">Save 20%</span>
                </div>
              </div>

              {/* product rating */}
              <span className="flex items-center mt-1">
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  {/* <img src={starHalf} alt=""/> */}
                  <span className="text-xs ml-2 text-gray-500">20k reviews</span>
              </span>

              {/* product action button */}
              <div className="mt-5 flex gap-2">
                <button className="button-primary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Grid Section - Ends Here */}
    </div>
  );
}

export default CartProduct;

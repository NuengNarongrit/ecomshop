import React from "react";

function InfoTwo() {
  return (
    <>
      {/* <!-- Component Code --> */}

      <div
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"
        }}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
        <div class="z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto ">
          <div class="sm:border-r-2 ">
            <div class="flex items-end">
              <div class="">
                <div class="border text-center h-24 w-24 flex items-center justify-center">
                  <div>
                    <p class="">Hours</p>
                    <p class="text-xl sm:text-2xl font-bold">16</p>
                  </div>
                </div>

                <div class="bg-white text-gray-900 text-center h-24 w-24 flex items-center justify-center">
                  <div>
                    <p class="">Mins</p>
                    <p class="text-xl sm:text-2xl font-bold">39</p>
                  </div>
                </div>

                <div class="bg-rose-600 text-center h-24 w-24 flex items-center justify-center">
                  <div>
                    <p class="">15</p>
                    <p class="text-xl sm:text-2xl font-bold">Secs</p>
                  </div>
                </div>
              </div>
              <div class="bg-gray-800 text-center h-48 w-48 flex items-center justify-center">
                <div>
                  <p class="">Days</p>
                  <p class="text-xl sm:text-3xl font-bold">150</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-left mt-6">
            <div class="mb-4 text-white">
              <svg
                height="35px"
                class="mb-2"
                fill="#5a67d8"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 32 32"
                xml:space="preserve"
              >
                <g>
                  <g id="right_x5F_quote">
                    <g>
                      <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                      <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                    </g>
                  </g>
                </g>
              </svg>
              <p class="mt-2 text-base leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div class="text-sm mt-5">
                <a
                  href="#"
                  class="font-medium leading-none text-rose-600 hover:text-white transition duration-500 ease-in-out"
                >
                  Narongrit Muneeprom
                </a>
                <p>DEV</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default InfoTwo;

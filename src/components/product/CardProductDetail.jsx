import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react'

function CardProductDetail() {

  const [image, setImage] = useState(1);
  const { id }            = useParams();
  return (
    <div className='antialiased'>
      <div className="py-6">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" class="hover:underline hover:text-gray-600">Home</a>
            <span>
              <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth ="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <a href="#" class="hover:underline hover:text-gray-600">Product</a>
            <span>
              <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span>Product Detail</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  {image === 1 && <span className="text-5xl">1</span>}
                  {image === 2 && <span className="text-5xl">2</span>}
                  {image === 3 && <span className="text-5xl">3</span>}
                  {image === 4 && <span className="text-5xl">4</span>}
                </div>
                <div className="flex -mx-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex-1 px-2">
                      <button
                        onClick={() => setImage(i)} // เปลี่ยนค่าของ image เมื่อคลิก
                        className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                          image === i ? 'ring-2 ring-indigo-300 ring-inset' : ''
                        }`}
                      >
                        <span className="text-2xl">{i}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">Lorem ipsum dolor, sit amet consectetur, adipisicing elit.</h2>
              <p class="text-gray-500 text-sm">By <a href="#" class="text-indigo-600 hover:underline">ABC Company</a></p>

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span class="text-indigo-400 mr-1 mt-1">$</span>
                    <span class="font-bold text-indigo-600 text-3xl">25</span>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                  <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>

              <p class="text-gray-500">Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.</p>

              <div class="flex py-4 space-x-4">
                <div class="relative">
                  <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                  <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>

                <button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
          <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 class="text-xl font-bold text-gray-800">Product information</h3>
            <ul class="mt-4 space-y-6 text-gray-800">
                <li class="text-sm">TYPE <span class="ml-4 float-right">LAPTOP</span></li>
                <li class="text-sm">RAM <span class="ml-4 float-right">16 BG</span></li>
                <li class="text-sm">SSD <span class="ml-4 float-right">1000 BG</span></li>
                <li class="text-sm">PROCESSOR TYPE <span class="ml-4 float-right">INTEL CORE I7-12700H</span></li>
                <li class="text-sm">PROCESSOR SPEED <span class="ml-4 float-right">2.3 - 4.7 GHz</span></li>
                <li class="text-sm">DISPLAY SIZE INCH <span class="ml-4 float-right">16.0</span></li>
                <li class="text-sm">DISPLAY SIZE SM <span class="ml-4 float-right">40.64 cm</span></li>
                <li class="text-sm">DISPLAY TYPE <span class="ml-4 float-right">OLED, TOUCHSCREEN, 120 Hz</span></li>
                <li class="text-sm">DISPLAY RESOLUTION <span class="ml-4 float-right">2880x1620</span></li>
            </ul>
          </div>
          <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 class="text-xl font-bold text-gray-800">Reviews(10)</h3>
            <div class="grid md:grid-cols-2 gap-12 mt-4">
                <div class="space-y-3">
                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">5.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-2/3 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">4.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-1/3 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">3.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-1/6 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">2.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-1/12 h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                    </div>

                    <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">1.0</p>
                        <svg class="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <div class="bg-gray-400 rounded w-full h-2 ml-3">
                            <div class="w-[6%] h-full rounded bg-blue-600"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                    </div>
                </div>

                <div>
                    <div class="flex items-start">
                        <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />
                        <div class="ml-3">
                            <h4 class="text-sm font-bold text-gray-800">John Doe</h4>
                            <div class="flex space-x-1 mt-1">
                                <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <p class="text-xs !ml-2 font-semibold text-gray-800">2 mins ago</p>
                            </div>
                            <p class="text-sm mt-4 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <button type="button" class="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-gray-800 font-bold rounded">Read all reviews</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProductDetail

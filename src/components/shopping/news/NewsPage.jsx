import React from 'react'

export default function NewsPage() {
  return (
    <section className='text-gray-600 body-font '>
        <div className="container px-5 py-24 mx-auto max-w-7x1 animate-slide-fade">
            <div className="flex flex-wrap w-full mb-4 p-4">
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className='sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900'>News</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg">
                        <img className='lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6' src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400" />
                        <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>SUBTITLE</h3>
                        <h2 className='text-lg text-gray-900 font-medium'>Chichen Itza</h2>
                        <p className='leading-relaxed text-base'>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg">
                        <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg" alt="Image Size 720x400" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg">
                        <img className='lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6' src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574" alt="Image Size 720x400" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

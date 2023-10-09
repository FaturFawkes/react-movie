import React, { Component } from 'react'

interface Movie{
    id: number
    image: string
} 
export class Card extends Component<Movie> {
  render() {
    const {image} =  this.props
    return (    
        // <div className="card lg:w-[245px] lg:h-[140px] md:w-[205px] lg:h-[140px] mx-4 my-2 bg-Night p-0 rounded-none shadow-xl hover:scale-125 transition">
        //     <figure><img src={`${image}`} alt="Shoes" /></figure>
        // </div>

        <div className="xl:w-1/3 md:w-1/2 p-4 hover:z-[99]">
          <div className="rounded-lg group hover:scale-125 transition duration-[1s]">
            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={`${image}`} alt="Image Size 720x400"/>
            <div className='text-lg text-gray-900 bg-white mt-[-23px] font-medium title-font absolute mb-4 hidden transition group-hover:block'>
              <h2 className="">Chichen Itza</h2>
              <p className="leading-relaxed text-base hidden transition group-hover:block ">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Card
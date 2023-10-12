import React, { Component } from 'react'

interface Movie{
    image: string
    title: string
    desc: string
} 
export class Card extends Component<Movie> {
  render() {
    const {image, title, desc} =  this.props
    return (    
        // <div className="card lg:w-[245px] lg:h-[140px] md:w-[205px] lg:h-[140px] mx-4 my-2 bg-Night p-0 rounded-none shadow-xl hover:scale-125 transition">
        //     <figure><img src={`${image}`} alt="Shoes" /></figure>
        // </div>

        <div className="xl:w-1/3 md:w-1/2 p-4 hover:z-[1]">
          <div className="rounded-lg group hover:scale-[1.1] transition duration-[.7s]">
            <img 
              className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" 
              src={`https://image.tmdb.org/t/p/w500/${image}`} 
              alt="Image Size 720x400"
            />
            <div className='text-lg text-gray-900 w-[391px] p-[10px] bg-gray-200 mt-[-24px] font-medium title-font absolute mb-4 hidden transition group-hover:block rounded'>
              <h2 className="">{`${title}`}</h2>
              <p className="leading-relaxed text-base text-[12px] hidden transition group-hover:block ">{`${desc}`}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Card
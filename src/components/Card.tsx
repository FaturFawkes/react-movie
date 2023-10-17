import axios from 'axios'
import React, { Component } from 'react'

interface Movie{
    image: string
    title: string
    desc: string
    category: number[]
} 

interface Genre{
  data: []
} 
export class Card extends Component<Movie, Genre> {

  baseUrl = import.meta.env.VITE_BASE_URL 
  apiKey = import.meta.env.VITE_API_KEY
  async handleGenre() {
    axios.get(`${this.baseUrl}/genre/movie/list?language=en?${this.apiKey}`)
    .then((response) => {
      this.setState({data: response.data.genres})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  

  render() {
    const {image, title, desc, category} =  this.props
    return (    
        <div className="xl:w-1/3 md:w-1/2 p-4 hover:z-[1]">
          <div className="rounded-lg group hover:scale-[1.2] transition duration-[.5s] delay-200">
            <img 
              className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" 
              src={`https://image.tmdb.org/t/p/w500/${image}`} 
              alt="Image Size 720x400"
            />
            <div className='text-lg text-white max-sm:w-[512px] sm:w-[512px] md:w-[349px] lg:w-[477px] xl:w-[392px] 2xl:w-[477px] p-[10px] bg-Night shadow-2xl mt-[-24px] font-medium title-font absolute mb-4 hidden transition group-hover:block rounded'>
              {/* <h2 className="">{`${title}`}</h2> */}
              <p className="leading-relaxed text-[10px] hidden transition group-hover:block ">{category}</p>
              <button type="button" className="text-white border-2 border-slate-600 focus:ring-1 focus:outline-none focus:ring-white font-medium rotate-90 rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-Night dark:hover:border-white">
                <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>
    )
  }
}

export default Card